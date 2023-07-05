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
      <br />
      <h3>Workouts completed</h3>
      {Object.entries(localStorage).map((entry) => (
        <p>
          <span style={{ fontWeight: "bold" }}>{entry[0]}</span>:{" "}
          <span style={{ color: "red" }}>{entry[1]}</span>
        </p>
      ))}
    </>
  );
}

export default App;
