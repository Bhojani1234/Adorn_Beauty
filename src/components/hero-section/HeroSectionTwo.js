/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import VideoModal from '../common/VideoModal';

const HeroSectionOne = () => {
  return (
    <section className="hero-section1 ptb-120 text-white bg-gradient">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap1">
              <h1 className="fw-bold2 display-5">
              About Us
              </h1>
              <p className="lead1">
              With Passion & Integrity  We take you on a Journey of 
              </p>
             <h3 className='lead2'>BEAUTY TRANSFORMATION</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mt-5">
            <div className="hero-img position-relative circle-shape-images">
              <img
                src="/about-img-4.png"
                alt="hero img"
               className='about-img1'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOne;
