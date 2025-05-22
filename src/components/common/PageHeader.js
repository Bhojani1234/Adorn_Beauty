/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const PageHeader = () => {
  return (
    <>
      <section
        className="page-header position-relative overflow-hidden "
        style={{ background: "url('/adorn1.png')", }} >
            <div className="hero-contact-us">
              <h1 className="fw-bold3 display-5">
                Contact us
              </h1>
              <img src='Group 765.png' alt='' />
              <p className="lead3">
                With Passion & Integrity  We take you on a
              </p>
              <p>Journey of </p>
            </div>  
      </section>
    </>
  );
};

export default PageHeader;
