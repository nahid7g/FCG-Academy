import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, img, detail, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = () => {
        navigate(`/checkout`);
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='text-dark'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {detail}
                        </Card.Text>
                        <Card.Text>
                            Price: ${price}
                        </Card.Text>
                        <Button onClick={() => navigateToServiceDetail()} variant="primary">See Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;