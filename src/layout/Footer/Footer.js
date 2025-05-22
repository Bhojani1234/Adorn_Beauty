import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import { FaFacebook, FaGithub, FaDribbble, FaTwitter } from 'react-icons/fa';

import {
  footerPrimaryPages,
  footerPages,
  footerTemplate,
} from '../../utils/data';


const Footer = ({ footerLight, style, footerGradient }) => {
  return (
    <>
      <footer className='footer-section'>
        <div
          className={`footer-top  ${footerLight ? '' : 'bg-dark'} ${footerGradient ? 'bg-gradient' : ''
            } `}
          style={style}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    <Image
                      width={200}
                      height={60}
                      src="/logo-white.png"
                      alt="logo"
                      className="img-fluid logo-color"
                    />
                  </div>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                  <div className="ratting-wrap mt-4">
                    <h6 className="mb-0"><img className='footer-con' src="/email 1.png" alt="" />abcd@gmail.com</h6>
                    <h6 className="mb-0"><img className='footer-con' src="/whatsapp (1).png" alt="" /> +1 (012) 3456789</h6>
                    <div className='footer-log'>
                      <img className="footer-icon" src="/whatsapp (1).png" alt="" />
                      <img className="footer-icon" src="/twitter (1).png" alt="" />
                      <img className="footer-icon" src="/instagram (1).png" alt="" />
                      <img className="footer-icon" src="/youtube (1).png" alt="" />
                      <img className="footer-icon" src="/facebook (1).png" alt="" />
                      <img className="footer-icon" src="/linkedin (1).png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>QUICK LINK</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPrimaryPages.map((primaryPage, i) => (
                          <li key={i + 1}>
                            <Link href={primaryPage.href}>
                              <a className="text-decoration-none">
                                {' '}
                                {primaryPage.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>TREATMENTS</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPages.map((page, i) => (
                          <li key={i + 1}>
                            <Link href={page.href}>
                              <a className="text-decoration-none">
                                {' '}
                                {page.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>LOCATION</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerTemplate.map((template, i) => (
                          <li key={i + 1}>
                            <Link href={template.href}>
                              <a className="text-decoration-none">
                                {' '}
                                {template.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
