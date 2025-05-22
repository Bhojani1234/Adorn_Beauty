import React from 'react';
import Image from 'next/image';
import { FaBezierCurve } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { RiNodeTree } from 'react-icons/ri';
import { GrResources } from 'react-icons/gr';

const WorkProcessOne = () => {
  return (
    <section className="work-process ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Our are awesome</h4>
              <h2>Popular Services</h2>
              <img src='Group 543.png' alt=''/>
            </div>
          </div>
        </div>
        <div className='carousel carousel1'>
          <div className='visually'>
            <img src='/Ellipse 86.png' alt=''/>
            <p>HAIR MAGIC</p>
          </div>
          <div className='visually'>
            <img src='/Ellipse 87.png' alt=''/>
            <p>ADVANCE <br/>BEAUTY</p>
          </div>
          <div className='visually'>
            <img src='/Ellipse 88.png' alt=''/>
            <p>FACIALS</p>
          </div>
          <div className='visually'>
            <img src='/Ellipse 89.png' alt=''/>
            <p>BASIC BEAUTY</p>
          </div>
          <div className='visually'>
            <img src='/Ellipse 90.png' alt=''/>
            <p>GROOM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessOne;
