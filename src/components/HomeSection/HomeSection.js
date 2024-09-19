import React from 'react';
import './HomeSection.css';  // Assuming the CSS is saved here
import firstVideo from '../../img/22.mp4'; // Update the path to your video file
import { useSpring, animated } from '@react-spring/web';

const HomeSection = () => {
  // Animation for the first heading
  const firstHeadingAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-50px)' },
    config: { duration: 800 },
  });

  // Animation for the second heading with a delay
  const secondHeadingAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-50px)' },
    config: { duration: 800 },
    delay: 500, // Delay to make it appear after the first heading
  });

  return (
    <div className="video-background">
      {/* Background Video */}
      <video autoPlay loop muted className="bg-video">
        <source src={firstVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text content on top of the video */}
      <div className="container textandheadingbtn">
        <div className="content-home textbtn">
          <animated.div style={firstHeadingAnimation}>
            <p className="Providingpara">
              Nurture Your Crops, <br /> Grow Your Harvest
            </p>
          </animated.div>
          <hr className="providing-hr-line" style={{ width: "40%", marginRight: "0" }} />
          <animated.div style={secondHeadingAnimation}>
            <div style={{ background: 'rgba(213, 135, 17, 0.2)', marginLeft: '-43px', height: '80px', padding: '5px', width: '88%' }}>
              <h1 style={{ marginLeft: '38px' }} className="mt-3 ORGANICheading">
                Discover essential products for thriving farms
              </h1>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
