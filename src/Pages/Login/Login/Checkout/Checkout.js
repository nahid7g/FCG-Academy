import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { courseId } = useParams();
    return (
        <div>
            <h2>Checkout now {courseId}</h2>
        </div>
    );
};

export default Checkout;