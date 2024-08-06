import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar";
import ArticleList from "../../components/ArticleList";
import { fetchArticles } from "../../slices/articlesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  const articlesStatus = useSelector((state) => state.articles.status);

  console.log(articles);

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState("");

  // Fetch articles on initial render
  useEffect(() => {
    dispatch(fetchArticles({ searchTerm, filters }));
  }, [dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(value);
    dispatch(fetchArticles({ searchTerm, filters: value }));
  };

  const handleSearchClick = () => {
    dispatch(fetchArticles({ searchTerm, filters }));
  };

  return (
    <div className="flex flex-grow h-full p-4">
      <div className="container">
        <SearchBar
          filters={filters}
          searchTerm={searchTerm}
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          onSearchClick={handleSearchClick}
        />

        {articlesStatus === "loading" && <p>Loading articles...</p>}
        {articlesStatus === "succeeded" && articles.length === 0 && (
          <p>No Articles were found, please search again...</p>
        )}
        {articlesStatus === "succeeded" && articles.length > 0 && (
          <ArticleList articles={articles} />
        )}

        {articlesStatus === "failed" && (
          <p>There was an error while fetching the articles! </p>
        )}
      </div>
    </div>
  );
};

export default Home;
