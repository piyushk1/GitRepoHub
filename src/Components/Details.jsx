import  { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${repoName}`);
        setRepoDetails(response.data);
      } catch (err) {
        console.error("Error fetching repo details:", err);
      }
    };

    fetchRepoDetails();
  }, [repoName]);

  if (!repoDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{repoDetails.name}</h2>
      <p>{repoDetails.description}</p>
      <Link to="/repos">Back to Repositories</Link>
    </div>
  );
};

export default Details;
