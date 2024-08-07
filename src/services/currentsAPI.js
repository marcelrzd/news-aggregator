import axios from "axios";

const CURRENTS_API_URL = "https://api.currentsapi.services/v1/search";
const CURRENTS_API_KEY = process.env.REACT_APP_CURRENTS_API_KEY;

export const fetchCurrentsArticles = async (searchTerm) => {
  // const { category } = filters;
  try {
    const response = await axios.get(CURRENTS_API_URL, {
      params: {
        keywords: searchTerm,
        language: "en",
        // category,
        // start_date: date,
        apiKey: CURRENTS_API_KEY,
      },
    });
    return response.data.news;
  } catch (error) {
    console.error(
      "Error fetching Currents articles:",
      error.response ? error.response.data : error.message
    );
    throw error; // Ensure we throw the error to handle it in the thunk
  }
};
