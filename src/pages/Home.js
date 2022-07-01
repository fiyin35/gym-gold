import React, { useState } from 'react'
import Box from '@mui/material/Box';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import LandingNav from './LandinNav';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
      <LandingNav />
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises 
         exercises={exercises}
         setExercises={setExercises}
         bodyPart={bodyPart}
        />
    </Box>
  )
}

export default Home
