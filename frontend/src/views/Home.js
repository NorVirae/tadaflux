import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Modal from '../components/elements/Modal';
import UseRedirectToHttps from '../utils/useRedirectHttps';

const Home = () => {
  UseRedirectToHttps()
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      {/* <Cta split /> */}
    </>
  );
}

export default Home;