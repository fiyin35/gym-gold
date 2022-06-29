import {Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Landing from './pages/Landing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
      //  <Box width="400px" sx={{ width: {xl: "1488px" }}} m="auto">
      //     <Navbar />
      //     <Routes>
      //         <Route path="/" element={<Landing />} />
      //         <Route path="/home" element={<Home />} />
      //         <Route path="/exercise/:id" element={<ExerciseDetail />} />
      //       </Routes>
      //       <Footer />
      // </Box>
      <Routes>
              <Route path="/" element={<Landing />} />
      </Routes>

  );
}

export default App;
