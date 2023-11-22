import React from 'react';
import NavBar from '../NavBar/NavBar';


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
          <p className='text-center text-base pt-5 border-t border-solid dark:border-dark-text border-light-text'>&copy; Copyright {year} - Developed by María Salazar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
