import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/team.png';


import { HiMenu, HiOutlineX } from 'react-icons/hi';

import OffCanvasMenu from './OffCanvasMenu';
import { navHomeOne, navHomeTwo, navCompanyLinks, navCompanyPage } from '../../utils/data';
import dynamic from 'next/dynamic';

const Navbar = ({ navDark }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header className={`main-header `}>
      <nav
        className={`navbar navbar-expand-xl sticky-header ${'affix'}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link href="/">
            
            <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
      
                <img 
                  src="/logo-color.png"
                  alt="logo"
                  className="img-fluid logo-color"
                />   
            </a>
          </Link>
          <a
            className="navbar-toggler position-absolute right-0 border-0"
            href="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </a>
          <div className="clearfix"></div>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="nav col-11 col-md-auto justify-content-center main-menu">
              <li>
                <Link  href="/">
                  <a className="nav-link"> Home</a>
                </Link>    
              </li>
              <li>
                <Link href="about-us">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li>
                <Link href="contact-us">
                  <a className="nav-link">Contact us</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
            <Link href="request-demo">
              <a className="btn btn-light">BOOK NOW</a>
            </Link>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center mt-4">
              <Link href="/">
                <a className="d-flex align-items-center mb-md-0 text-decoration-none">
                  <Image
                    width={121}
                    height={36}
                    src="/logo-color.png"
                    alt="logo"
                    className="img-fluid ps-2"
                  />
                </a>
              </Link>
              <button
                type="button"
                className="close-btn text-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>

            <OffCanvasMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), {ssr : false});
