import React from "react";

const Workout = ({ name, active, handleClickFromParent, workouts }) => {
  const [background, setBackground] = React.useState({
    backgroundColor: "firebrick",
  });

  const handleClick = () => {
    setBackground({
      backgroundColor: "green",
    });
    handleClickFromParent();
  };

  return (
    <div className="workout-text-container">
      <div
        onClick={handleClick}
        className={`workout-item active`}
        style={{
          ...background,
          color: "black",
          fontWeight: "bold",
        }}
      >
        {name}
      </div>
    </div>
  );
};

export default Workout;
