import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index';

export const signin = (formData, navigate) => async (dispatch) => {

    try {
        // JWT login  
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data});
        //console.log('You are supposed to route to homepage');
        navigate('/home');
    } catch (err) {
        console.log(err);
    }
    
}

export const signup = (formData, navigate) => async (dispatch) => {
    //JWT signup 

    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data});
        navigate('/home');
    } catch (err) {
        console.log(err);
    }
    

   
}