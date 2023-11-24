import React from 'react'
import Link from 'next/link'
import {SectionSubtitle} from './SectionSubtitle'
import Image from 'next/image'


function About() {
  return (<section id="about" className='mb-20'>
    <div> {/*__container_div__ */}
        <div className='grid grid-cols-1 2xl:grid-cols-2 gap-5 sm:flex flex-wrap'> {/*__row_div__ */}
            <div className="2xl:col-span-1 ml-8"> {/*__col_div__text__ */}
                <SectionSubtitle subtitle='About me'/>
                <h3 className='mt-5 mb-[15px] ml-5 font-semibold text-xl'>I&apos;m here</h3>
                <h3 className='mb-4 ml-5 font-semibold text-xl'>to help your next project</h3>
                <p className='ml-2'>
                As a recent web developer with an engineering background, I&apos;m dedicated to continuous personal and professional growth. I thrive on learning, consistently honing my skills. A collaborative team player, I embrace challenges with a commitment to delivering exceptional results.
                </p>

                <div className='flex items-center gap-5 ml-2'>
                    <div>
                        <h6 className='2xl:flex items-center gap-2 mt-3 flex-wrap mb-0 sm:block'>
                            <span><i className="ri-checkbox-circle-line text-dark-title sm:mr-1.5"></i></span>
                            Problem Solving
                        </h6>
                        <h6 className='2xl:flex items-center gap-2 mt-3 flex-wrap mb-0 sm:block'>
                            <span><i className="ri-checkbox-circle-line text-dark-title sm:mr-1.5"></i></span>
                            Investigation
                        </h6>
                    </div>
                    <div>
                        <h6 className='2xl:flex items-center gap-2 mt-3 flex-wrap mb-0 sm:block'>
                            <span><i className="ri-checkbox-circle-line text-dark-title sm:mr-1.5"></i></span>
                            Creative Ideas
                        </h6>
                        <h6 className='flex items-center gap-2 mt-3 flex-wrap mb-0 sm:block'>
                            <span><i className="ri-checkbox-circle-line text-dark-title sm:mr-1.5"></i></span>
                            High Quality
                        </h6>
                    </div>
                </div>
                <div className='mt-5 ml-2'>
                    <button className='border-2 border-solid border-rose-500 rounded-lg mr-4 font-semibold p-1 dark:hover:bg-purple-950 hover:bg-light-secondary_feat dark:hover:text-teal-400 hover:text-purple-950'><Link href='#projects'>My Projects</Link></button>
                   
                   <button className='ml-4 underline decoration-dark-title text-dark-title font-semibold dark:hover:text-teal-400 hover:text-purple-950 dark:hover:decoration-teal-400 hover:decoration-purple-950'><Link href='public\cv\CV-english-Mary.pdf' download>Dowload CV</Link></button>
                </div>
            </div>
            <div className="lg:col-span-1"> {/*__col_div__images__ */}
                <div className='flex gap-4 justify-center '>
                    <div className='flex flex-col mb-3'>
                        <div className='p-[10px] mb-5 rounded-md dark:bg-dark-features bg-light-title shadow-md shadow-slate-800 dark:shadow-sm dark:shadow-slate-400 w-[200px]'>
                            <Image src='/images/image01.png' alt='about-image' width={100} height={100} className='w-full rounded-md'/>
                        </div>
                        <div className='p-[10px] mb-5 rounded-md dark:bg-dark-features bg-light-title shadow-md shadow-slate-800 dark:shadow-sm dark:shadow-slate-400 w-[200px]'>
                            <Image src='/images/image04.jpg' alt='about-image' width={100} height={100} className='w-full rounded-md'/>
                        </div>
                    </div>
                    <div className='flex flex-col mb-3'>
                        <div className='p-[10px] mb-5 rounded-md dark:bg-dark-features bg-light-title shadow-md shadow-slate-800 dark:shadow-sm dark:shadow-slate-400 w-[200px]'>
                            <Image src='/images/image02.png' alt='about-image' width={100} height={100} className='w-full rounded-md'/>
                        </div>
                        <div className='p-[10px] mb-5 rounded-md dark:bg-dark-features bg-light-title shadow-md shadow-slate-800 dark:shadow-sm dark:shadow-slate-400 w-[200px]'>
                            <Image src='/images/image05.png' alt='about-image' width={100} height={100} className='w-full rounded-md'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>)
}

export default About