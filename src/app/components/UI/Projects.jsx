"use client"
import React, {useState,useEffect} from 'react'
import { SectionSubtitle } from './SectionSubtitle'
import ProjectsItem from './ProjectsItem'
import projects from '../data/projects'

const Projects = () => {

  const [filter, setFilter] = useState("Web Design");
  const [data, setData] = useState([]);
  useEffect(()=>{
    const filteredData = projects.filter((item) => item.category === filter);
    setData(filteredData);
    
  },[filter]);
  
  return (
  <section id="projects" className='mb-20'>
    <div>  {/*__container_div__*/}
    <div className='grid grid-cols-1 2xl:grid-cols-2 gap-5 sm:flex flex-wrap'>  {/*__row_div__*/}
    <div className="2xl:col-span-1 sm:text-center">  {/*__col_div__*/}
        <SectionSubtitle subtitle='My Projects'/>
        <h4 className='mt-4 ml-8'>Some of my work</h4>
    </div>
    <div className="2xl:col-span-1">  {/*__col_div__*/}
        <div className='2xl:text-end mr-[15px]'>
        <button className={`${filter==="Web Design"? "dark:bg-dark-features bg-light-secondary_feat border-light-title border-solid border-2 dark:text-dark-text text-light-text":"dark:bg-dark-bg dark:text-dark-text bg-light-bg text-light-text"} text-dark-text rounded-lg p-1.5`} onClick={()=>setFilter("Web Design")}>Web Design</button>
        <button className={`${filter==="Mobile App"? "dark:bg-dark-features bg-light-secondary_feat border-light-title border-solid border-2 dark:text-dark-text text-light-text":"dark:bg-dark-bg dark:text-dark-text bg-light-bg text-light-text"} text-dark-text rounded-lg p-1.5 mr-2`} onClick={()=>setFilter("Mobile App")}>Mobile App</button>
        </div>
    </div>
        {
          data?.map((item)=>(
            <div key={item.id} className='ml-6 mb-5'>
              <ProjectsItem item={item}/>
            </div>
          ))
        }
    </div>
    </div>
  </section>)
}

export default Projects