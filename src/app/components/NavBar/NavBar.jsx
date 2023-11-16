'use client'
import React from 'react'
import Link from 'next/link'
import DarkModeButton from '../darkMode/DarkMode'


function NavBar({navLinks}) {

  
 
  return (
    <div className='flex items-center gap-x-11 mb-5 mt-5 ml-5'>
      <div className='2xl:hidden sm:flex'>
      <button className='flex flex-col justify-center items-center'>
        <span className='bg-light-light_bg block h-0.5 w-6 rounded-sm -translate-y-0.5'></span>
        <span className='bg-light-light_bg block h-0.5 w-6 rounded-sm my-0.5'></span>
        <span className='bg-light-light_bg block h-0.5 w-6 rounded-sm translate-y-0.5'></span>
      </button>
      </div>
        <div className='sm:hidden 2xl:flex'>
        {navLinks.map((item,index)=>(
            <Link href={item.path} key={index} className='text-base text-dark-text font-semibold hover:text-teal-400 m-1'>{item.display}</Link>
        ))}
        </div>
        <DarkModeButton/>
    </div>
  )
}

export default NavBar