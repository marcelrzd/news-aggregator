import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNewsApiArticles } from "../services/newsAPI";
import { fetchNytArticles } from "../services/nytAPI";
import { fetchGuardianArticles } from "../services/guardianAPI";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async ({ searchTerm, filters }) => {
    console.log("Fetching articles...", searchTerm, filters);
    const newsApiArticles = await fetchNewsApiArticles(searchTerm, filters);
    const nytArticles = await fetchNytArticles(searchTerm, filters);
    // const guardianArticles = await fetchGuardianArticles(searchTerm, filters);

    const normalizedNewsApiArticles = newsApiArticles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      author: article.author || "Unknown Author",
      source: article.source.name,
      date: article.publishedAt,
      category: article.category || "General",
    }));

    const normalizedNytArticles = nytArticles.map((article) => ({
      title: article.headline.main,
      description: article.headline.main + ". " + article.abstract,
      url: article.web_url,
      author: article.byline.original || "Unknown Author",
      source: article.source,
      date: article.pub_date,
      category: article.section_name || "General",
    }));

    // const normalizedGuardianArticles = guardianArticles.map((article) => ({
    //   title: article.webTitle,
    //   description: article.fields.trailText,
    //   url: article.webUrl,
    //   author: article.fields.byline || "Unknown Author",
    //   source: article.webPublicationDate,
    //   date: article.webPublicationDate,
    //   category: article.sectionName || "General",
    // }));

    return [...normalizedNewsApiArticles, ...normalizedNytArticles];
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
