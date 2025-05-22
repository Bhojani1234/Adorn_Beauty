/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ServiceForm from './ServiceForm';

const SingleServiceRegister = () => {
  return (
    <section className="sign-up-in-section bg-dark ptb-120 position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <ServiceForm />
        </div>
      </div>
    </section>
  );
};

export default SingleServiceRegister;
