import React from 'react'
import Link from 'next/link'

function NavBar({navLinks}) {
  return (
    <div className='flex items-center gap-x-11 mb-5 mt-5 ml-5'>
        {navLinks.map((item,index)=>(
            <Link href={item.path} key={index} className='text-base text-dark-text font-semibold hover:text-teal-400'>{item.display}</Link>
        ))}
    </div>
  )
}

export default NavBar