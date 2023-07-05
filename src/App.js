import "./App.css";
import React, { useState } from "react";
import Workout from "./Components/Workout";
import workoutData from "./workoutData.json";

function App() {
  return (
    <>
      <h1>Workout Tracker</h1>
      <p>Click when done with active workout!</p>
      <div className="workout-container">
        {workoutData.map((workout) => (
          <Workout name={workout.name} active={workout.active} />
        ))}
      </div>
    </>
  );
}

export default App;
