import ArticleList from "../../components/ArticleList";
import Filters from "../../components/Filters";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <div className="flex flex-grow h-full p-4">
      <div className="container">
        <SearchBar />
        <Filters />
        <ArticleList />
      </div>
    </div>
  );
};

export default Home;
