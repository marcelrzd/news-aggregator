import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar";
import ArticleList from "../../components/ArticleList";
import SelectFilter from "../../components/SelectFilter";
import { fetchArticles } from "../../slices/articlesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  const articlesStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [triggerFetch, setTriggerFetch] = useState(false); // To control fetch on submit

  useEffect(() => {
    dispatch(fetchArticles(""));
  }, [dispatch]);

  useEffect(() => {
    if (triggerFetch) {
      dispatch(fetchArticles(searchTerm));
      setTriggerFetch(false); // Reset trigger
    }
  }, [dispatch, triggerFetch, searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (value) => {
    setFilter(value.toLowerCase().replace(/\s+/g, "-"));
  };

  const handleSearchClick = () => {
    setTriggerFetch(true);
  };

  const filteredArticles = articles.filter((article) => {
    if (!filter) return true;

    const category = Array.isArray(article.category)
      ? article.category.map((cat) => cat.toLowerCase())
      : article.category
      ? article.category.toLowerCase()
      : "";
    const source = article.source
      ? article.source.toLowerCase().replace(/\s+/g, "-")
      : "";
    const author = article.author
      ? article.author.toLowerCase().replace(/\s+/g, "-")
      : "";

    return (
      category.includes(filter) ||
      source.includes(filter) ||
      author.includes(filter)
    );
  });

  return (
    <div className="flex flex-grow h-full p-4">
      <div className="container">
        <div className="flex flex-col justify-between sm:gap-2 sm:flex-row">
          <SelectFilter onFilterChange={handleFilterChange} />
          <SearchBar
            searchTerm={searchTerm}
            onSearch={handleSearch}
            onSearchClick={handleSearchClick}
          />
        </div>

        {articlesStatus === "loading" && <p>Loading articles...</p>}
        {articlesStatus === "succeeded" && filteredArticles.length === 0 && (
          <p>No Articles were found, please search again...</p>
        )}
        {articlesStatus === "succeeded" && filteredArticles.length > 0 && (
          <ArticleList articles={filteredArticles} />
        )}

        {articlesStatus === "failed" && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default Home;
