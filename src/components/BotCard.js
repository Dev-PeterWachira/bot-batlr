import React from "react";

function BotCard({ bot, addToArmy }) {
  return (
    <div className="bot-card" onClick={() => addToArmy(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
    </div>
  );
}

export default BotCard;