import React from "react";

const Workout = ({ name, active, handleClickFromParent, workouts }) => {
  const [background, setBackground] = React.useState({
    backgroundColor: active ? "red" : "blue",
  });

  const handleClick = () => {
    setBackground({
      backgroundColor: active ? "green" : "blue",
    });
    handleClickFromParent();
  };

  return (
    <div className="workout-text-container">
      <div
        onClick={active ? handleClick : () => {}}
        className={`workout-item ${active ? "active" : "inactive"}`}
        style={{
          ...background,
          color: active ? "black" : "seashell",
        }}
      >
        {name}
      </div>
      {active && <p>(active)</p>}
    </div>
  );
};

export default Workout;
