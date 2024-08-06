import axios from "axios";

const NYT_API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;

const getSearchQuery = (searchTerm, source) => {
  if (source) {
    return searchTerm;
  }
  if (source === undefined && searchTerm === "") {
    return "";
  } else {
    return "The New York Times";
  }
};

export const fetchNytArticles = async (searchTerm, filters) => {
  console.log("Fetching NYT articles...", searchTerm, filters);
  const { date, category, source } = filters;

  let formattedSearchTerm = getSearchQuery(searchTerm, source);
  console.log("Formatted search term:", formattedSearchTerm === "");

  const params = {
    q: formattedSearchTerm || null,
    "api-key": NYT_API_KEY,
    page: 0,
    sort: "newest",
    facet: "true",
    facet_fields: source ? "source" : undefined,
    facet_filter: "true",
  };

  if (date) {
    params.begin_date = date.replace(/-/g, "");
  }

  if (category) {
    params.fq = `section_name:("${category}")`;
  }

  try {
    const response = await axios.get(NYT_API_URL, { params });
    const articles = response.data.response.docs;
    return searchTerm !== ""
      ? articles.slice(0, 50)
      : searchTerm === ""
      ? []
      : articles.slice(0, 3);
  } catch (error) {
    console.error(
      "Error fetching NYT articles:",
      error.response ? error.response.data : error.message
    );
    return [];
  }
};
