import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { Button} from '@mui/material';
import Logo from '../assets/images/Logo-1.png'
import * as actionType from '../constants/actionTypes';
import './landing.css'


const LandingNav = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch(); 
  const location = useLocation();
  const navigate = useNavigate();


  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line
  }, [location]);

  return (
    <AppBar position="static" color="inherit" className="appbar">
       <img className="navbar__logo" src={Logo} alt="logo" />
       {user?.result ? (<Stack 
      className="navbar__links"
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="flex-end">
       
          <Link className="navbar__link" to="/home"> Home </Link> 
          <a className="navbar__link" href="#exercises">Exercise</a>
      </Stack>) : ( <></>
      ) }
    <Toolbar>
    {user?.result ? (
         <Button variant="contained" color="error" onClick={logout}>Logout</Button>) : (
       <Link to="/signin"> <Button variant="contained" color="primary">Sign In</Button> </Link>)
         }
    </Toolbar>
  </AppBar>
  )
}

export default LandingNav
