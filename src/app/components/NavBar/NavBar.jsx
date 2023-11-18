import React from 'react'
import Link from 'next/link'
import BurguerMenu from '../burguerMenu/BurguerMenu'

function NavBar({navLinks}) { 
  

  return (
    <div className='flex items-center gap-x-11 mb-5 mt-5 ml-5'>
      <div className='2xl:hidden sm:flex'>
        <BurguerMenu/>
      </div>
        <div className='sm:hidden 2xl:flex'>
        {navLinks.map((item,index)=>(
            <Link href={item.path} key={index} className='text-base dark:text-dark-text text-light-text font-bold hover:text-teal-400 m-1'>{item.display}</Link>
        ))}
        </div>
        
        
    </div>
  )
}

export default NavBar