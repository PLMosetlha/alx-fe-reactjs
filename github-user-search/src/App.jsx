import React, { useState } from "react";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import githubApi from "./githubApi";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await githubApi.getUserData(username);
      setUserData(data);
    } catch (error) {
      console.error("Error searching for user:", error);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchBar
        username={username}
        setUsername={setUsername}
        onSearch={handleSearch}
      />
      <UserProfile userData={userData} />
    </div>
  );
}

export default App;
