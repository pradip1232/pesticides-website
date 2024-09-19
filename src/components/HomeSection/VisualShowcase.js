import React, { useState } from 'react';
import { Carousel, Card, Button, Row, Col, Modal } from 'react-bootstrap';
import './Plant.css';
import Video from '../../img/Video.png';
import FrstImage from '../../img/visual/Screenshot_20240914_131645_Gallery 1.png';
import SecImage from '../../img/visual/Screenshot_20240914_131649_Gallery 2.png';
import ThirdImage from '../../img/visual/Screenshot_20240914_131652_Gallery 2.png';
import f from '../../img/vv/1.mp4';
import s from '../../img/vv/2.mp4';
import t from '../../img/vv/3.mp4';
import arrow from '../../img/Arrow.png';
const VisualShowcase = () => {
    // State to handle modal visibility and video source
    const [show, setShow] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    // Function to handle modal close
    const handleClose = () => setShow(false);

    // Function to handle modal show and set video source
    const handleShow = (video) => {
        setVideoSrc(video);
        setShow(true);
    };

    return (
        <>
            <div className="visual-showcase container mb-5 mt-5">
                <h2 className="text-center visual-heading">VISUAL SHOWCASE</h2>
            </div>

            <div className='Carousel-container p-4' style={{ background: 'rgba(244, 244, 244, 1)' }}>
                <div className='container container-carousal'>
                    <Carousel interval={3000} indicators={false} controls={true} slide={false}>
                        <Carousel.Item>
                            <Row className='p-5'>
                                {/* First Card */}
                                <Col md={4}>
                                    <Card className="position-relative">
                                        <Card.Img variant="top" src={ThirdImage} className="card-img" />
                                        <Card.Body className="card-body-overlay d-flex">
                                            <Card.Title>Experience the Power of Organo</Card.Title>
                                            <img
                                                onClick={() => handleShow(f)} // Open modal with video f
                                                variant="outline-light"
                                                src={Video}
                                                className="video-icon"
                                                style={{ cursor: 'pointer' }} // Add cursor pointer
                                                alt="Play Video"
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Second Card */}
                                <Col md={4}>
                                    <Card className="position-relative">
                                        <Card.Img variant="top" src={FrstImage} className="card-img" />
                                        <Card.Body className="card-body-overlay d-flex">
                                            <Card.Title>Get a Closer Look at Atlanti-K</Card.Title>
                                            <img
                                                onClick={() => handleShow(s)} // Open modal with video s
                                                variant="outline-light"
                                                src={Video}
                                                className="video-icon"
                                                style={{ cursor: 'pointer' }} // Add cursor pointer
                                                alt="Play Video"
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Third Card */}
                                <Col md={4}>
                                    <Card className="position-relative">
                                        <Card.Img variant="top" src={SecImage} className="card-img" />
                                        <Card.Body className="card-body-overlay d-flex">
                                            <Card.Title>Step Inside Shakti</Card.Title>
                                            <img
                                                onClick={() => handleShow(t)} // Open modal with video t
                                                variant="outline-light"
                                                src={Video}
                                                className="video-icon"
                                                style={{ cursor: 'pointer' }} // Add cursor pointer
                                                alt="Play Video"
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        {/* Repeat Carousel.Item for more cards */}
                    </Carousel>
                </div>
            </div>

            {/* Modal to show the video */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Video Showcase</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <video width="100%" controls autoPlay>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default VisualShowcase;
