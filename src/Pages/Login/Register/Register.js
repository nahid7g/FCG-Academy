import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    // React Firebase Hooks
    const [createUserWithEmailAndPassword, error] = useCreateUserWithEmailAndPassword(auth);
    const handleRegisterSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
        // Clear the input fields
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }
    return (
        <Container className='w-50 mx-auto my-4 bg-light p-5'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <Form onSubmit={handleRegisterSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} placeholder="Enter your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p className='text-danger'>{error?.message}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Already have an Account? <Link className='text-decoration-none' to="/login">Please Login</Link> </p>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='pt-2 px-2'>Or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
            </div>
            <SocialLogin></SocialLogin>
        </Container>
    );
};

export default Register;