// src/components/ExerciseList.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExerciseItem from './ExerciseItem';
import React, { useState, useEffect } from 'react';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('API_URL', {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setExercises(data));
  }, []);

  return (
    <div>
      <h1>Exercise List</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
