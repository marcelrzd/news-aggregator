import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";
import ArticleList from "../../components/ArticleList";
import { fetchArticles } from "../../slices/articlesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  console.log("articles", articles);
  const articlesStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    date: "",
    category: "",
    source: "",
  });

  useEffect(() => {
    // Fetch articles when the page loads
    dispatch(fetchArticles({ searchTerm, filters }));
  }, [dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <div className="flex flex-grow h-full p-4">
      <div className="container">
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        {/* <Filters filters={filters} onFilterChange={handleFilterChange} /> */}
        <ArticleList articles={articles} />
      </div>
    </div>
  );
};

export default Home;
