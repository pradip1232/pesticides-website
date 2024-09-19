import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import bulbImage from '../../img/Bulb.png'; // Update the image import path as per your structure

const WhyChooseUsSection = () => {
    // Hook to track visibility of elements
    const [leftCardRef, leftCardInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [rightCardRef, rightCardInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [bottomCardRef, bottomCardInView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <Container className="text-center my-5">
            <h2
                className="text-success mb-5"
                style={{
                    fontFamily: 'Arial',
                    fontSize: '36px',
                    fontWeight: 400,
                    lineHeight: '41.31px',
                    letterSpacing: '0.06em',
                    color: 'rgba(139, 204, 0, 1)',
                }}
            >
                WHY CHOOSE US?
            </h2>

            <Row className="justify-content-center align-items-center">
                {/* Left Side Cards */}
                <Col md={3} className="mb-3">
                    <div
                        ref={leftCardRef}
                        className={`animate__animated ${
                            leftCardInView ? 'animate__fadeInLeft' : ''
                        }`}
                    >
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title className="text-warning">
                                    Wide Range of Organic Agricultural Products
                                </Card.Title>
                                <Card.Text>
                                    We provide a variety of products, including organic fertilizers, soil conditioners,
                                    plant growth promoters, bio-pesticides, and bio-fungicides, tailored for sustainable
                                    farming.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

                {/* Center Bulb Image */}
                <Col md={3} className="mb-3 d-flex justify-content-center">
                    <img src={bulbImage} alt="Bulb" className="img-fluid" style={{ maxWidth: '100%' }} />
                </Col>

                {/* Right Side Card */}
                <Col md={3} className="mb-3">
                    <div
                        ref={rightCardRef}
                        className={`animate__animated ${
                            rightCardInView ? 'animate__fadeInRight' : ''
                        }`}
                    >
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title className="text-danger">
                                    Enhancing Plant Health and Crop Yield
                                </Card.Title>
                                <Card.Text>
                                    Our products improve plant health, boost soil fertility, and control pests naturally,
                                    resulting in higher crop yields and reduced pesticide use.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>

            {/* Bottom Left Card */}
            <Row className="justify-content-center mt-4">
                <Col md={4} className="mb-3">
                    <div
                        ref={bottomCardRef}
                        className={`animate__animated ${
                            bottomCardInView ? 'animate__fadeInUp' : ''
                        }`}
                    >
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title className="text-success">Sustainable and Cost-Effective Solutions</Card.Title>
                                <Card.Text>
                                    Our eco-friendly products offer cost-effective solutions that reduce the use of harmful
                                    chemicals, support healthier ecosystems, and lower chemical residues in food.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default WhyChooseUsSection;
