import React,{useState, useEffect} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'

import {ExerciseOptions, fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

function SearchExercises({setExercises, bodyPart, setBodyPart}) {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  // fetch the categories right when the page loads
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', ExerciseOptions);
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()

  },[])




const handleSearch = async () => {
  // if search exists then fetch data
  if(search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', ExerciseOptions)
      
      // Filter the exercise we're searching
      const searchedExercises = exerciseData.filter(exercise => 

        // Able to search up not just name, but for equipment, what it targets, and the bodypart its for
        exercise.name.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      
      setSearch('')
      setExercises(searchedExercises)
  }
}




  return (
    <Stack alignItems='Center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{lg: '44px', xs:'30px'}}} mb='50px' textAlign='center'>
        Awesome Exercises You <br/> Should know
      </Typography>

      <Box position='relative' mb='72px'>
      <TextField
      sx={{
        input: {fontWeight:'700', 
        border: 'none', 
        borderRadius: '4px'},
        width: {lg: '800px', xs:'350px'},
        backgroundColor: '#fff',
        borderRadius: '40px'

      }}
      height='76px'
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      placeholder='Search'
      type='text'
      >
      </TextField>

      <Button className='search-btn'
      sx={{bgcolor: '#FF2625',
        color: '#fff',
        textTransform: 'none',
        width: {lg: '175px', xs:'80px'},
        fontSize: {lg: '20px', xs: '14px'},
        height: '56px',
        position: 'absolute',
        right: '0'
    }}
    onClick={handleSearch}
      >
        Search
      </Button>
      </Box>

      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises