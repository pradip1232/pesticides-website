import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './BulbSection.css';

import BulbImage from '../../img/Bulb.png'; // Update the image import path as per your structure

const BulbSection = () => {
    return (
        <section className="bulb-section">
            <Container className="bg-white text-center mt-5 ">
                <h2
                    className="text-success32 mb-5"
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
            </Container>


            <Container fluid className="mt-0 mb-0">
                <Row className="content-bulb align-items-center">
                    {/* Left Side - Two Cards */}
                    <Col lg={3} className="custom-subhead-1">
                        <Card className="mb-4">
                            <Card.Body>
                                <h4 className="text-warning11">High Nutrition Value</h4>
                                <p>Organic foods preserve far more natural vitamins and minerals.</p>
                            </Card.Body>
                        </Card>
                        <Card className="mb-5 pt-4 right-downsidecard ">
                            <Card.Body>
                                <h4 className="text-warning11">Certified Organic Sources</h4>
                                <p>Our products are strictly quality controlled and independently verified.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Bulb Image - Center */}
                    <Col lg={3} className="d-flex justify-content-center">
                        <img
                            src={BulbImage}
                            alt="Bulb Image"
                            className="img-fluid bulb-images21"
                        />
                    </Col>

                    {/* Right Side - One Card */}
                    <Col lg={3} className="custom-subhead-2">
                        <Card className="mb-4">
                            <Card.Body>
                                <h4 className="text-warning11">Preserves the Environment</h4>
                                <p>Sustainable farming ensures soil conversation & reduced air pollution.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default BulbSection;
