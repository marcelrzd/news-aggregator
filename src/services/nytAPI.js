import axios from "axios";

const NYT_API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;

export const fetchNytArticles = async (searchTerm) => {
  try {
    const response = await axios.get(NYT_API_URL, {
      params: {
        q: searchTerm,
        "api-key": NYT_API_KEY,
      },
    });
    return response.data.response.docs;
  } catch (error) {
    console.error(
      "Error fetching NYT articles:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
