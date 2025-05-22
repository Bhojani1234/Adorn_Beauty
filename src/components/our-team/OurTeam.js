import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { ourTeam } from '../../utils/data';

const OurTeam = () => {
  return (
    <section id="our-team" className="team-section ptb-120">
      <div className="container">
        <div className="row">
          <div className="col-8">
          <p>The Adorn Beauty in Uxbridge open 
            to reveal a perfect example of a contemporary,
             state of the art beauty salon. 
             A wonderful ambience beckons you and a 
             friendly and warm staff provides excellent service.
              For ADORN is not just about beauty care...its 
              about the loving care of clients who must be truly 
              satisfied!</p>
              <p>Basking in the relaxed atmosphere of the saloon, 
                customers enjoy the best in beauty care. The 
                 is given according to the particular needs of the
                  individual client who is carefully assessed by a 
                   of qualified and professional beauticians. 
                   This is backed by personalized advice and 
                   perfect treatment that benefits the client 
                    the utmost, thus ensuring 100% satisfaction!
                    Whether you are looking for a deeply relaxing 
                    massage to melt</p>
                    <p>Your stresses away, an invigorating facial 
                      to leave your skin perfectly nourished or 
                      some essential plucking and preening,
                      Adorn beauty is the only place to be.</p>
                      <p>Re-connect with your mind, 
                        re-energise your body and refresh 
                        your spirit as you relax in the 
                        minimalist chic surroundings.
                        Our salon offers a unique experience,
                        worlds apart from the hustle and bustle 
                        of the daily grind.</p>
                        <p>The sophisticated service is a high 
                          industry benchmark and ensures that 
                          you’ll leave walking on air and feeling 
                           both inside and out.</p>
          </div>
          <div className="col-4"><img src='/Rectangle 143.png' alt=''/></div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
