import "./App.css";
import React, { useState, useEffect } from "react";
import workoutData from "./workoutData.json";
import WorkoutContainer from "./Components/WorkoutContainer";

function App() {
  const [paragraphText, setParagraphText] = useState(
    "Click when done with active workout!"
  );

  const [workouts, setWorkouts] = useState(localStorage);

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
