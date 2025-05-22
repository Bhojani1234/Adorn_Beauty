import React from 'react';
import {
  BsFillChatSquareTextFill,
  BsFillEnvelopeFill,
  BsTelephoneInbound,
} from 'react-icons/bs';

const ContactCard = () => {
  return (
    <section className="contact-promo ">
      <div className="container">
        <div className='main-contact'>
          <div className="contact-title">
            <h5>You can</h5>
            <h3>Contact us </h3>
            <img src='/Group 669.png' />
          </div>
          <div className="contact-card">
            <div className="contact-card-main">
              <div className='contact-bodar'>
                <div className='contact-can'>
                  <h5>Branch</h5>
                  <h3>Atria Watford</h3>
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
                        <h6>01923252325</h6>
                      </div>
                    </div>
                    <div className='contact-card-bodar'>
                      <div className="contact-text">
                        <div className="contact-logo">
                          <img src='/Group 734.png' alt='' />
                        </div>
                        <h4>Address</h4>
                        <p>44-A Atria Watford, Watford WD17 2UB, United Kingdom.</p>
                      </div>
                    </div>
                    <div className='contact-card-bodar'>
                      <div className="contact-text">
                        <div className="contact-logo">
                          <img src='/Group 733.png' alt='' />
                        </div>
                        <h4>Timing</h4>
                        <h6>Mon-Sat : 9am to 6pm</h6>
                        <h6>Sun : 11am to 5pm</h6>
                        <h6>Christmas Hours : Same as mall Timings</h6>
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
    </section>
  );
};

export default ContactCard;
