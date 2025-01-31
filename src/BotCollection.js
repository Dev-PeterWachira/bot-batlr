import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, army, setArmy }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} army={army} setArmy={setArmy} />
      ))}
    </div>
  );
}

export default BotCollection;
