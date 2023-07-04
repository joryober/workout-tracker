import React from "react";

const Workout = ({ name, active, handleClick, activeColor }) => {
  return (
    <div
      onClick={handleClick}
      className="workout-item"
      style={{ backgroundColor: active ? activeColor : "blue" }}
    >
      {name}
    </div>
  );
};

export default Workout;
