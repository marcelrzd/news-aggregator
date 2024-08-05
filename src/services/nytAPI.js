import axios from "axios";

const NYT_API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;

export const fetchNytArticles = async (searchTerm, filters) => {
  const { date, category } = filters;
  const params = {
    q: searchTerm,
    "api-key": NYT_API_KEY,
    page: 0,
    sort: "newest",
  };

  if (date) {
    params.begin_date = date.replace(/-/g, "");
  }

  if (category) {
    params.fq = `section_name:("${category}")`;
  }

  try {
    const response = await axios.get(NYT_API_URL, { params });
    const articles = response.data.response.docs.slice(0, 3); // Limit to 3 articles
    return articles;
  } catch (error) {
    console.error("Error fetching NYT articles:", error);
    return [];
  }
};
