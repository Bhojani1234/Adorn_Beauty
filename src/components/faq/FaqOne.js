import React from 'react';
import Image from 'next/image';

const FaqOne = () => {
  return (
    <section className="faq-section ptb-120 bg-light">
      <div className='partners' style={{ background: "url('/Rectangle 20.png')" }}>
        <div className='text1-main1' >
          <h2 style={{ color: "white" }}>Our Partners</h2>
          <p>The bedding was hardly able to cover
            it and seemed ready to slide off<br /> any moment.
            His many legs, pitifully thin compared with
            the size of the rest of <br />him, waved about
            helplessly as he looked. "What's happened<br />
            to me?" he thought.</p>
        </div>
        <div className="main-scroll-div">
          <div>
            {/* <button className="icon" onclick="scrolll()"> <i className="fas fa-angle-double-left"></i></button> */}
          </div>
          <div className="cover">
            <div className="scroll-images">
              <div className="child"><img className="child-img" src="/logo (8).png" alt="images" /></div>
              <div className="child"><img className="child-img" src="/logo1 (6).png" alt="images" /></div>
              <div className="child"><img className="child-img" src="/logo1 (5).png" alt="images" /></div>
              <div className="child"><img className="child-img" src="/logo1 (7).png" alt="images" /></div>
              <div className="child"><img className="child-img" src="/logo1 (3).png" alt="images" /></div>
              <div className="child"><img className="child-img" src="/logo1 (1).png" alt="images" /></div>
              <div className="child"><img className="child-img" src="/logo1 (2).png" alt="images" /></div>
              <div className="child"><img className="child-img" src="/logo1 (4).png" alt="images" /></div>
              <div className="child"><img className="child-img" src="/logo (8).png" alt="images" /></div>
              <div className="child"><img className="child-img" src="/logo1 (6).png" alt="images" /></div>
              <div className="child"><img className="child-img" src="/logo1 (5).png" alt="images" /></div>
              <div className="child"><img className="child-img" src="/logo1 (7).png" alt="images" /></div>
            </div>
          </div>
          <div>
            {/* <button className="icon" onclick="scrollr()"> <i className="fas fa-angle-double-right"></i></button> */}
          </div>
        </div>
        {/* <div className="container-fuild">
          <img className='fuild1' src='/logo (8).png' alt=''/>
          <img className='fuild1' src='/logo1 (6).png' alt=''/>
          <img className='fuild1' src='/logo1 (5).png' alt=''/>
          <img className='fuild1' src='/logo1 (7).png' alt=''/>
          <img className='fuild1' src='/logo1 (3).png' alt=''/>
          <img className='fuild1' src='/logo1 (1).png' alt=''/>
          <img className='fuild1' src='/logo1 (2).png' alt=''/>
          <img className='fuild1' src='/logo1 (4).png' alt=''/>
        </div> */}
      </div>
    </section>
  );
};

export default FaqOne;
