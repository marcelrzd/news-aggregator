import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "./ui/select";

const SelectFilter = ({ onFilterChange }) => {
  const handleChange = (value) => {
    onFilterChange(value);
  };

  return (
    <div className="flex items-center">
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-full sm:w-48">
          <SelectValue placeholder="Filters" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-lg font-bold text-gray-500">
              Categories
            </SelectLabel>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="tv">TV</SelectItem>
            <SelectItem value="television">Television</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="world">World</SelectItem>
            <SelectItem value="politics">Politics</SelectItem>
            <SelectItem value="regional">Regional</SelectItem>
            <SelectItem value="national">National</SelectItem>
            <SelectItem value="science">Science</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel className="text-lg font-bold text-gray-500">
              Sources
            </SelectLabel>
            <SelectItem value="BBC News">BBC News</SelectItem>
            <SelectItem value="New York Times">New York Times</SelectItem>
            <SelectItem value="Laura Fox">Laura Fox</SelectItem>
            <SelectItem value="Poppy Atkinson Gibson">
              Poppy Atkinson Gibson
            </SelectItem>
            <SelectItem value="Rebecca Lawrence">Rebecca Lawrence</SelectItem>
            <SelectItem value="Editor">Editor</SelectItem>
            <SelectItem value="SeekingAlpha.com">SeekingAlpha.com</SelectItem>
            <SelectItem value="SA Transcripts">SA Transcripts</SelectItem>
            <SelectItem value="Amrit Dhillon">Amrit Dhillon</SelectItem>
            <SelectItem value="Philip Bump">Philip Bump</SelectItem>
            <SelectItem value="Open in The Local app">
              Open in The Local app
            </SelectItem>
            <SelectItem value="Raymond Ibrahim">Raymond Ibrahim</SelectItem>
            <SelectItem value="Codie Bullen">Codie Bullen</SelectItem>
            <SelectItem value="Bernama">Bernama</SelectItem>
            <SelectItem value="Laura Parkin">Laura Parkin</SelectItem>
            <SelectItem value="Laura Snapes">Laura Snapes</SelectItem>
            <SelectItem value="Anders Joelson">Anders Joelson</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel className="text-lg font-bold text-gray-500">
              Authors
            </SelectLabel>
            <SelectItem value="BBC News">BBC News</SelectItem>
            <SelectItem value="Laura Fox">Laura Fox</SelectItem>
            <SelectItem value="Poppy Atkinson Gibson">
              Poppy Atkinson Gibson
            </SelectItem>
            <SelectItem value="Rebecca Lawrence">Rebecca Lawrence</SelectItem>
            <SelectItem value="Editor">Editor</SelectItem>
            <SelectItem value="SeekingAlpha.com">SeekingAlpha.com</SelectItem>
            <SelectItem value="SA Transcripts">SA Transcripts</SelectItem>
            <SelectItem value="Amrit Dhillon">Amrit Dhillon</SelectItem>
            <SelectItem value="Philip Bump">Philip Bump</SelectItem>
            <SelectItem value="Open in The Local app">
              Open in The Local app
            </SelectItem>
            <SelectItem value="Raymond Ibrahim">Raymond Ibrahim</SelectItem>
            <SelectItem value="Codie Bullen">Codie Bullen</SelectItem>
            <SelectItem value="Bernama">Bernama</SelectItem>
            <SelectItem value="Laura Parkin">Laura Parkin</SelectItem>
            <SelectItem value="Laura Snapes">Laura Snapes</SelectItem>
            <SelectItem value="Anders Joelson">Anders Joelson</SelectItem>
            <SelectItem value="Unknown Author">Unknown Author</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectFilter;
