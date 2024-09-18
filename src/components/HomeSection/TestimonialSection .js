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
        name: 'Farmer Name'
    },
    {
        img: Second,
        name: 'Farmer Name'
    },
    {
        img: Third,
        name: 'Farmer Name'
    },
];

const TestimonialSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="testimonial-section text-center">
            <Container>
                <h2 data-aos="fade-up" className="text-success24234"  style={{
                        fontFamily: 'Arial',
                        fontSize: '36px',
                        fontWeight: 400,
                        lineHeight: '41.31px',
                        letterSpacing: '0.06em',
                        color: 'rgba(139, 204, 0, 1)',
                    }}>TESTIMONIAL</h2>
                <h3 data-aos="fade-up" className="text-warning">What Our Client Say !</h3>

                <Row>
                    {testimonials.map((testimonial, index) => (
                        <Col key={index} md={4} data-aos="zoom-in">
                            <Card className="mb-3">
                                <Card.Img
                                    src={testimonial.img}
                                    alt="Testimonial"
                                    className="testimonial-img"
                                />
                                <Card.Body className="position-relative card-body-images-tst">
                                    <div className="text-white position-absolute bottom-0 start-0 p-2">
                                        <h5>{testimonial.name}</h5>
                                    </div>
                                    <div className="youtube-icon position-absolute bottom-0 start-0 p-2">
                                        <YouTubeIcon />
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
