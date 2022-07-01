import {Routes, Route, Navigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
// import Homepage from './pages/Homepage';
// import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

import LandingNav from './pages/LandinNav';
import Login from './components/Form/Auth'
import './App.css';

const App = () => {

  const user = JSON.parse(localStorage.getItem('profile'));

  return (
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      {/* <LandingNav /> */}
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/signin" element={<Login />} />
      </Routes>
      <Footer />
    </Box>

  );
}

export default App;
