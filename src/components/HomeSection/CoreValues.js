import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './CoreValues.css'; // Custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Idea from '../../img/core/Idea Sharing.png';
import Money from '../../img/core/Money Bag Rupee.png';
import Re from '../../img/core/Recycling.png';
import OKimg from '../../img/core/Ok Hand.png';

import Thumb from '../../img/core/Handshake.png';
import Two from '../../img/core/Two Hearts.png';
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
            <h2 className={`text-center mb-5 ${isVisible ? 'animate__fadeInDown' : ''}`} style={{ color: '#83b745', fontSize: '36px' }}>
                OUR CORE VALUES
            </h2>
            <Container>
                <div className="central-image">
                    <img src={CenterImage} alt="Core Value Central" className="img-fluid" />
                </div>
                <div className="row-1">
                    <div className={`circle circle-1 green-color ${isVisible ? 'slide-in-left' : ''}`}>
                        <img src={OKimg} alt="Trust & Transparency"/>
                        <h5>Positive Approach</h5>
                    </div>
                    <div className={`circle circle-2 green-color ${isVisible ? 'slide-in-right' : ''}`}>
                        <img src={Thumb} alt="Positive Approach"/>
                        <h5>Trust & Transparency</h5>
                    </div>
                    <div className={`circle circle-3 yellow-color ${isVisible ? 'slide-in-left' : ''}`}>
                        <img src={Idea} alt="Sustainable Products"/>
                        <h5>Innovation</h5>
                    </div>
                </div>
                <div className="row-2">
                    <div className={`circle circle-4 green-color ${isVisible ? 'slide-in-right' : ''}`}>
                        <img src={Two} alt="Nurture Relationship"/>
                        <h5>Nurture Relationship</h5>
                    </div>
                    <div className={`circle circle-5 green-color ${isVisible ? 'slide-in-left' : ''}`}>
                        <img src={Money} alt="Cost Effectiveness"/>
                        <h5>Cost Effectiveness</h5>
                    </div>
                    <div className={`circle circle-6 yellow-color ${isVisible ? 'slide-in-right' : ''}`}>
                        <img src={Re} alt="Innovation"/>
                        <h5>Sustainable products</h5>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CoreValues;
