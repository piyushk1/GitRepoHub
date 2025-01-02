/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const RepositoryList = ({ userData, setUserData }) => {
  if (!userData) {
    return <p>No user data available. Please go back and search.</p>;
  }

  const { login, avatar_url, repositories, followers_url } = userData;

  return (
    <div>
      <div>
        <img src={avatar_url} alt="Avatar" width="100" />
        <h2>{login}</h2>
        <Link to="/followers">View Followers</Link>
      </div>

      <h3>Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
