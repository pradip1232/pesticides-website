import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './BulbSection.css';

import BulbImage from '../../img/Bulb.png'; // Update the image import path as per your structure

const BulbSection = () => {
    return (
        <section className="bulb-section">
            <Container className="bg-white text-center mt-5 ">
                <h2
                    className="text-success32"
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
                        <Card className="">
                            <Card.Body>
                                <h4 className="text-warning11">Wide Range of Organic Agricultural Products</h4>
                                <p>We provide a variety of products, including organic fertilizers, soil conditioners, plant growth promoters, bio-pesticides, and bio-fungicides, tailored for sustainable farming.</p>
                            </Card.Body>
                        </Card>
                        <Card className="mb-5 pt-4 right-downsidecard ">
                            <Card.Body>
                                <h4 className="text-warning11">Sustainable and Cost-Effective Solutions</h4>
                                <p>Our eco-friendly products offer cost-effective solutions that reduce the use of harmful chemicals, support healthier ecosystems, and lower chemical residues in food.</p>
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
                                <h4 className="text-warning11">Enhancing Plant Health and Crop Yield</h4>
                                <p>Our products improve plant health, boost soil fertility, and control pests naturally, resulting in higher crop yields and reduced pesticide use.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default BulbSection;
