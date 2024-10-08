import React, { useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './BulbSection.css'; // Add your custom CSS if needed
import First from '../../img/farmerr 1 2.png';
import Second from '../../img/farmerr 2 2.png';
import Third from '../../img/farmerr 1.png';

const testimonials = [
    {
        img: First,
        name: 'Farmer Name',
        place: 'Place'
    },
    {
        img: Second,
        name: 'Farmer Name',
        place: 'Place'
    },
    {
        img: Third,
        name: 'Farmer Name',
        place: 'Place'
    },
];

const TestimonialSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="testimonial-section text-center">
            <Container>
                <h2 data-aos="fade-up" className="text-success24234" style={{
                    fontFamily: 'Arial',
                    fontSize: '36px',
                    fontWeight: 400,
                    lineHeight: '41.31px',
                    letterSpacing: '0.06em',
                    color: 'rgba(139, 204, 0, 1)',
                }}>TESTIMONIAL</h2>
                <h3 data-aos="fade-up" className="text-warning32" style={{ color: 'rgba(213, 135, 17, 1)', fontSize: '36px', lineHeight: '41.1px', letterSpacing: '6%', fontWeight: '400' }}>What Our Client Say !</h3>

                <Row>
                    {testimonials.map((testimonial, index) => (
                        <Col key={index} md={4} data-aos="zoom-in">
                            <Card className="mb-3">
                                <Card.Img
                                    src={testimonial.img}
                                    alt="Testimonial"
                                    className="testimonial-img"
                                />
                                <Card.Body className="position-relative " >

                                    <div className='card-body-images-tst position-relative'  style={{
                                    background: 'linear-gradient(0.64deg, #010101 2.45%, rgba(0, 0, 0, 0) 102.39%)'
                                }}>

                                        <div className="text-white position-absolute bottom-0 start-0 p-2 m-0">
                                            <h5 className='m-0'>{testimonial.name}</h5>
                                            <h6 className='p-0 text-left justify-content-left'>{testimonial.place}</h6>
                                        </div>
                                        <div className="youtube-icon position-absolute bottom-0 start-0 p-2">
                                            <YouTubeIcon />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default TestimonialSection;
