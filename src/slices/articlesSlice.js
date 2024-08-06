import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNewsApiArticles } from "../services/newsAPI";
import { fetchNytArticles } from "../services/nytAPI";
// import { fetchGuardianArticles } from "../services/guardianAPI";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async ({ searchTerm, filters }) => {
    try {
      const [newsApiArticles, nytArticles] = await Promise.all([
        fetchNewsApiArticles(searchTerm, filters),
        fetchNytArticles(searchTerm, filters),
        // fetchGuardianArticles(searchTerm, filters),
      ]);

      const normalizedNewsApiArticles = newsApiArticles.map((article) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        author: article.author || "Unknown Author",
        source: article.source.name,
        date: formatDate(article.publishedAt),
        category: article.category || "General",
      }));

      const normalizedNytArticles = nytArticles.map((article) => ({
        title: article.headline.main,
        description: article.headline.main + ". " + article.abstract,
        url: article.web_url,
        author: article.byline.original || "Unknown Author",
        source: "New York Times", // Ensure a consistent source name
        date: formatDate(article.pub_date),
        category: article.section_name || "General",
      }));

      // const normalizedGuardianArticles = guardianArticles.map((article) => ({
      //   title: article.webTitle,
      //   description: article.fields.trailText,
      //   url: article.webUrl,
      //   author: article.fields.byline || "Unknown Author",
      //   source: "The Guardian", // Ensure a consistent source name
      //   date: article.webPublicationDate,
      //   category: article.sectionName || "General",
      // }));

      return [
        ...normalizedNewsApiArticles,
        ...normalizedNytArticles,
        // ...normalizedGuardianArticles,
      ];
    } catch (error) {
      throw new Error("Failed to fetch articles");
    }
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
