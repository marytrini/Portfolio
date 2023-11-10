import './globals.css'
import Hero from './components/UI/Hero'
import Services from './components/UI/Services'
import About from './components/UI/About'
import Projects from './components/UI/Projects'
import Contact from './components/UI/Contact'

export default function Home() {
  return (
  <div className='ml-5'>

    <Hero/>

    <Services/>

    <About/>

    <Projects/>

    <Contact/>

  </div>
  )
}
