import "./App.css";
import React, { useState, useEffect } from "react";
import workoutData from "./workoutData.json";
import WorkoutContainer from "./Components/WorkoutContainer";

function App() {
  const [workouts, setWorkouts] = useState(localStorage);

  return (
    <>
      <h1>Workout Tracker</h1>
      <p>Click when done with active workout!</p>
      {/* <div className="workout-container">
        {workoutData.map((workout) => (
          <Workout name={workout.name} active={workout.active} />
        ))}
      </div> */}
      <WorkoutContainer
        workoutData={workoutData}
        workouts={workouts}
        setWorkouts={setWorkouts}
      />
    </>
  );
}

export default App;
