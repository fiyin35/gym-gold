import {Routes, Route} from 'react-router-dom'
import Box from '@mui/material/Box';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './components/Form/Auth'
import './App.css';

const App = () => {

  // const user = JSON.parse(localStorage.getItem('profile'));

  return (
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      {/* <LandingNav /> */}
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>

  );
}

export default App;
