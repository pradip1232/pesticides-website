import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import BeforeImage from '../../img/before.png';  // Replace with actual before image
import AfterImage from '../../img/after.png';    // Replace with actual after image
console.log(BeforeImage, AfterImage);  // Check if the paths are correct

const ComparisonSection = () => {
    return (
        <Container className="comparison-section">
            <Row>
                <Col md={6} className="text-column">
                    <h2 className="section-title" style={{ color: '#F17C32' }}>Discover the Difference</h2>
                    <h3 className="section-subtitle">Crop Comparison</h3>
                    <Button variant="success" className="view-more-btn">View More</Button>
                </Col>
                <Col md={6} className="image-column">
                    <BeforeAfterSlider
                        before={BeforeImage}
                        after={AfterImage}
                        width={500}
                        height={300}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default ComparisonSection;
