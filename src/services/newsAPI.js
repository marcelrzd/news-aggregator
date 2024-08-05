import axios from "axios";

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNewsApiArticles = async (searchTerm, filters) => {
  const { date, category, source } = filters;

  const response = await axios.get(NEWS_API_URL, {
    params: {
      // country: "us",
      q: searchTerm,
      from: date,
      category: category,
      sources: source ? source : "bbc-news",
      pageSize: 3,
      apiKey: NEWS_API_KEY,
    },
  });
  return response.data.articles;
};
