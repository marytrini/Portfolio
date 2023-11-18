import React from 'react'

function ServicesItem({title, icon}) {
  return (
    <div className='dark:bg-dark-features bg-light-features opacity-70 p-[30px] mb-[30px] flex items-center gap-4 duration-300 dark:hover:bg-purple-950 hover:bg-light-secondary_feat dark:hover:text-teal-400 hover:text-purple-950 hover:cursor-pointer hover:-translate-y-5 first:rounded-[10px 0px 10px 10px] last:[10px 10px 0px 10px] shadow-md shadow-slate-800 dark:shadow-sm dark:shadow-slate-400'>
        <span className='bg-transparent'><i className={`${icon} dark:text-dark-text text-light-title bg-transparent text-5xl dark:hover:text-teal-400 hover:text-purple-950`}></i></span>
        <h5 className='dark:text-dark-text text-light-title bg-transparent text-base dark:hover:text-teal-400 hover:text-purple-950'>{title}</h5>
    </div>
  )
}

export default ServicesItem