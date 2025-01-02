 
/* eslint-disable no-unused-vars */

import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const RepositoryList = () => {
  const { state } = useLocation();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(`https://api.github.com/users/${state.username}`);
        const reposRes = await axios.get(userRes.data.repos_url);
        setUser(userRes.data);
        setRepos(reposRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [state.username]);

  const showRepoDetails = (repo) => {
    navigate('/repo-details', { state: { repo } });
  };

  const showFollowers = () => {
    navigate('/followers', { state: { followersUrl: user.followers_url } });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {user && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img
              src={user.avatar_url}
              alt="Avatar"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                marginRight: '20px',
              }}
            />
            <div>
              <h2 style={{ margin: 0 }}>{user.name || user.login}</h2>
              <p style={{ margin: '5px 0', color: '#555' }}>
                {user.location || 'No location provided'}
              </p>
              <button
                onClick={showFollowers}
                style={{
                  padding: '10px 15px',
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                View Followers
              </button>
            </div>
          </div>
          <h3 style={{ marginBottom: '15px' }}>Repositories:</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {repos.map((repo) => (
              <div
                key={repo.id}
                onClick={() => showRepoDetails(repo)}
                style={{
                  padding: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <h4 style={{ margin: '0 0 10px' }}>{repo.name}</h4>
                <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>
                  {repo.description || 'No description available'}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RepositoryList;
