import React from 'react';
import { Container, Row } from 'react-bootstrap';
import nahid from "./images/nahid.jpg";

const About = () => {
    return (
        <Container className='bg-light w-75 my-4 p-4 mx-auto'>
            <h2 className='text-center text-primary'>About me</h2>
            <Row className='my-4'>
                <div className='col-md-6'>
                    <img className='w-100' src={nahid} alt="Nahid Hasan" />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-warning'>A sports Lover | A Player | A Coach</h4>
                    <p>Hi! I am Nahid Hasan a Proffessional Footballer A sports lover and a Football coach. I played for european clubs for more than a decade.After retirement from Proffessional football now I am currently running my Football academy where I share my experiences with others who are also dreaming for being a proffessional footballer.</p>
                </div>
            </Row>
        </Container>
    );
};

export default About;