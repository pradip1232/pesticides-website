import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './CoreValues.css'; // Custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import CenterImage from '../../img/5874715 1.png';

const CoreValues = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once animation has started
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="core-values-section py-5 mt-5" ref={sectionRef}>
            <h2 className={`text-center mb-5 ${isVisible ? 'animate__fadeInDown' : ''}`} style={{ color: '#83b745' }}>
                OUR CORE VALUES
            </h2>
            <Container>
                <div className="central-image">
                    <img src={CenterImage} alt="Core Value Central" className="img-fluid" />
                </div>
                <div className="row-1">
                    <div className={`circle circle-1 ${isVisible ? 'slide-in-left' : ''}`}>
                        <i className="fas fa-handshake"></i>
                        <h5>Trust & Transparency</h5>
                    </div>
                    <div className={`circle circle-2 ${isVisible ? 'slide-in-right' : ''}`}>
                        <i className="fas fa-thumbs-up"></i>
                        <h5>Positive Approach</h5>
                    </div>
                    <div className={`circle circle-3 ${isVisible ? 'slide-in-left' : ''}`}>
                        <i className="fas fa-leaf"></i>
                        <h5>Sustainable Products</h5>
                    </div>
                </div>
                <div className="row-2">
                    <div className={`circle circle-4 ${isVisible ? 'slide-in-right' : ''}`}>
                        <i className="fas fa-hand-holding-heart"></i>
                        <h5>Nurture Relationship</h5>
                    </div>
                    <div className={`circle circle-5 ${isVisible ? 'slide-in-left' : ''}`}>
                        <i className="fas fa-rupee-sign"></i>
                        <h5>Cost Effectiveness</h5>
                    </div>
                    <div className={`circle circle-6 ${isVisible ? 'slide-in-right' : ''}`}>
                        <i className="fas fa-lightbulb"></i>
                        <h5>Innovation</h5>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CoreValues;
