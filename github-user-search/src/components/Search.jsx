import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username); // Pass username to the parent component (App)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
