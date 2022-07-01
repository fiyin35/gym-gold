import React, {useState} from 'react'
// import axios from '../../api/index.js'
import {Avatar, Container, Paper, Typography, Grid, Button} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';import {signin, signup} from '../../action/auth';
import useStyles from './styles';
import Input from './Input';
import LandingNav from '../../pages/LandinNav'

const initialState = { firstname: '', lastname: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    const handleSubmit = (e) => {
      e.preventDefault();
      if(isSignUp){
        dispatch(signup(formData, navigate));
        
      } else {
        dispatch(signin(formData, navigate));
      }
      //console.log(formData);
    };

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleShowPassword = () => {
      //console.log('I got here')
      setShowPassword(showPassword => !showPassword);
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };
  

  return (
    <> 
    <LandingNav />
    <Container className={classes.main} maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
          <Typography variant="h5"> {isSignUp ? 'Sign Up': 'Sign In'} </Typography>

          <form className={classes.form} onSubmit={handleSubmit}> 
          {/*THE FORM IS FOR BOTH SIGN UP AND SIGN IN*/}
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                                <Input name="firstname" label="First Name"  handleChange={handleChange} autoFocus half/>
                                <Input name="lastname" label="Last Name"  handleChange={handleChange} half/>
                            </>
                        )
                    }
                    <Input name="email" label="Email address" handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                    { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type='password'/> }

                </Grid>
                {/* LOGIN/SIGN UP BUTTON */}
                <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth> 
                  { isSignUp ? 'Sign Up' : 'Sign In' }
                </Button>

               <Grid container justifyContent="flex-end">
                  <Grid item> 
                    <Button onClick={switchMode}> {isSignUp ? "Already have an account ? Sign In" : "Don't have an account ? Sign Up" } </Button>
                  </Grid>
               </Grid>
          </form>
      </Paper>
    </Container>
    </>
  )
}

export default Auth

