import axios from "axios";

const NEWS_API_URL = "https://newsapi.org/v2/everything";
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNewsApiArticles = async (searchTerm) => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        q: searchTerm ? searchTerm : "news",
        apiKey: NEWS_API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error(
      "Error fetching NewsAPI articles:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
