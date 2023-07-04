import "./App.css";
import React, { useState } from "react";
import Workout from "./Components/Workout";
import workoutData from "./workoutData.json";

function App() {
  const [activeColor, setActiveColor] = useState("red");

  const handleClick = (event) => {
    setActiveColor("green");
  };

  return (
    <>
      <h1>Workout Tracker</h1>
      <div className="workout-container">
        {workoutData.workouts.map((workout) => (
          <Workout
            name={workout.name}
            active={workout.active}
            handleClick={handleClick}
            activeColor={activeColor}
          />
        ))}
      </div>
    </>
  );
}

export default App;
