import React from "react";

const Workout = ({ name, active }) => {
  const [background, setBackground] = React.useState({
    backgroundColor: active ? "red" : "blue",
  });

  const handleClick = () => {
    setBackground({
      backgroundColor: active ? "green" : "blue",
    });
  };

  return (
    <div className="workout-text-container">
      <div
        onClick={handleClick}
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
