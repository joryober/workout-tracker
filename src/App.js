import "./App.css";
import React, { useState, useEffect } from "react";
import WorkoutContainer from "./Components/WorkoutContainer";

let workoutData = [
  {
    name: "Bis & Back",
    active: true,
  },
  {
    name: "Run a Mile",
    active: true,
  },
  {
    name: "Chest & Tris",
    active: true,
  },
  {
    name: "Shoulders & Legs",
    active: true,
  },
];
function App() {
  const [paragraphText, setParagraphText] = useState(
    "Click when done with workout!"
  );

  const [workouts, setWorkouts] = useState(
    Object.entries(localStorage)
      .map((entry) => {
        return `${entry[0]}: ${entry[1]}`;
      })
      .sort((a, b) => b.localeCompare(a))
  );

  window.addEventListener("storage", () => {
    setParagraphText("Good job! Come back tomorrow.");
  });

  return (
    <>
      <h1>Workout Tracker</h1>
      <p>{paragraphText}</p>
      <WorkoutContainer
        workoutData={workoutData}
        workouts={workouts}
        setWorkouts={setWorkouts}
      />
    </>
  );
}

export default App;
