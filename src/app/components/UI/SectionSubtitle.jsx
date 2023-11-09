import React from 'react'

export const SectionSubtitle = (props) => {
  return (
    <h5 className='text-dark-title font-semibold text-2xl ml-10 relative before:absolute before:content-none before:top-[50%] before:-left-10 before:w-[30px] before:h-px before:bg-dark-text before:text-dark-text'>{props.subtitle}</h5>
  )
}
