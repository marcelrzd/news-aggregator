import axios from "axios";

const NEWS_API_URL = process.env.REACT_APP_NEWS_API_URL;
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNewsApiArticles = async (searchTerm, filters) => {
  const { date, category, source } = filters;
  const response = await axios.get(`${NEWS_API_URL}/everything`, {
    params: {
      q: searchTerm,
      from: date,
      category,
      sources: source,
      apiKey: NEWS_API_KEY,
    },
  });
  return response.data.articles;
};
