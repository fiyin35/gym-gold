import {Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box';
import ExerciseDetail from './ExerciseDetail';
import Home from './Home';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
     <Box width="400px" sx={{ width: {xl: "1488px" }}} m="auto">
    {/* <Navbar /> */}
      <Routes>
        <Route path="/homepage" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default Homepage