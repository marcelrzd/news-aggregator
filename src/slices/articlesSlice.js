import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNewsApiArticles } from "../services/newsAPI";
import { fetchNytArticles } from "../services/nytAPI";
import { fetchGuardianArticles } from "../services/guardianAPI";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async ({ searchTerm, filters }) => {
    const newsApiArticles = await fetchNewsApiArticles(searchTerm, filters);
    const nytArticles = await fetchNytArticles(searchTerm, filters);
    const guardianArticles = await fetchGuardianArticles(searchTerm, filters);
    console.log("guardianAPI", guardianArticles);
    return [...newsApiArticles, ...nytArticles];
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
