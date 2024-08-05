import axios from "axios";

const GUARDIAN_API_URL = "https://content.guardianapis.com/search";
const GUARDIAN_API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;

export const fetchGuardianArticles = async (searchTerm, filters) => {
  const { date, category } = filters;
  try {
    const response = await axios.get(GUARDIAN_API_URL, {
      params: {
        q: searchTerm,
        section: category,
        "from-date": date,
        "api-key": GUARDIAN_API_KEY,
        pageSize: 3,
      },
    });
    return response.data.response.results;
  } catch (error) {
    console.error(
      "Error fetching Guardian articles:",
      error.response ? error.response.data : error.message
    );
    return [];
  }
};
