import Axios from "axios";
import { cloneElement, useEffect, useState } from "react";
import { useEnvironment } from "../../../contexts/EnvironmentContext";
import { useCurrentLanguage } from "../../../contexts/LanguageContext";

export const BlogSectionContainer = ({ element, content }) => {
  const [categories, setCategories] = useState(null);
  const [data, setData] = useState(null);
  const language = useCurrentLanguage();
  const { API_FRONTEND, SITE_URL } = useEnvironment();

  const {
    categoryID: { value: categoryID },
  } = content;

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await Axios.get(
        `${API_FRONTEND}/blog/category?language=${language}`
      );
      setCategories(data);
    }

    fetchCategories();
  }, [language]);

  useEffect(() => {
    if (categories) {
      const currentCategory = categories.find(({ _id }) => _id === categoryID);
      async function fetchBlogFilter() {
        const {
          data: { data },
        } = await Axios.get(
          `${API_FRONTEND}/blog/filter?${
            currentCategory ? `url=${currentCategory.url[language]}` : ""
          }&language=${language}&limit=${5}`
        );

        if (data.length)
          setData({
            cards: data.map(({ title, category, url, photo, dateText }) => ({
              title,
              dateText,
              categoryTitle: category[0].title,
              categoryBackgroundColor: category[0].backgroundColor,
              categoryBorderColor: category[0].borderColor,
              categoryColor: category[0].textColor,
              url: `/blog/${url}`,
              photoSource: `${SITE_URL}/${photo[0]}`,
            })),
            buttonLink: `/blog-category/${
              currentCategory ? currentCategory.url[language] : "all"
            }`,
          });
      }
      fetchBlogFilter();
    }
  }, [language, categories, categoryID]);

  if (data)
    return cloneElement(element, {
      ...element.props,
      ...data,
    });

  return cloneElement(element, {
    ...element.props,
    cards: [],
    buttonLink: "/blog-category/all",
  });
};
