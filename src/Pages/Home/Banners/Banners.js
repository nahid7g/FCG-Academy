import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banners = () => {
    const banners = [
        {
            "id": 1,
            "title": "Fulfill your dream.",
            "detail": "If you want to be a proffessional football palyer then I am here to  help you to get the dream.",
            "img": "https://images.pexels.com/photos/8813556/pexels-photo-8813556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "id": 2,
            "title": "Want to get your skills to the next level?",
            "detail": "If are already trying to be a footballer and have mentality to practice hard then I can help you to get your skills to the next level.",
            "img": "https://images.pexels.com/photos/8813500/pexels-photo-8813500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "id": 3,
            "title": "Why come to me?",
            "detail": "I played as a proffessional player in Europe for 20+ years.",
            "img": "https://images.pexels.com/photos/918798/pexels-photo-918798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div id='banners'>
            <Carousel className='w-100' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ maxHeight: "600px" }}
                        src={banners[0].img}
                        alt="Football"
                    />
                    <Carousel.Caption>
                        <h3>{banners[0].title}</h3>
                        <p>{banners[0].detail}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ maxHeight: "600px" }}
                        src={banners[1].img}
                        alt="Football 2"
                    />

                    <Carousel.Caption>
                        <h3>{banners[1].title}</h3>
                        <p>{banners[1].detail}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ maxHeight: "600px" }}
                        src={banners[2].img}
                        alt="Football 3"
                    />

                    <Carousel.Caption>
                        <h3>{banners[2].title}</h3>
                        <p>
                            {banners[2].detail}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banners;