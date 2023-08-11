import React, { useState } from "react";
import axios from "axios";

function GitHubCard() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Github User Card</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Get User Info</button>
      </form>
      {user && (
        <div className="card">
          <img src={user.avatar_url} alt="User Avatar" />
          <h2>{user.login}</h2>
          <p>Name: {user.name || "N/A"}</p>
          <p>Public Repos: {user.public_repos}</p>
          <p>Public Gists: {user.public_gists}</p>
          <p>Profile Created: {user.created_at}</p>
        </div>
      )}
    </div>
  );
}

export default GitHubCard;
