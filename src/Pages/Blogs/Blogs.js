import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='bg-light py-4 my-4'>
            <h2 className='text-center text-primary'>Blogs</h2>
            <article>
                <h5>Authentication vs Authorization</h5>
                <p>
                    <strong>Authentication:</strong> is the process of verifying people.
                </p>
                <p>
                    <strong>Authorization:</strong> is the process of verifying people for specific informations like a specific username or email or something else using we can verify someone exacly we are looking for.
                </p>
            </article>
            <article>
                <h6>Why we are using firebase? What are the alternatives?</h6>
                <p>
                    <strong>We use firebase</strong> to interact with user informations and implement the user can access our website or not.
                </p>
                <p>
                    <strong>Alternatives</strong>
                </p>
            </article>
        </Container>
    );
};

export default Blogs;