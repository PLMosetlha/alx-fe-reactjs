import React from "react";

const SearchBar = ({ username, setUsername, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search for a GitHub user"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
