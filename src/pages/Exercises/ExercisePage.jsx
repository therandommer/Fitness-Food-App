// ExercisePage.js Page dedeicated for the excersie

import React, { useEffect, useState } from 'react';
import { fetchExercises } from './exerciseApi';
import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from 'react-bootstrap'



function ExercisePage() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetchExercises()
      .then((data) => setExercises(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Exercise Database</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExercisePage;
