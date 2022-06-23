import React from 'react'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Logo from '../../assets/images/Logo.png';
import './navbar.scss'

const Navbar = () => {
  return (
    <Stack className="navbar"
    flexDirection="row"
    justifyContent="space-around"
    sx={{ gap: { sm: '122', xs: '40px'}, 
    mt: { sm: '32px', xs: '20px'}, 
    justifyContent: 'none', 
    px: '20px'}}
    >
        <img className="navbar__logo" src={Logo} alt="logo" />

        <Stack 
        className="navbar__links"
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end">
            <Link className="navbar__link" to="/"> Home </Link>
            <a className="navbar__link" href="#exercise">Exercise</a>
        </Stack>
    </Stack>
  )
}

export default Navbar
