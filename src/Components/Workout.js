import React from "react";

const Workout = ({ name, active }) => {
  const [background, setBackground] = React.useState({
    backgroundColor: active ? "red" : "blue",
  });

  const handleClick = (event) => {
    setBackground({
      backgroundColor: active ? "green" : "blue",
    });
    localStorage.setItem(new Date().toLocaleString(), [
      event.target.textContent,
    ]);
    console.log(localStorage);
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
