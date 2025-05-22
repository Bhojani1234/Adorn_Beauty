import React from 'react';
import Image from 'next/image';


const FeatureImgContentTwo = ({ bgWhite }) => {
  return (
    <section>
      <div className='about-bg'>
        <div className="row-about">
          <div className="col" >
            <img className='about-i' src='/Rectangle 126.png' alt='' />
          </div>
          
          <div className="col">
            <div className='about-img-all'>
              <div className='about-img-col'>
                <div className='about-im'><img src='/Rectangle 136.png' alt=''/></div>
                <div className='about-im'><img src='/Rectangle 139.png' alt=''/></div>
              </div>
              <div className='about-img-col2'>
              <div className='about-im'><img src='/Rectangle 142.png' alt=''/></div>
                <div className='about-im'><img src='/Rectangle 141.png' alt=''/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImgContentTwo;
