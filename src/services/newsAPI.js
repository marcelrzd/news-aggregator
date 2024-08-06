import axios from "axios";

const NEWS_API_URL_TOP_HEADLINES = "https://newsapi.org/v2/top-headlines";
const NEWS_API_URL_EVERYTHING = "https://newsapi.org/v2/everything";
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const formatSource = (source) => {
  return source.toLowerCase().replace(/\s+/g, "-");
};

export const fetchNewsApiArticles = async (searchTerm, filters) => {
  const { date, category, source } = filters;

  let formattedSearchTerm = searchTerm;
  let apiUrl = NEWS_API_URL_TOP_HEADLINES;

  if (source || searchTerm) {
    formattedSearchTerm = formatSource(searchTerm);
    apiUrl = NEWS_API_URL_EVERYTHING;
  }
  console.log(apiUrl);
  const params = {
    q: searchTerm,
    from: date || undefined,
    category: category || undefined,
    sources: source ? formattedSearchTerm : "ESPN",
    pageSize: 40,
    apiKey: NEWS_API_KEY,
  };

  try {
    const response = await axios.get(apiUrl, { params });
    return response.data.articles;
  } catch (error) {
    console.error(
      "Error fetching articles:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
