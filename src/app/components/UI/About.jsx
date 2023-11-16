import React from 'react'
import Link from 'next/link'
import {SectionSubtitle} from './SectionSubtitle'
import Image from 'next/image'
import img05 from '../../../../public/images/img05.png'
import img06 from '../../../../public/images/img06.png'
import img03 from '../../../../public/images/img03.png'
import img04 from '../../../../public/images/img04.png'


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
                    <button className='primary_btn border-2 border-solid border-rose-500 rounded-lg mr-4 font-semibold p-1 hover:bg-purple-950 hover:text-teal-400'><Link href='#projects'>My Projects</Link></button>
                   
                   <button className='secondary_btn ml-4 underline decoration-dark-title text-dark-title font-semibold hover:text-teal-400 hover:decoration-teal-400'><Link href='public\cv\CV-english-Mary.pdf' download>Dowload CV</Link></button>
                </div>
            </div>
            <div className="lg:col-span-1"> {/*__col_div__images__ */}
                <div className='flex gap-4 justify-center '>
                    <div className='flex flex-col mb-3'>
                        <div className='p-[10px] mb-5 rounded-md bg-dark-features w-[200px]'>
                            <Image src={img06} alt='about-image' className='w-full rounded-md'/>
                        </div>
                        <div className='p-[10px] mb-5 rounded-md bg-dark-features w-[200px]'>
                            <Image src={img04} alt='about-image' className='w-full rounded-md'/>
                        </div>
                    </div>
                    <div className='flex flex-col mb-3'>
                        <div className='p-[10px] mb-5 rounded-md bg-dark-features w-[200px]'>
                            <Image src={img03} alt='about-image' className='w-full rounded-md'/>
                        </div>
                        <div className='p-[10px] mb-5 rounded-md bg-dark-features w-[200px]'>
                            <Image src={img05} alt='about-image' className='w-full rounded-md'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>)
}

export default About