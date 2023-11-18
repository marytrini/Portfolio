import React from 'react'
import ServicesItem from './ServicesItem'
import { SectionSubtitle } from './SectionSubtitle'

function Services() {
  return (
    <section id="services" className="py-8 mb-20 sm:max-h-screen">
  <div className="container mx-auto">
    <div className="2xl:grid grid-cols-2 gap-5 sm:flex flex-wrap-reverse items-center">
      <div className="2xl:col-span-1">
        <div className="2xl:grid grid-cols-2 items-center gap-4 sm:flex">
          <div className="mb-3">
            <ServicesItem title="Web Design" icon="ri-apps-line" className='sm:' />
            <ServicesItem title="Web Development" icon="ri-computer-line" />
          </div>

          <ServicesItem
            title="Full-Stack Development"
            icon="ri-code-s-slash-line"
          />
        </div>
      </div>

      <div className="2xl:col-span-1 sm:mb-8">
        <div className='sm:ml-8'>
          <SectionSubtitle subtitle="What I do" />
          <h3 className="mb-0 mt-4 font-semibold text-xl">Better Design,</h3>
          <h3 className="mb-4 font-semibold text-lg">Better Experience</h3>
          <p >
          I bring full-stack expertise, excelling in React, Redux, JavaScript, Node.js, Express, PostgreSQL, Sequelize, HTML5, and CSS3, with additional skills in Next.js and Tailwind CSS, as well as porficiency using design tools such as Illustrator and Photoshop. My commitment is to deliver captivating and innovative technological solutions for clients, ensuring both attractiveness and creativity in every project.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Services