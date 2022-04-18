import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // React Firebase Hooks
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        // Clear the inputs
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Errror: {error?.message}</p>
    }
    return (
        <Container className='w-50 mx-auto my-4 bg-light p-5'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to FCG Academy? <Link className='text-decoration-none' to="/register">Please Register</Link> </p>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='pt-2 px-2'>Or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
            </div>
            <SocialLogin></SocialLogin>
        </Container>
    );
};

export default Login;