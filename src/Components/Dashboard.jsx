/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Dashboard = ({ setUserData }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async () => {
    if (!username) {
      setError("Please enter a GitHub username.");
      return;
    }

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const user = response.data;

      // Fetch the user data and repositories
      const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      setUserData({
        ...user,
        repositories: repoResponse.data
      });

      history.push("/repos");
    } catch (err) {
      setError("User not found or an error occurred.");
    }
  };

  return (
    <div>
      <h1>Enter GitHub Username</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Dashboard;
