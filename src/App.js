import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './Components/Footer'
import AboutMe from './pages/AboutMe'

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/exercise/:id' element={<ExerciseDetail />}/>
            <Route path='/about-me' element={<AboutMe />}/>
        </Routes>
        <Footer />
    </Box>
  )
}

export default App