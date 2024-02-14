import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../utils/mutations';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'

import Auth from '../../utils/auth';


function SignUp() {
    const navigate = useNavigate()
    const [signupFormState, setSignupFormState] = useState({ email: '', password: '' });
    const [signup, {error}] = useMutation(SIGNUP_USER);

    const handleSignupFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await signup({
                variables: { email: signupFormState.email, password: signupFormState.password },
            });
            const token = mutationResponse.data.addUser.token;
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
            <Form className='m-4' onSubmit={(event) => { handleSignupFormSubmit(event) }}>
                <h2>Sign Up</h2>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="text" name="email" onChange={handleSignupChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleSignupChange} required />
                </Form.Group>
                <Button
                    className='mt-4'
                    variant='outline-primary'
                    type='submit'>
                    Sign Up
                </Button>
                <Button
                    className='mt-4'
                    variant='outline-success'
                    onClick={() => { navigate('/', { replace: true }) }}>
                    Back to Login
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

export default SignUp;