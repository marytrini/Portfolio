import React from 'react';
import NavBar from '../NavBar/NavBar';

function Header({ navLinks }) {
 

  return (
    <header
      className="w-full h-4/5 leading-relaxed"
    >
      <div className='flex w-full h-full items-center justify-around mt-8 mb-9'>
        {/*____________nav_logo___________*/}
        <div className='flex'>
          <h1 className='font-merienda lg:text-6xl sm:text-4xl 2xl:text-6xl text-dark-text'>
            <span className='text-dark-title'>M</span>aría
          </h1>
        </div>
        {/*__________nav_menu___________ */}
        <NavBar navLinks={navLinks} />
        <div>
          <p className='flex items-center gap-2 mb-0'>
            | <i className='ri-phone-line'></i> +584148013873
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
