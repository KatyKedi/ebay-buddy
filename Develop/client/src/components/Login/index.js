import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, SIGNUP_USER } from '../../utils/mutations';
import './style.css'

import Auth from '../../utils/auth';


function Login() {

    const [loginFormState, setLoginFormState] = useState({ email: '', password: '' });
    const [login, {error}] = useMutation(LOGIN_USER);

    const handleLoginFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const mutationResponse = await login({
            variables: { email: loginFormState.email, password: loginFormState.password },
          });
          const token = mutationResponse.data.login.token;
          Auth.login(token);
        } catch (e) {
          console.log(e);
        }
      };

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginFormState({
          ...loginFormState,
          [name]: value,
        });
    };

    const [signupFormState, setSignupFormState] = useState({ email: '', password: ''});
    const [signup] = useMutation(SIGNUP_USER);

    const handleSignupFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const mutationResponse = await signup({
            variables: { email: signupFormState.email, password: signupFormState.password },
          });
          const token = mutationResponse.data.login.token;
          Auth.login(token);
        } catch (e) {
          console.log(e);
        }
      };

    const handleSignupChange = (event) => {
        const { name, value } = event.target;
        setSignupFormState({
          ...signupFormState,
          [name]: value,
        });
    };

    return (
        <>
            <form onSubmit={(event) => { handleLoginFormSubmit(event) }}>
                <div className='user-form'>
                    <h2>Login</h2>
                  
                      <label>Email:</label>
                      <input className='input' type="text" name="email" id="user-email" onChange={handleLoginChange} required />
              
                      <label>Password:</label>
                      <input className='input' type="password" name="password" id="user-pass" onChange={handleLoginChange} required />
                      <input type="submit" className="submitBtn"/>
                </div>

                    
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                    ) : null}
            </form>

            {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}

            <form onSubmit={(event) => { handleSignupFormSubmit(event) }}>
                <div className='user-form'>
                    <h2>Sign Up</h2>
                  
                      <label>Email:</label>
                      <input className='input' type="text" name="email" id="new-user-email" onChange={handleSignupChange} required />
                 
                      <label>Password:</label>
                      <input className='input' type="password" name="password" id="new-user-pass" onChange={handleSignupChange} required />
                      <input type="submit" className="submitBtn"/>
                </div>
                    

            </form>
        </>
    )
}

export default Login;