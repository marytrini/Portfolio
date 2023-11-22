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

  const  mailAddress = process.env.Mail;
  

const Contact = () => {
  return (
<section id="contact" className='pb-[60px]'>
    <div>{/*container*/}
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5 sm:flex flex-wrap">{/*Row*/}
            <div className="2xl:col-span-1 ">{/*Col*/}
                <SectionSubtitle subtitle='Contact me'/>
                <h3 className='my-10 ml-2'>Contact  Me</h3>
                <p className='ml-2'>
                Feel free to reach out for collaboration or projects—I&apos;m open to exciting opportunities. Let&apos;s connect and create something amazing together.
                </p>
                <ul className='pl-0 my-10 ml-2'>
                    <li className='flex items-center mb-[15px] gap-4'>
                        <span>
                            <Link href={socialLinks.maps}>    
                        <i className="ri-map-pin-2-line text-xl p-[5px] rounded-md dark:bg-dark-features bg-light-secondary_feat dark:text-teal-400 text-light-title"></i>
                            </Link>
                        </span>
                        <p className='mb-0'>Ciudad Bolívar - Venezuela</p>
                    </li>
                    <li className='flex items-center mb-[15px] gap-4'>
                        <span>
                       <a href={`mail to: ${mailAddress}`}>
                       <i className="ri-mail-line text-xl p-[5px] rounded-md dark:bg-dark-features bg-light-secondary_feat dark:text-teal-400 text-light-title"></i>
                       </a>
                        </span>
                        <p className='mb-0'>mariatrinidadsalazarr@gmail.com</p>
                    </li>
                    <li className='flex items-center mb-[15px] gap-4'>
                        <span>
                        <i className="ri-phone-fill text-xl p-[5px] rounded-md dark:bg-dark-features bg-light-secondary_feat dark:text-teal-400 text-light-title"></i>
                        </span>
                        <p className='mb-0'>+584148013873</p>
                    </li>
                </ul>
                <div className='flex items-center gap-x-11 mb-5 ml-5 mt-[30px] dark:text-teal-400 text-light-title text-xl cursor-pointer justify-start'>{/*social network*/}
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
            <div className='ml-[15px] 2xl:col-span-1'>{/*Col*/}
                <Form/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact