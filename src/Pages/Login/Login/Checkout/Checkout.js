import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const handleCheckout = event => {
        event.preventDefault();
        toast("You will get your admission paper soon.")
    }
    return (
        <Container className='w-50 p-5 mx-auto my-4 bg-light'>
            <h2 className='text-center text-primary'>Checkout Here</h2>
            <Form onSubmit={handleCheckout}>
                <Form.Group className="mb-3" controlId="yourName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Your full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lyourAddress">
                    <Form.Label>Your address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourPhone">
                    <Form.Label>Your phone</Form.Label>
                    <Form.Control type="text" placeholder="Your phone" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </Container>
    );
};

export default Checkout;