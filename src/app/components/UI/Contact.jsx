import React from 'react'
import Link from 'next/link'
import { SectionSubtitle } from './SectionSubtitle'
import Form from './Form';

const socialLinks = {
    linkedin: process.env.Linkedin,
    github: process.env.Github,
    twitter: process.env.Twitter,
  };
  

const Contact = () => {
  return (
<section id="contact">
    <div>{/*container*/}
        <div>{/*Row*/}
            <div>{/*Col*/}
                <SectionSubtitle subtitle='Contact me'/>
                <h3>Contact  Me</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sint earum dolores molestiae, maxime eveniet culpa explicabo alias odio dolorem nihil perferendis, sed corrupti quisquam!
                </p>
                <ul>
                    <li>
                        <span>
                        <i className="ri-map-pin-2-line"></i>
                        </span>
                        <p>Ciudad Bolívar - Venezuela</p>
                    </li>
                    <li>
                        <span>
                        <i className="ri-mail-line"></i>
                        </span>
                        <p>mariatrinidadsalazarr@gmail.com</p>
                    </li>
                    <li>
                        <span>
                        <i className="ri-phone-fill"></i>
                        </span>
                        <p>+584148013873</p>
                    </li>
                </ul>
                <div className='flex items-center gap-x-11 mb-5 ml-5 justify-start'>{/*social network*/}
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
            <div>{/*Col*/}
                <Form/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact