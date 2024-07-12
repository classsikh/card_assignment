import React from "react";
import BasketballPlayerCard from "./BasketballPlayerCard";
import "../cardContainer.css"
function Card() {
  return (
    <>
      <div className="container-header">
      <h1 className="header">Digital Basketball Playing Card</h1>
        <div className="cardContainer">
          <BasketballPlayerCard
            name="LeBron James"
            image="i.png"
            position="Forward"
            stats={{
              pointsPerGame: 25.4,
              assistsPerGame: 7.1,
              reboundsPerGame: 10.5,
            }}
          />
         
        </div>
      </div>
    </>
  );
}
export default Card;