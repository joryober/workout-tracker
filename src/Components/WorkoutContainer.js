import React, { useState, useEffect } from "react";
import Workout from "./Workout";

const WorkoutContainer = ({ workoutData, workouts, setWorkouts }) => {
  return (
    <>
      <div className="workout-container">
        {workoutData.map((workout) => (
          <Workout
            key={workout.name}
            name={workout.name}
            active={workout.active}
            workouts={workouts}
            handleClickFromParent={
              workout.active
                ? () => {
                    let dateAndTime = new Date().toLocaleString();
                    setWorkouts((prevWorkouts) => {
                      return {
                        ...prevWorkouts,
                        [dateAndTime]: workout.name,
                      };
                    });
                    window.localStorage.setItem(dateAndTime, [workout.name]);
                    window.dispatchEvent(new Event("storage"));
                  }
                : () => {}
            }
          />
        ))}
      </div>
      <h3>Workouts completed</h3>
      {Object.entries(workouts).map((entry) => (
        <p key={entry[0]}>
          <span style={{ fontWeight: "bold" }}>{entry[0]}</span>:{" "}
          <span style={{ color: "red" }}>{entry[1]}</span>
        </p>
      ))}
    </>
  );
};

export default WorkoutContainer;
