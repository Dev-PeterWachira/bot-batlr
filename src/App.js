import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then(setBots);
  }, []);

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} setArmy={setArmy} />
      <BotCollection bots={bots} army={army} setArmy={setArmy} />
    </div>
  );
}


export default App;
