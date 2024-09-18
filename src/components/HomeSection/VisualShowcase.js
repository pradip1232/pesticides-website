import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import './Plant.css';

import FrstImage from '../../img/visual/Screenshot_20240914_131645_Gallery 1.png';
import SecImage from '../../img/visual/Screenshot_20240914_131649_Gallery 2.png';
import ThirdImage from '../../img/visual/Screenshot_20240914_131652_Gallery 2.png';

const VisualShowcase = () => {
    return (
        <div className="visual-showcase container mb-5 mt-5">
            <h2 className="text-center visual-heading">VISUAL SHOWCASE</h2>
            <Carousel interval={3000} indicators={false} controls={true} slide={false}>
                <Carousel.Item>
                    <Row>
                        {/* First Card */}
                        <Col md={4}>
                            <Card className="position-relative">
                                <Card.Img variant="top" src={FrstImage} className="card-img" />
                                <Card.Body className="card-body-overlay d-flex">
                                    <Card.Title>Experience the Power of Organo</Card.Title>
                                    <Button variant="outline-light">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Second Card */}
                        <Col md={4}>
                            <Card className="position-relative">
                                <Card.Img variant="top" src={SecImage} className="card-img" />
                                <Card.Body className="card-body-overlay d-flex">
                                    <Card.Title>Get a Closer Look at Atlanti-K</Card.Title>
                                    <Button variant="outline-light">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Third Card */}
                        <Col md={4}>
                            <Card className="position-relative">
                                <Card.Img variant="top" src={ThirdImage} className="card-img" />
                                <Card.Body className="card-body-overlay d-flex">
                                    <Card.Title>Step Inside Shakti</Card.Title>
                                    <Button variant="outline-light">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {/* First Card */}
                        <Col md={4}>
                            <Card className="position-relative">
                                <Card.Img variant="top" src={FrstImage} className="card-img" />
                                <Card.Body className="card-body-overlay d-flex">
                                    <Card.Title>Experience the Power of Organo</Card.Title>
                                    <Button variant="outline-light">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="position-relative">
                                <Card.Img variant="top" src={ThirdImage} className="card-img" />
                                <Card.Body className="card-body-overlay d-flex">
                                    <Card.Title>Step Inside Shakti</Card.Title>
                                    <Button variant="outline-light">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* Second Card */}
                        <Col md={4}>
                            <Card className="position-relative">
                                <Card.Img variant="top" src={SecImage} className="card-img" />
                                <Card.Body className="card-body-overlay d-flex">
                                    <Card.Title>Get a Closer Look at Atlanti-K</Card.Title>
                                    <Button variant="outline-light">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Third Card */}

                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {/* First Card */}
                        <Col md={4}>
                            <Card className="position-relative">
                                <Card.Img variant="top" src={FrstImage} className="card-img" />
                                <Card.Body className="card-body-overlay d-flex">
                                    <Card.Title>Experience the Power of Organo</Card.Title>
                                    <Button variant="outline-light">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Second Card */}
                        <Col md={4}>
                            <Card className="position-relative">
                                <Card.Img variant="top" src={SecImage} className="card-img" />
                                <Card.Body className="card-body-overlay d-flex">
                                    <Card.Title>Get a Closer Look at Atlanti-K</Card.Title>
                                    <Button variant="outline-light">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Third Card */}
                        <Col md={4}>
                            <Card className="position-relative">
                                <Card.Img variant="top" src={ThirdImage} className="card-img" />
                                <Card.Body className="card-body-overlay d-flex">
                                    <Card.Title>Step Inside Shakti</Card.Title>
                                    <Button variant="outline-light">View</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>



                {/* Repeat Carousel.Item for more cards */}
            </Carousel>
        </div>
    );
};

export default VisualShowcase;
