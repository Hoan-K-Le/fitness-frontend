import React, {useState} from 'react'
import {Box} from '@mui/material'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner  from '../components/HeroBanner'

function Home() {
  const [bodyPart,setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  
  return (
    <Box>
      {/* Hero Banner that shows on the top */}
      <HeroBanner />
      {/* A component where you can search up the exercises */}
      <SearchExercises
       setExercises={setExercises}
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}/>
      
      {/* The different types of exercise components */}
      <Exercises
      setExercises={setExercises}
       bodyPart={bodyPart} 
       exercises={exercises}
      />
    </Box>
  )
}

export default Home