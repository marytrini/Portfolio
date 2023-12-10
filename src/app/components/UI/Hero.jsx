import React from 'react'
import { SectionSubtitle } from './SectionSubtitle'
import Link from 'next/link'
import Image from 'next/image'
import FileDownloader from '../downloadPdf/FileDownloader'


function Hero() {
  return (
    <section className='pt-[60px] mb-20 sm:max-h-screen'>
        <div className='pt-[70px] 2xl:grid grid-cols-2 gap-x-40 ml-20 sm:flex flex-wrap sm:ml-8'>
           <div className='pt-[50px] sm:mb-8'>
           <SectionSubtitle subtitle="-Hello,"/>
            <h2 className='mt-3 mb-3 text-2xl font-semibold'>I&apos;m María Salazar</h2>
            <h5 className='mb-5 text-lg'>Aspiring Frontend Developer</h5>
            <p>
                I am a Fullstack web developer specializing in frontend with React ecosystem for dynamic frontends. Commited to crafting superior user experiences with a blend of quality and usability.
            </p>
            <div className='flex justify-center mt-5'>
                <button className="border-2 border-solid border-rose-500 rounded-lg mr-4 font-semibold p-1 dark:hover:bg-purple-950 hover:bg-light-secondary_feat dark:hover:text-teal-400 hover:text-purple-950"><Link href='#'>Hire me!</Link></button>
                <FileDownloader cvEnglish="CV.Marytrini.pdf"/>
        
            </div>
           </div>
            {/*__________________image__________________ */}
            <div className='text-end relative z-[9] sm:ml-5'>
                <Image alt='hero-image' src='/images/heroinImg.png' width={400} height={400} className='w-[400px] rounded-tl-[50px] rounded-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] sm:w-fit' priority={true}/>

                <div className='2xl:text-left w-[130px] pt-[10px] pr-5 absolute top-1/2 -left-16 rounded-md dark:bg-dark-features bg-light-secondary_feat opacity-70 z-10 -translate-y-2/4 self-end sm:ml-52'>
                    <h6 className='bg-transparent dark:text-dark-text text-light-text dark:font-medium font-semibold ml-3'>Skills</h6>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent ml-3"></i></span>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent"></i></span>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent"></i></span>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent"></i></span>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent"></i></span>
                    <span className='bg-transparent'><i className="ri-bar-chart-fill text-dark-title bg-transparent"></i></span>

                </div>
                <div className='2xl:flex items-center gap-3 w-[150px] absolute bottom-[0.5%] right-24 pt-[10px] pr-5 rounded-md dark:bg-dark-features bg-light-secondary_feat opacity-70 z-10'>
                    <span><i className="ri-lightbulb-line bg-transparent p-[5px] dark:text-teal-400 text-light-title bg-slate-600 rounded-md ml-3"></i></span>
                    <div className='bg-transparent'>
                        <h6 className='bg-transparent dark:text-dark-text text-light-text mb-[5px] dark:font-medium font-semibold '>Experience</h6>
                        <h5 className='bg-transparent dark:text-dark-text text-light-text text-lg'>1 year</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero

