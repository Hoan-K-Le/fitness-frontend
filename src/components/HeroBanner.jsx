import React from 'react'
import {Box,Stack,Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

function HeroBanner() {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position= 'relative' p='20px'>
        <Typography color='#FF2625' fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography mb='23px' mt='30px' fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}}>
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography mb={4} fontSize='22px'  lineHeight='35px'>
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' sx={{backgroundColor: '#ff2625', padding: '19px'}} color='error' href='#exercises'>Explore Exercises</Button>
        <Typography fontWeight={600} color='#ff2625' sx={{opacity: 0.1, diplsay: {log:'block', xs:'none'}}} fontSize='200px'>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt='hero-banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner