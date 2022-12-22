import Axios from "axios";
import { cloneElement, useEffect, useState } from "react";
import { useEnvironment } from "../../../contexts/EnvironmentContext";
import {
  useCurrentLanguage,
  useTranslation,
} from "../../../contexts/LanguageContext";

export const useConstructionProgress = (el, content) => {
  const [categories, setCategories] = useState(null);
  const [data, setData] = useState(null);
  const language = useCurrentLanguage();
  const t = useTranslation();
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
        const { data } = await Axios.get(
          `${API_FRONTEND}/blog/filter?${
            currentCategory ? `url=${currentCategory.url[language]}` : ""
          }&language=${language}&limit=${6}`
        );

        if (data && data.length)
          setData({
            cards: data.slice(1).map(({ title, url }) => ({
              title,
              buttonLink: `/blog/${url}`,
              buttonName: t("DETAILS"),
            })),
            cardImg: {
              title: data[0].title,
              categoryTitle: data[0].category[0].title,
              categoryBackgroundColor: data[0].category[0].backgroundColor,
              categoryBorderColor: data[0].category[0].borderColor,
              categoryColor: data[0].category[0].textColor,
              url: `/blog/${data[0].url}`,
              photoSource: `${SITE_URL}/${data[0].photo[0]}`,
              createdAt: data[0].createdAt,
            },
          });
      }
      fetchBlogFilter();
    }
  }, [language, categories, categoryID]);

  if (data)
    return cloneElement(el, {
      ...el.props,
      ...data,
    });

  return null;
};
