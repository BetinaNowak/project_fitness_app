import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Route between homepage and exercise details page
import { Box } from '@mui/material'; // div with shading and colors

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <Box width="400px" sx={{width: { xl: '1488px' }}} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App