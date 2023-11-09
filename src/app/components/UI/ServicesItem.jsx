import React from 'react'

function ServicesItem({title, icon}) {
  return (
    <div className='bg-purple-900 opacity-70 p-[30px] mb-[30px] flex items-center gap-4 duration-300 hover:bg-indigo-950 hover:text-teal-400 hover:cursor-pointer hover:-translate-y-5 first:rounded-[10px 0px 10px 10px] last:[10px 10px 0px 10px]'>
        <span className='bg-transparent'><i className={`${icon} text-white bg-transparent text-5xl hover:text-teal-400`}></i></span>
        <h5 className='text-white bg-transparent text-base hover:text-teal-400'>{title}</h5>
    </div>
  )
}

export default ServicesItem