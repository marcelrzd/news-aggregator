import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar";
import ArticleList from "../../components/ArticleList";
import { fetchArticles } from "../../slices/articlesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  const articlesStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);
  // articles.map((item) => console.log(item.source));
  console.log(articles);

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState("");

  useEffect(() => {
    dispatch(fetchArticles({ searchTerm, filters }));
  }, [dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(value);
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
        {articlesStatus === "succeded" && articles.length === 0 && (
          <p>No Articles were found, please search again...</p>
        )}
        {articlesStatus === "succeeded" &&
          (articles.length > 0 ? (
            <ArticleList articles={articles} />
          ) : (
            <p>No Articles were found, please search again...</p>
          ))}

        {articlesStatus === "failed" && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default Home;
