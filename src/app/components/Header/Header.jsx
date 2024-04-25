import React from 'react';
import NavBar from '../NavBar/NavBar';
import DarkModeButton from '../darkMode/DarkMode';

function Header({ navLinks }) {
 
    return (
    <header
      className="w-full max-h-screen leading-relaxed"
    >
      <div className='flex w-full h-fit items-center justify-around mt-8 mb-1'>
        {/*____________nav_logo___________*/}
        <div className='flex'>
          <h1 className='font-merienda lg:text-6xl sm:text-4xl 2xl:text-6xl'>
            <span className='text-dark-title'>M</span>aría
          </h1>
        </div>
        {/*__________nav_menu___________ */}
        <NavBar navLinks={navLinks} />
        <div>
          <p className='flex items-center gap-2 mb-0'>
            | <i className='ri-phone-line'></i> +584249207625
          </p>
        </div>
        <DarkModeButton/>
      </div>
    </header>
  );
}

export default Header;
