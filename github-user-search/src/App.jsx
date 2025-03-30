import React, { useState } from "react";
import Search from "./components/Search";
import githubService from "./services/githubService";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const data = await githubService.fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && !loading && !error && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
