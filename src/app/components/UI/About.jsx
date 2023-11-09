import React from 'react'
import Link from 'next/link'
import {SectionSubtitle} from './SectionSubtitle'
import Image from 'next/image'
import img05 from '../../../../public/images/img05.png'
import img06 from '../../../../public/images/img06.png'
import img03 from '../../../../public/images/img03.png'
import img04 from '../../../../public/images/img04.png'


function About() {
  return (<section id="about">
    <div> {/*__container_div__ */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'> {/*__row_div__ */}
            <div className="lg:col-span-1"> {/*__col_div__text__ */}
                <SectionSubtitle subtitle='About me'/>
                <h3 className='mt-4 font-semibold text-xl'>I&apos;m here</h3>
                <h3 className='mb-4 font-semibold text-xl'>to help your next project</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem reprehenderit ab numquam labore blanditiis? Assumenda ab labore eveniet perspiciatis quae! A rerum aut necessitatibus provident voluptas atque earum, quibusdam eos omnis nihil illum quo voluptatibus aliquid porro nisi recusandae quaerat beatae, minus debitis repellat vero, voluptatum veniam. Accusamus facere, iste neque cumque quam quas ipsam ipsum, officia, vitae pariatur enim.
                </p>

                <div className='flex items-center gap-5'>
                    <div>
                        <h6 className='flex items-center gap-2 mt-3 flex-wrap mb-0'>
                            <span><i className="ri-checkbox-circle-line text-dark-title"></i></span>
                            Problem Solving
                        </h6>
                        <h6 className='flex items-center gap-2 mt-3 flex-wrap mb-0'>
                            <span><i className="ri-checkbox-circle-line text-dark-title"></i></span>
                            Investigation
                        </h6>
                    </div>
                    <div>
                        <h6 className='flex items-center gap-2 mt-3 flex-wrap mb-0'>
                            <span><i className="ri-checkbox-circle-line text-dark-title"></i></span>
                            Creative Ideas
                        </h6>
                        <h6 className='flex items-center gap-2 mt-3 flex-wrap mb-0'>
                            <span><i className="ri-checkbox-circle-line text-dark-title"></i></span>
                            High Quality
                        </h6>
                    </div>
                </div>
                <div className='mt-5'>
                    <button className='primary_btn border-2 border-solid border-rose-500 rounded-lg mr-4 font-semibold p-1 hover:bg-purple-800 hover:text-teal-400'><Link href='#projects'>My Projects</Link></button>
                    <button className='secondary_btn ml-4 underline decoration-dark-title text-dark-title font-semibold hover:text-teal-400 hover:decoration-teal-400'><Link href='#'>Dowload CV</Link></button>
                </div>
            </div>
            <div className="lg:col-span-1"> {/*__col_div__images__ */}
                <div className='flex gap-4 justify-center '>
                    <div className='flex flex-col mb-3'>
                        <div className='p-[10px] mb-5 rounded-md bg-purple-900 w-[200px]'>
                            <Image src={img06} alt='about-image' className='w-full rounded-md'/>
                        </div>
                        <div className='p-[10px] mb-5 rounded-md bg-purple-900 w-[200px]'>
                            <Image src={img04} alt='about-image' className='w-full rounded-md'/>
                        </div>
                    </div>
                    <div className='flex flex-col mb-3'>
                        <div className='p-[10px] mb-5 rounded-md bg-purple-900 w-[200px]'>
                            <Image src={img03} alt='about-image' className='w-full rounded-md'/>
                        </div>
                        <div className='p-[10px] mb-5 rounded-md bg-purple-900 w-[200px]'>
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