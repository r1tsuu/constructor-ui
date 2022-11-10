import axios from "axios";
import { omitEmpties } from "../utils";

function utmMarks() {
  const marks = [
    "utm_source",
    "utm_medium",
    "utm_content",
    "utm_term",
    "utm_campaign",
  ];

  const utmMarks = {};

  marks.forEach((mark) => {
    const UTM_NONE = "utm none";
    const utm = mark.toUpperCase();

    utmMarks[utm] =
      decodeURIComponent(
        (new RegExp("[?|&]" + mark + "=" + "([^&;]+?)(&|#|;|$)").exec(
          window.location.search
        ) || [null, ""])[1].replace(/\+/g, "%20")
      ) ||
      null ||
      UTM_NONE;
  });

  return utmMarks;
}

/**
 * @param {{type: 'feedback' | 'subscribe', SITE_URL: string}}
 */
export const sendForm = async ({ form, type, SITE_URL }) => {
  try {
    return await axios.post(`${SITE_URL}/api/frontend/form/${type}`, {
      ...omitEmpties(form),
      ...utmMarks(),
      id: type,
      // eslint-disable-next-line no-restricted-globals
      url: window.location.href,
    });
  } catch (e) {
    console.log(e);
    return {
      status: 0,
    };
  }
};
