/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const HeroSectionOne = () => {
  const fetchData = () => {
   
    fetch('http://192.168.1.59:3001/api/v1/custom-slider', {
      method: "POST",
      body: JSON.stringify({
        description,
      }),
    headers: {
        type: 'home-page/json',
        location_id: '60ba7674e0f95f94d2c2e36a'
      },
    }).catch((e) => console.log(e));
};


  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            
            <img src="Group 1.png" className="d-block slid1" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="Group 1.png" className="d-block slid1" alt="..." />
          </div>
          <div className="col-lg-6 slide1 ">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold1 fw-bold-1">
                Elemis
              </h1>
              <h6 className="FACIAL facial1">FACIAL</h6>
              <line className="Line-17 line-15"></line>
              <h6 className="BEAUTY beauty">A THING OF BEAUTY.</h6>
              <p className="home-text home-text-1">The incredible facial relaxation of
                the deoxtifying and destressing of the skin</p>
              <line className="Line-17 line-15"></line>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <section
        className="hero-section ptb-120 text-white"
        style={{ background: "url('/Rectangle 2.png')" }}

      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <h1 className="fw-bold1 fw-bold-1">
                  Elemis
                </h1>
                <h6 className="FACIAL facial1">FACIAL</h6>
                <line className="Line-17 line-15"></line>
                <h6 className="BEAUTY beauty">A THING OF BEAUTY.</h6>
                <p className="home-text home-text-1">The incredible facial relaxation of
                  the deoxtifying and destressing of the skin</p>
                <line className="Line-17 line-15"></line>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mt-5">
              <div className="hero-img position-relative circle-shape-images">
                <img
                  src="/hero-1.png"
                  alt="hero img"
                  className="img-fluid1 position-relative z-5"
                />
              </div>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className='img-main '>
        <div className='img-fluid0 '>
          <img
            src="/hero-2.png"
            alt="hero img"
            className="img-home"
          />
        </div>
        <div className='img-text img1-t1'>
          <div className='text1'>
            <p>With Passion & Integrity We take you</p>
            <p>on a Journey of</p>
            <h4>BEAUTY TRANSFORMATION</h4>
            <button>ABOUT US</button>
          </div>
          <div className='log'>
            <div className='img-log'>
              <img src="/make-up (1).png" alt="hero img" />
            </div>
            <div className='img-log1'>
              <img src="/cosmetics.png" alt="hero img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionOne;
