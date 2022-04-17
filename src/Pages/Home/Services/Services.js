import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-2 bg-dark text-white py-4'>
            <Container>
                <h2 className='text-center'>Services / Courses</h2>
                <p className='text-center'>You can choose the best course that you need.</p>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service service={service} key={service.id}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;