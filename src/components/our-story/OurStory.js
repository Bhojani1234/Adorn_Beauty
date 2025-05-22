/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="our-story-section pt-60 pb-120">
      <div className='container'></div>
      <div className="about about2">
        <div className="about-main about-main2">
          <div className="about-text about-text2">
            <div className="about-img0 about-img02">
              <img className='about-i-logo' src='/Group 552.png' alt=''/>
              <img className='about-i-logo0' src='/Group 554.png' alt=''/>
              <img className="about-img about-img2" src='/Rectangle 85.png' alt='' />
              <img className='about-i-logo1' src='/Group 794.png' alt=''/>
              <img className='about-i-logo2' src='/Rectangle 134.png' alt=''/>
              <img className='about-i-logo3' src='/Rectangle 138.png' alt=''/>
            </div>
            <div className='about-text-div'>
            <h3 className='about-h3'>ABOUT</h3>
            <h3>ADORN- BEAUTY</h3>
            <p className='about-p'>SINCE : 2023</p>
            <p>Welcome to Adorn, we are a chain of contemporary, 
              stylish and relaxing beauty salons across London, 
              Hertfordshire and Buckinghamshire. 
              We pride ourselves in achieving our aim which is, 
              offering quality and essential beauty treatments, 
              including invigorating facials, relaxing massages, 
              and pristine eyebrow shaping; with a sense of bliss. 
              We offer a wide range of skin and body treatments using world 
              renowned brands such as Dermalogica,
              Jean d'Estrees, HD Brows, Shellac, OPI and Noveau Lashes.
              only the very best in the beauty industry. We welcome our
              customers with a service that exceeds expectation in a relaxing, 
              honest and loving environment. You are not just another customer,
              we want you to become our valued client at any one of our prestigious salons.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
