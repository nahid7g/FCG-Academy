import React, { useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // React Firebase Hooks
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // Create user
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        navigate("/");
    }
    if (loading) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
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
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Check me out" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            {errorElement}
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