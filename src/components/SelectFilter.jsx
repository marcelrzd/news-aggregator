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

const SelectFilter = () => {
  return (
    <div className="flex items-center">
      <Select>
        <SelectTrigger className="w-full sm:w-28">
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
            <SelectItem value="bbc-news">BBC News</SelectItem>
            <SelectItem value="laura-fox">Laura Fox</SelectItem>
            <SelectItem value="poppy-atkinson-gibson">
              Poppy Atkinson Gibson
            </SelectItem>
            <SelectItem value="rebecca-lawrence">Rebecca Lawrence</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
            <SelectItem value="seekingalpha">SeekingAlpha.com</SelectItem>
            <SelectItem value="sa-transcripts">SA Transcripts</SelectItem>
            <SelectItem value="amrit-dhillon">Amrit Dhillon</SelectItem>
            <SelectItem value="philip-bump">Philip Bump</SelectItem>
            <SelectItem value="raymond-ibrahim">Raymond Ibrahim</SelectItem>
            <SelectItem value="codie-bullen">Codie Bullen</SelectItem>
            <SelectItem value="bernama">Bernama</SelectItem>
            <SelectItem value="laura-parkin">Laura Parkin</SelectItem>
            <SelectItem value="laura-snapes">Laura Snapes</SelectItem>
            <SelectItem value="anders-joelson">Anders Joelson</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel className="text-lg font-bold text-gray-500">
              Authors
            </SelectLabel>
            <SelectItem value="bbc-news">BBC News</SelectItem>
            <SelectItem value="laura-fox">Laura Fox</SelectItem>
            <SelectItem value="poppy-atkinson-gibson">
              Poppy Atkinson Gibson
            </SelectItem>
            <SelectItem value="rebecca-lawrence">Rebecca Lawrence</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
            <SelectItem value="seekingalpha">SeekingAlpha.com</SelectItem>
            <SelectItem value="sa-transcripts">SA Transcripts</SelectItem>
            <SelectItem value="amrit-dhillon">Amrit Dhillon</SelectItem>
            <SelectItem value="philip-bump">Philip Bump</SelectItem>
            <SelectItem value="raymond-ibrahim">Raymond Ibrahim</SelectItem>
            <SelectItem value="codie-bullen">Codie Bullen</SelectItem>
            <SelectItem value="bernama">Bernama</SelectItem>
            <SelectItem value="laura-parkin">Laura Parkin</SelectItem>
            <SelectItem value="laura-snapes">Laura Snapes</SelectItem>
            <SelectItem value="anders-joelson">Anders Joelson</SelectItem>
            <SelectItem value="unknown-author">Unknown Author</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectFilter;
