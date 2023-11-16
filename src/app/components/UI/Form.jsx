"use client"
import React from 'react'
import axios from 'axios';

const Form = () => {
   
    const handleSubmit = async (event) =>{
      event.preventDefault();
        
    }
    console.log('component present');
    
  return (
    <div className='2xl:w-fit bg-dark-features items-center justify-evenly p-8 rounded-xl'>
        <form onSubmit={handleSubmit} >
            <div className='object-fit'>
            <label className="text-dark-title">Name: 
            <input className="sm:w-2/3 2xl:w-4/5 h-8 bg-slate-600 text-dark-text mb-5 border-none outline-none rounded-md py-5 px-4 ml-[10px]" type="text" minLength={3} maxLength={100} required placeholder='Your Name' autoComplete='off' name='name' />
            </label>
            </div>

            <div >
            <label className="text-dark-title">Email: 
            <input className="sm:w-2/3 2xl:w-4/5 h-8 bg-slate-600 text-dark-text mb-5 border-none outline-none rounded-md py-5 px-4 ml-[10px]" type="email" minLength={5} maxLength={150} required placeholder='Email address' autoComplete='off' name='email' />
            </label>
            
            </div>

            <div className='p-2 ml-12'>
                <label className="text-teal-500">
                <textarea className="sm:w-full 2xl:w-11/12 bg-slate-600 text-dark-text mb-5 border-none outline-none rounded-md py-5 px-4 ml-2" name="message" cols="30" rows={10} required minLength={10} maxLength={500} placeholder='Leave your Message' ></textarea>
                </label>
                
            </div>

           <div className='bg-transparent'>
           <button className='rounded-lg bg-slate-900 hover:bg-purple-950 border-solid border-dark-title border-2 p-2 font-semibold text-dark-text hover:text-teal-500 ml-14' type='submit'>Send</button>
           </div>
        </form>
    </div>
  )
}

export default Form