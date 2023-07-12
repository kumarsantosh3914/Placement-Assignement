import React, { useState } from "react";
import "./GithubUserFinder.css";

function GitHubUserFinder() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h1>GitHub User Find</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Get Data</button>
      </form>
      {userData && (
        <div className="user-info">
          <img className="avatar" src={userData.avatar_url} alt="User Avatar" />
          <div className="info-details">
            <div className="info-left">
              <h2>Name: {userData.name}</h2>
              <h2>Location: {userData.location}</h2>
              <h2>Followers: {userData.followers}</h2>
            </div>
            <div className="info-right">
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
              <h2>Public Repos: {userData.public_repos}</h2>
              <h2>Bio: {userData.bio}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GitHubUserFinder;
