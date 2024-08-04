import axios from "axios";

const NYT_API_URL = process.env.REACT_APP_NYT_API_URL;
const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;

export const fetchNytArticles = async (searchTerm, filters) => {
  const { date, category, source } = filters;
  const response = await axios.get(NYT_API_URL, {
    params: {
      q: searchTerm,
      fq: `section_name:("${category}")`,
      begin_date: date ? date.replace(/-/g, "") : undefined,
      "api-key": NYT_API_KEY,
    },
  });
  return response.data.response.docs;
};
