import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = ({ filters, searchTerm, onSearch }) => {
  return (
    <div className="flex flex-row gap-2 py-4">
      <div className="flex">
        <select className="p-2 border border-gray-300 rounded-md">
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
      <Button variant="outline" type="submit">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
