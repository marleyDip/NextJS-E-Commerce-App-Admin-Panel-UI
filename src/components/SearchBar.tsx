import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center gap-3 px-2 py-1 ring-1 bg-white ring-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 focus-within:ring-1 focus-within:ring-blue-500">
      <Search className="w-5 h-5 text-gray-400" />
      <input
        id="search"
        type="text"
        placeholder="Search for products..."
        className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
      />
    </div>
  );
};

export default SearchBar;
