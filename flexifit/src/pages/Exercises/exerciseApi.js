// exerciseApi.js file to manage API calls

//RapidAPI host url and KEy definitions

const API_URL = 'https://exercisedb.p.rapidapi.com'; 

export async function fetchExercises() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch exercises');
  }
  return response.json();
}