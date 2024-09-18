// src/pages/About.js
import React from "react";
import AboutUsSection from "../components/AboutUsSection";
import '../components/about.css';
function About() {
    return (
        <>
            <AboutUsSection />
            <div className="container mt-5 pt-5">
                <h1>About Us</h1>
                <p>Welcome to the About Us page.</p>
            </div>
        </>
    );
}

export default About;
