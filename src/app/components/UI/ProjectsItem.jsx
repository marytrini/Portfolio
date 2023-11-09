import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectsItem = (props) => {

    const {title, img, liveUrl, keyword} = props.item
  return (
    <div className='bg-purple-900 w-3/4 group pt-[30px] pr-5 pb-5 pl-5 rounded-xl mb-[30px] hover:mt-5'>
        <div className='bg-transparent text-base'>
            <h6 className='mb-5 bg-transparent text-dark-title font-semibold text-xl'>{title}</h6>
            {keyword.map((item,index)=>(
                <span className='pt-[10px] pb-[10px] pr-[5px] pl-[5px] bg-purple-800 text-xs' key={index}>{item}</span>
            ))}
        </div>
        <div className='flex items-center justify-center mt-[30px] bg-transparent'>
            <Image alt='project-img' src={img} width="380" height="250" className='rounded-lg'/>
        </div>
        <div className='bg-transparent mt-[30px]  hidden group-hover:block'>
            <button className="border-2 border-solid border-rose-500 rounded-lg mr-4 font-semibold p-1 hover:bg-purple-800 hover:text-teal-400">
                <Link href={liveUrl}>Launch</Link>
            </button>
        </div>
    </div>
  )
}

export default ProjectsItem