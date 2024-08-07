import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import SelectFilter from "./SelectFilter";

const SearchBar = ({
  filters,
  searchTerm,
  onSearch,
  onFilterChange,
  onSearchClick,
}) => {
  return (
    <div className="flex flex-col w-full gap-4 py-4 sm:gap-2 sm:flex-row">
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for articles..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <Button variant="outline" type="button" onClick={onSearchClick}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
