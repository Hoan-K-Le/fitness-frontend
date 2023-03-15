
import './App.css';
import React from 'react'
// To route between our pages
import {Route, Routes} from 'react-router-dom'
// Helps with shading
import {Box} from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    // setting the width for the big screen and margin to auto;
   <Box width='400px' sx={{width: {xl: '1488px'}}} m='auto'>
    <NavBar/>
    <Routes>
      {/* The path of a website, element ={which component file we using} */}
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:id' element={<ExerciseDetail />}/>
    </Routes>
    <Footer/>
   </Box>
  );
}

export default App;
