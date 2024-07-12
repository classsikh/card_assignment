import React from "react";
import "../BasketballPlayerCard.css";

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <div className="player-info">
        <div className="player-image">
          <img src={image} alt={name} />
        </div>
        <div className="player-details">
          <h2>{name}</h2>
          <p>
            <strong>Position:</strong> {position}
          </p>
            <hr className="top"></hr>
          <div className="stats">
            <div className="stats-head">
              <p><strong>Player Stats/Game</strong></p>
            </div>
            <div className="points">
              <div className="stat">
                <p>Points</p>
                <p>{stats.pointsPerGame}</p>
              </div>
              <div className="stat">
                <p>Assists</p>
                <p>{stats.assistsPerGame}</p>
              </div>
              <div className="stat">
                <p>Rebounds</p>
                <p>{stats.reboundsPerGame}</p>
              </div>
            </div>
          </div>
          <hr className="bottom"></hr>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
