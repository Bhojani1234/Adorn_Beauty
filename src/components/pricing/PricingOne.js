import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsCalendar2Check, BsCalendarX, BsCreditCard } from 'react-icons/bs';

import Circle from '../common/Circle';
import { pricingData } from '../../utils/data';
import Rating from '../../components/common/Rating';

const PricingOne = ({ header }) => {
  return (<>
    <section className="pricing-section pt-60 pb-120  position-relative z-2">
      <div className='gallery1'>
        <div className="abd">
          <h3>Customers Awesome</h3>
          <h1>REVIEWS</h1>
        </div>
        <div className='main1-card1 '>
          <div className='card1 '>
            <div className=' card1-img-top'>
              <img src='/cta-img-1.png' className='cta-img1' alt='' />
              </div>
              <div className='card1-body'>
                <div className='card2-body2'>
                  <div className="ratting-wrap1 mt-4">
                    <div className='col-3'>
                      <img src='/testimonial/(3).png' alt='' />
                    </div>
                    <div className='row-lg'>
                      <h6 className="mb-0">SUMER PAL</h6>
                      <Rating />
                    </div>
                  </div>
                  <h5>There are many variations of v available.</h5>
                  <p className='card1-text'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his.</p>
                </div>
              </div>
            </div>
            <div className="card1 card1-lg">
              <div className=' card1-img-top'>
                <img src='/cta-img-3.png' className='cta-img1' alt='' />
              </div>
              <div className='card1-body '>
                <div className='card2-body2'>
                  <div className="ratting-wrap1 mt-4">
                    <div className='col-3'>
                      <img src='/testimonial/1.png' alt='' />
                    </div>
                    <div className='row-lg'>
                      <h6 className="mb-0">SUMER PAL</h6>
                      <Rating />
                    </div>
                  </div>
                  <h5>There are many variations of v available.</h5>
                  <p className='card1-text'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his.</p>
                </div>
              </div>
            </div>
            <div className="card1 card1-lg">
              <div className=' card1-img-top'>
              <img src='/cta-img-2.png' className='cta-img1' alt='' />
              </div>
              <div className='card1-body '>
                <div className='card2-body2'>
                  <div className="ratting-wrap1 mt-4">
                    <div className='col-3'>
                      <img src='/testimonial/2.png' alt='' />
                    </div>
                    <div className='row-lg'>
                      <h6 className="mb-0">SUMER PAL</h6>
                      <Rating />
                    </div>
                  </div>
                  <h5>There are many variations of passages of Lorem Ipsum</h5>
                  <p className='card1-text'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section >
  </>
  );
};

export default PricingOne;
