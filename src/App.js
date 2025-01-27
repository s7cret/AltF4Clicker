import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const BASE_URL = "https://jsonplaceholder.typicode.com"; // Используем тестовый URL

const Clicker = ({ user, setUser }) => {
  const handleClick = async () => {
    setUser((prev) => ({ ...prev, points: prev.points + 1 }));
  };

  return (
    <Card>
      <CardContent className="flex flex-col items-center">
        <p className="text-xl">Points: {user.points}</p>
        <Button className="rounded-full p-10 mt-5 text-lg" onClick={handleClick}>
          Click Me!
        </Button>
      </CardContent>
    </Card>
  );
};

const Upgrade = ({ user, setUser }) => {
  const [upgrades, setUpgrades] = useState([]);

  useEffect(() => {
    setUpgrades([
      { id: 1, name: "Upgrade 1", cost: 10 },
      { id: 2, name: "Upgrade 2", cost: 20 },
      { id: 3, name: "Upgrade 3", cost: 30 },
    ]);
  }, []);

  const handleUpgrade = (upgradeId) => {
    setUser((prev) => ({ ...prev, points: prev.points - 10 }));
  };

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl mb-4">Upgrades</h2>
        <ul>
          {upgrades.map((upgrade) => (
            <li key={upgrade.id} className="mb-2">
              <p>{upgrade.name}</p>
              <p>Cost: {upgrade.cost}</p>
              <Button
                onClick={() => handleUpgrade(upgrade.id)}
                disabled={user.points < upgrade.cost}
              >
                Buy
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    setLeaderboard([
      { id: 1, name: "User 1", points: 50 },
      { id: 2, name: "User 2", points: 40 },
      { id: 3, name: "User 3", points: 30 },
    ]);
  }, []);

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl mb-4">Leaderboard</h2>
        <ul>
          {leaderboard.map((user) => (
            <li key={user.id}>
              {user.name} - {user.points} points
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const App = () => {
  const [user, setUser] = useState({ id: 1, points: 100 });

  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link className="mr-4" to="/">Clicker</Link>
          <Link className="mr-4" to="/upgrade">Upgrade</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </nav>
        <Route path="/" exact>
          <Clicker user={user} setUser={setUser} />
        </Route>
        <Route path="/upgrade">
          <Upgrade user={user} setUser={setUser} />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
      </div>
    </Router>
  );
};

export default App;