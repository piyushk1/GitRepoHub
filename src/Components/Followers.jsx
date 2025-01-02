import  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Followers = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/{username}/followers");
        setFollowers(response.data);
      } catch (err) {
        console.error("Error fetching followers:", err);
      }
    };

    fetchFollowers();
  }, []);

  return (
    <div>
      <h2>Followers:</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <Link to={`/repos/${follower.login}`}>{follower.login}</Link>
          </li>
        ))}
      </ul>
      <Link to="/repos">Back to Repositories</Link>
    </div>
  );
};

export default Followers;
