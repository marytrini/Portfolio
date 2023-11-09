import React from 'react'
import ServicesItem from './ServicesItem'
import { SectionSubtitle } from './SectionSubtitle'

function Services() {
  return (
    <section id="services" className="py-8">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="lg:col-span-1">
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="mb-3">
            <ServicesItem title="App Development" icon="ri-apps-line" />
            <ServicesItem title="Web Development" icon="ri-computer-line" />
          </div>

          <ServicesItem
            title="Full-Stack Development"
            icon="ri-code-s-slash-line"
          />
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="service__title">
          <SectionSubtitle subtitle="What I do" />
          <h3 className="mb-0 mt-4 font-semibold text-xl">Better Design,</h3>
          <h3 className="mb-4 font-semibold text-lg">Better Experience</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet
            culpa nobis corporis officiis, numquam cupiditate, enim expedita
            eveniet dolorum, aliquid nesciunt sapiente illo voluptatum!
            Dolores fuga mollitia atque, placeat minima quibusdam accusantium!
            Veniam, non distinctio dolorem rerum laboriosam deleniti.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Services