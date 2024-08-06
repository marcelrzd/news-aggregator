import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = ({
  filters,
  searchTerm,
  onSearch,
  onFilterChange,
  onSearchClick,
}) => {
  return (
    <div className="flex flex-col gap-2 py-4 sm:flex-row">
      <div className="flex">
        <select
          className="w-full p-2 border border-gray-300 rounded-sm sm:w-28"
          onChange={(e) =>
            onFilterChange(
              e.target.value,
              e.target.options[e.target.selectedIndex].text.toLowerCase()
            )
          }
        >
          <option value="">Filters</option>
          <option value="category">Category</option>
          <option value="source">Source</option>
          <option value="date">Date</option>
        </select>
      </div>
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
