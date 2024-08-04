import axios from "axios";

const GUARDIAN_API_URL = process.env.REACT_APP_NYT_API_URL;
const GUARDIAN_API_KEY = process.env.REACT_APP_NYT_API_API;

export const fetchGuardianArticles = async (searchTerm, filters) => {
  const { date, category, source } = filters;
  const response = await axios.get(GUARDIAN_API_URL, {
    params: {
      q: searchTerm,
      section: category,
      "from-date": date,
      "api-key": GUARDIAN_API_KEY,
    },
  });
  return response.data.response.results;
};
