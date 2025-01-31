import React from "react";

function BotCard({ bot, army, setArmy }) {
  const { id, name, avatar_url, bot_class, catchphrase, health, damage, armor } = bot;

  const handleEnlist = () => {
    if (!army.some((b) => b.id === id)) {
      setArmy([...army, bot]);
    }
  };

  return (
    <div className="bot-card" onClick={handleEnlist}>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>{catchphrase}</p>
      <p>Class: {bot_class}</p>
      <p>Health: {health}, Damage: {damage}, Armor: {armor}</p>
    </div>
  );
}

export default BotCard;
