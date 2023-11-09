import React from 'react'
import { SectionSubtitle } from './SectionSubtitle'
import Link from 'next/link'
import Image from 'next/image'
import heroinImg from '../../../../public/images/heroinImg.png'

function Hero() {
  return (
    <section className='pt-[60px]'>
        <div className='pt-[70px] grid grid-cols-2 gap-x-40 ml-20'>
           <div className='pt-[50px]'>
           <SectionSubtitle subtitle="-Hello,"/>
            <h2 className='mt-3 mb-3 text-2xl font-semibold'>I&apos;m María Salazar</h2>
            <h5 className='mb-5 text-lg'>Full Stack Developer</h5>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae blanditiis dolore exercitationem aperiam aliquid voluptas vitae sunt nobis. Ratione placeat, laudantium corporis ducimus repudiandae aperiam, praesentium tenetur minima, mollitia qui vitae maxime distinctio! Recusandae omnis consectetur dolorem fugit consequuntur itaque necessitatibus assumenda architecto. Maxime fuga tempore, ipsum necessitatibus ipsam molestias.
            </p>
            <div className='flex justify-center mt-5'>
                <button className="primary_btn border-2 border-solid border-rose-500 rounded-lg mr-4 font-semibold p-1 hover:bg-purple-800 hover:text-teal-400"><Link href='#'>Hire me!</Link></button>
                <button className="secondary_btn ml-4 underline decoration-dark-title text-dark-title font-semibold hover:text-teal-400 hover:decoration-teal-400"><Link href='#'>Download CV</Link></button>
            </div>
           </div>
            {/*__________________image__________________ */}
            <div className='text-end relative z-[9]'>
                <Image alt='hero-image' src={heroinImg} className='w-[400px] h-[400px] rounded-tl-[50px] rounded-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]'/>

                <div className='text-left w-[130px] pt-[10px] pr-5 absolute top-1/2 -left-16 rounded-md bg-purple-900 opacity-70 z-10 -translate-y-2/4 self-end'>
                    <h6 className='bg-transparent text-white ml-3'>Skills</h6>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent ml-3"></i></span>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent"></i></span>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent"></i></span>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent"></i></span>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent"></i></span>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent"></i></span>

                </div>
                <div className='flex items-center gap-3 w-[150px] absolute bottom-[0.5%] right-24 pt-[10px] pr-5 rounded-md bg-purple-900 opacity-70 z-10'>
                    <span><i className="ri-lightbulb-line bg-transparent p-[5px] text-teal-400 bg-purple-500 rounded-md ml-3"></i></span>
                    <div className='bg-transparent'>
                        <h6 className='bg-transparent text-white mb-[5px] font-medium text-xs'>Experience</h6>
                        <h5 className='bg-transparent text-white text-lg'>1 year</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero

