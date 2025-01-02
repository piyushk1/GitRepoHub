import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import RepositoryList from './Components/RepositoryList';
import Details from './Components/Details';
import Followers from './Components/Followers';

const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repository" element={<RepositoryList />} />
        <Route path="/repo-details" element={<Details />} />
        <Route path="/followers" element={<Followers />} />
      </Routes>
  );
};

export default App;
