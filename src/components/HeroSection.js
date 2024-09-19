import React from 'react';
import './HeroSection.css'; // Assuming you have a separate CSS file for hero section styles
import { Card, Button, Row, Col, Container, Image } from 'react-bootstrap';
import { AccountBalance, TrendingUp, Group } from '@mui/icons-material'; // MUI Icons

import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSection from './HomeSection/HomeSection';
import ProductCategory from './HomeSection/ProductCategory';
import PlantGrowth from './HomeSection/PlantGrowth';
import ComparisonSection from './HomeSection/ComparisonSection';
import VisualShowcase from './HomeSection/VisualShowcase';
import SunfieldAgro from './HomeSection/SunfieldAgro';
import CoreValues from './HomeSection/CoreValues';
import BulbSection from './HomeSection/BulbSection';
import WhyChooseUsSection from './HomeSection/WhyChooseUsSection';
import TestimonialSection from './HomeSection/TestimonialSection ';
import ContactFormSection from './HomeSection/ContactFormSection';
import Footer from './Footer';
import ImageComparisonSlider from './HomeSection/ImageComparisonSlider';
import ImageComparison from './HomeSection/ImageComparison';
import WhatsAppButton from './HomeSection/WhatsAppButton';

const HeroSection = () => {
  return (<>





    <WhatsAppButton />


    <HomeSection />

    <ProductCategory />
    <PlantGrowth />

    {/* <ComparisonSection /> */}
    {/* <ImageComparisonSlider /> */}
    {/* <ImageComparison /> */}
    <VisualShowcase />
    <SunfieldAgro />

    <CoreValues />
    <BulbSection />


    <TestimonialSection />


    <ContactFormSection />

    <Footer />
  </>
  );
};

export default HeroSection;
