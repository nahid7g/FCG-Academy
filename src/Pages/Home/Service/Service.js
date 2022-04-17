import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Service = ({ service }) => {
    const { title, img, detail, price } = service;
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
                        <Button variant="primary">See Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;