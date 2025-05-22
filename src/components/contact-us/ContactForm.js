import React from 'react';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <section className="contact-promo1">
      <div className="container">
        <div className='main-contact1'>
          <div className="contact-title">
            <img src='/Group 761.png' />
          </div>
          <div className="contact-card">
            <div className="contact-card-main">
              <div className='contact-bodar'>
                <div className='contact-can'>
                  <h5>Branch</h5>
                  <h3>Watford Highstreet</h3>
                  <img src='/Mask group.png' />
                </div>
                <div className="contact-card-all">
                  <div className="contact-card-flex">
                    <div className='contact-card-bodar'>
                      <div className="contact-text">
                        <div className="contact-logo">
                          <img src='/Group 726.png' alt='' />
                        </div>
                        <h4>MOBILE NUMBER</h4>
                        <h6>01923252325</h6>
                      </div>
                    </div>
                    <div className='contact-card-bodar'>
                      <div className="contact-text">
                        <div className="contact-logo">
                          <img src='/Group 734.png' alt='' />
                        </div>
                        <h4>Address</h4>
                        <p>104, High Street, Watford WD17 2BW</p>
                      </div>
                    </div>
                    <div className='contact-card-bodar'>
                      <div className="contact-text">
                        <div className="contact-logo">
                          <img src='/Group 733.png' alt='' />
                        </div>
                        <h4>Timing</h4>
                        <h6>Mon-Sat : 10am to 5pm</h6>
                        <h6>Sun : 11am to 5pm</h6>

                      </div>
                    </div>
                    <div className='contact-card-bodar'>
                      <div className="contact-text">
                        <div className="contact-logo">
                          <img src='/Group 732.png' alt='' />
                        </div>
                        <h4>Email</h4>
                        <p>Adorn-Beauty123@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-title">
        <img src='/Group 761.png' />
      </div>
    </section>
  );
};

export default ContactForm;
