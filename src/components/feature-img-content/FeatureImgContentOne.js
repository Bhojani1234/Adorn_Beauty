import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { BsShieldCheck } from 'react-icons/bs';
import { FaCheckCircle, FaFingerprint } from 'react-icons/fa';

const FeatureImgContentOne = () => {
  return (
    <>
      <section className="why-choose-us ptb-120">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-5 col-12">
              <div className="why-choose-content ">
               <h3>GIFT</h3>
                <h2>  VOUCHER</h2>
                <p>
                In publishing and graphic design,
                Lorem ipsum is a placeholder text commonly 
                used to demonstrate the visual form of a 
                document or a typeface without relying on
                 meaningful content.
                </p>
                <button>GIFT VOUCHER</button>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
              <img src="/screen/widget-11.png" alt="hero img"   className="img-gift"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us ptb-120 cred">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
          
            <div className="col-lg-6 ">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
              <img src="/screen/widget-13.png" alt="hero img"   className="img-gift"/>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="why-choose-content ">
               <h3>GIFT</h3>
                <h2>  VOUCHER</h2>
                <p>
                In publishing and graphic design,
                Lorem ipsum is a placeholder text commonly 
                used to demonstrate the visual form of a 
                document or a typeface without relying on
                 meaningful content.
                </p>
                <button>SPECIAL OFFERS</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default FeatureImgContentOne;
