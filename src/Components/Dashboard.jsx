/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setUserData }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username.trim()) {
      navigate('/repository', { state: { username } });
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          marginLeft: '10px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Dashboard;
