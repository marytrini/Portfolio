"use client"
import React,{useState} from 'react'
import Link from 'next/link';
import navLinks from '../data/navLinks'

const BurguerMenu = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }

    const handleClick = () => {
      toggleMenu(!isOpen);
    }

    const handleCloseMenu = () => {
      setIsOpen(false);
    }
    
  return (
    <>
    <div>
    <button className='flex flex-col justify-center items-center' onClick={handleClick}>
        <span className={`dark:bg-light-bg bg-dark-bg block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`dark:bg-light-bg bg-dark-bg block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`dark:bg-light-bg bg-dark-bg block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
    </button>
    </div>
    <div>
    {
            isOpen ?
            <div className='sm:w-1/3 sm:h-fit flex flex-col justify-between z-30 items-center fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-features/90 dark:bg-light-bg/80 rounded-lg backdrop-blur-sm py-10'>
        {navLinks.map((item,index)=>(
            <Link href={item.path} key={index} className='text-base text-dark-text/100 dark:text-light-text/100 font-bold hover:text-teal-400 m-1'onClick={handleCloseMenu}>{item.display}</Link>
        ))}
        </div>
            : null
        }
    </div>
    </>
  )
}

export default BurguerMenu