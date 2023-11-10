import React from 'react'
import Link from 'next/link'
import { SectionSubtitle } from './SectionSubtitle'
import Form from './Form';

const socialLinks = {
    linkedin: process.env.Linkedin,
    github: process.env.Github,
    twitter: process.env.Twitter,
    maps: process.env.Maps,
  };
  

const Contact = () => {
  return (
<section id="contact" className='pb-[60px]'>
    <div>{/*container*/}
        <div>{/*Row*/}
            <div>{/*Col*/}
                <SectionSubtitle subtitle='Contact me'/>
                <h3 className='my-10 ml-2'>Contact  Me</h3>
                <p className='ml-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sint earum dolores molestiae, maxime eveniet culpa explicabo alias odio dolorem nihil perferendis, sed corrupti quisquam!
                </p>
                <ul className='pl-0 my-10 ml-2'>
                    <li className='flex items-center mb-[15px] gap-4'>
                        <span>
                            <Link href={socialLinks.maps}>    
                        <i className="ri-map-pin-2-line text-xl p-[5px] rounded-md bg-dark-features text-teal-400"></i>
                            </Link>
                        </span>
                        <p className='mb-0'>Ciudad Bolívar - Venezuela</p>
                    </li>
                    <li className='flex items-center mb-[15px] gap-4'>
                        <span>
                       <a href="mailto:mariatrinidadsalazarr@gmail.com">
                       <i className="ri-mail-line text-xl p-[5px] rounded-md bg-dark-features text-teal-400"></i>
                       </a>
                        </span>
                        <p className='mb-0'>mariatrinidadsalazarr@gmail.com</p>
                    </li>
                    <li className='flex items-center mb-[15px] gap-4'>
                        <span>
                        <i className="ri-phone-fill text-xl p-[5px] rounded-md bg-dark-features text-teal-400"></i>
                        </span>
                        <p className='mb-0'>+584148013873</p>
                    </li>
                </ul>
                <div className='flex items-center gap-x-11 mb-5 ml-5 mt-[30px] text-teal-400 text-xl cursor-pointer justify-start'>{/*social network*/}
                <Link href={socialLinks.linkedin}>
                <i className="ri-linkedin-fill"></i>
                </Link>
                <Link href={socialLinks.github}>
                <i className="ri-github-fill"></i>
                </Link>
                <Link href={socialLinks.twitter}>
                <i className="ri-twitter-x-fill"></i>
                </Link>
                </div>

            </div>
            <div className='ml-[15px]'>{/*Col*/}
                <Form/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact