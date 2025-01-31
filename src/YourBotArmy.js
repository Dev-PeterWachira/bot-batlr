import React from "react";

function YourBotArmy({ army, setArmy }) {
  const handleRelease = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };
  const handleDischarge = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, { method: "DELETE" })
      .then(() => setArmy(army.filter((bot) => bot.id !== id)));
  };
  

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => handleRelease(handleDischarge)}>Release</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
