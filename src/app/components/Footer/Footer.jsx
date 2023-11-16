import React from 'react';
import Link from 'next/link';
import NavBar from '../NavBar/NavBar';

const socialLinks = {
  linkedin: process.env.Linkedin,
  github: process.env.Github,
  twitter: process.env.Twitter,
};

function Footer({navLinks}) {

  const date=new Date()
  const year=date.getFullYear()

  return (
    <footer>
      <div className='grid-cols-3'>
        <NavBar navLinks={navLinks}/>
        
        <div>
          <h6 className='text-base text-right'>
          Created by <span className='font-merienda text-dark-title'>María</span>
          </h6>
        </div>
        {/*______________footer_bottom__________________ */}
        <div>
          <p className='text-center text-base pt-5 border-t border-solid '>&copy; Copyright {year} - Developed by María Salazar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
