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
        <div className='flex items-center gap-x-11 mb-5 ml-5 justify-start'>
          <Link href={socialLinks.linkedin} className='text-rose-400  hover:text-teal-300'>
            <i className='ri-linkedin-fill'></i>
          </Link>
          <Link href={socialLinks.github}  className='text-rose-400  hover:text-teal-300'>
            <i className='ri-github-fill'></i>
          </Link>
          <Link href={socialLinks.twitter}  className='text-rose-400  hover:text-teal-300'>
            <i className='ri-twitter-x-fill'></i>
          </Link>
        </div>
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
