import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import RepositoryList from "./Components/RepositoryList";
import Details from "./Components/Details";
import Followers from "./Components/Followers";

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Dashboard setUserData={setUserData} />
        </Route>
        <Route path="/repos">
          <RepositoryList userData={userData} setUserData={setUserData} />
        </Route>
        <Route path="/repo/:repoName">
          <Details />
        </Route>
        <Route path="/followers">
          <Followers />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
