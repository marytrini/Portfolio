'use client'
import React, {useState,useEffect} from 'react'
import { SectionSubtitle } from './SectionSubtitle'
import ProjectsItem from './ProjectsItem'
import projects from '../data/projects'

const Projects = () => {

  const [filter, setFilter]=useState("Web Design");
  const [data, setData]=useState();

  useEffect(()=>{
    if(filter==="Web Design"){
      const filteredData = projects.filter((item)=>item.category===filter)
      setData(filteredData)
    }
    if(filter==="Mobile App"){
      const filteredData= projects.filter((item)=>item.category===filter);
      setData(filteredData);
    }
  },[filter]);

  return (
  <section id="projects">
    <div>  {/*__container_div__*/}
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>  {/*__row_div__*/}
    <div className="lg:col-span-1">  {/*__col_div__*/}
        <SectionSubtitle subtitle='My Projects'/>
        <h4 className='mt-4 ml-8'>Some of my projects</h4>
    </div>
    <div className="lg:col-span-1">  {/*__col_div__*/}
        <div className='text-end'>
        <button className={`${filter==="Web Design"? "bg-purple-800":"bg-dark-dark_bg"} text-dark-text rounded-lg p-1.5`} onClick={()=>setFilter("Web Design")}>Web Design</button>
        <button className={`${filter==="Mobile App"?"bg-teal-400":"bg-dark-dark_bg"} text-dark-text rounded-lg p-1.5`} onClick={()=>setFilter("Mobile App")}>Mobile App</button>
        </div>
    </div>
        {
          projects.map((item)=>(
            <div key={item.id}>
              <ProjectsItem item={item}/>
            </div>
          ))
        }
    </div>
    </div>
  </section>)
}

export default Projects