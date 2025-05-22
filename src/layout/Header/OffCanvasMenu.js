import React from 'react';
import Link from 'next/link';
import { navCompanyLinks, navCompanyPage, navHomeOne, offcanvasMenuData } from '../../utils/data';

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
      <li className="nav-item dropdown">
               <li>
                <Link  href="/">
                  <a className="nav-link"> Home</a>
                </Link>    
              </li>
               
              </li>
              <li>
                <Link href="/about-us">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="nav-link">Contact us</a>
                </Link>
              </li>

              
              
      </ul>
      <div className="action-btmns t-4 ps-3">
        
        <Link href="/request-demo">
          <a className="btn btn-primary">BOOK NOW</a>
        </Link>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
