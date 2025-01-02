import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Followers = () => {
  const { state } = useLocation();
  const [followers, setFollowers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get(state.followersUrl);
        setFollowers(response.data);
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    fetchFollowers();
  }, [state.followersUrl]);

  const viewFollowerRepos = (username) => {
    navigate('/repos', { state: { username } });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          cursor: 'pointer',
          backgroundColor: '#062150',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          marginBottom: '15px',
        }}
      >
        Back
      </button>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center' }}>Followers</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {followers.map((follower) => (
          <li
            key={follower.id}
            onClick={() => viewFollowerRepos(follower.login)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={follower.avatar_url}
              alt="Follower Avatar"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                marginRight: '15px',
              }}
            />
            <span style={{ fontSize: '1rem', color: '#333' }}>{follower.login}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Followers;
