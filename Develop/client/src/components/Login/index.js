import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import './style.css'
import Auth from '../../utils/auth';


function Login() {
  const navigate = useNavigate();

  if(Auth.loggedIn()) {
    navigate('/', { replace: true })
  }

  const [loginFormState, setLoginFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

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
  
  return (
    <>
      <Form className='m-4' onSubmit={(event) => { handleLoginFormSubmit(event) }}>
        <h2>Login</h2>
        <Form.Group>

          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" name="email" onChange={handleLoginChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" name="password" onChange={handleLoginChange} required />
          
          
        </Form.Group>
        <Button
          className='my-4'
          variant='outline-primary'
          type='submit'>
          Login
        </Button>
        <Form.Group className='my-2'>
        <Form.Text className="text-muted">
          New to Ebay Buddy? Click the "go to sign-up" button below!
        </Form.Text>
        
        </Form.Group>
        <Button
        className='mb-5'
        variant='outline-success'
        onClick={() => navigate('/sign-up', { replace: true })}>
          Go to Sign-Up
        </Button>
      </Form>



      {error ? (
        <div>
          <p className="error-text">The provided credentials are incorrect</p>
        </div>
      ) : null}

    </>
  )
}

export default Login;