import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8001/bots";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  return (
    <div className="App">
      <BotCollection bots={bots} addToArmy={addToArmy} />
      <YourBotArmy army={army} releaseFromArmy={releaseFromArmy} />
    </div>
  );
}

export default App;