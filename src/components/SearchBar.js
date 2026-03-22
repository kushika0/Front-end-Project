import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search product..."
        className="border p-2 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;