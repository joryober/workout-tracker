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
                      return [
                        `${[dateAndTime]}: ${workout.name}`,
                        ...prevWorkouts,
                      ];
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
      {workouts.map((workout) => (
        <p>
          <span style={{ fontWeight: "bold" }}>{workout}</span>
        </p>
      ))}
    </>
  );
};

export default WorkoutContainer;
