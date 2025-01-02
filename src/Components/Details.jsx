import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div
      
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '300px',
          textAlign: 'center',
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: '#062150',
            color: 'white',
            border: 'none',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '15px',
            width: '100%',
          }}
        >
          Back
        </button>
        <h2 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{state.repo.name}</h2>

        <p style={{ fontSize: '1rem', color: '#555', margin: '5px 0', fontWeight:'bold' }}>
          Description:  {state.repo.description || 'No description available'}
        </p>
        <p style={{ fontSize: '1rem', color: '#555', margin: '5px 0' ,fontWeight:'bold'}}>
          Stars: {state.repo.stargazers_count}
        </p>
        <p style={{ fontSize: '1rem', color: '#555', margin: '5px 0',fontWeight:'bold' }}>
          Forks: {state.repo.forks_count}
        </p>
        <a
          href={state.repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#062150',
            color: 'white',
            padding: '10px',
            textDecoration: 'none',
            borderRadius: '5px',
            display: 'inline-block',
            width: '100%',
            marginTop: '10px',
          }}
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Details;
