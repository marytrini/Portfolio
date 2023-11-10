'use client'
import React, {useState} from 'react'


const Form = () => {
   const [input, setInput]=useState({
    name:'',
    email:'',
    message:'',
   })
    const [loading, setLoading]=useState(false);

    const handleSubmit= async(event)=>{
        event.preventDefault();
        setLoading(true);

        const data={
            [event.target.name]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.message]: event.target.value,

        }

        const response = await fetch('/api/contact',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data),
        });

        if(response.ok){
            console.log('Message sent successfully');
            setLoading(false);

            event.target.name='';
            event.target.email='';
            event.target.message='';
        }
        if(!response.ok){
            console.log('Error sending Message');
            setLoading(false);
        }
    }
    
    const handleInputChange=(event)=>{
        setInput({
            ...input,
            [event.target.name]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.message]: event.target.value,
        })
    }
  return (
    <div className='w-1/3 bg-dark-features items-center justify-evenly p-8'>
        <form onSubmit={handleSubmit} >
            <div className='object-fit'>
            <label className="text-teal-500">Name: </label>
            <input className="w-4/5 h-8 bg-purple-800 text-dark-text mb-5 border-none outline-none rounded-md py-5 px-4" type="text" minLength={3} maxLength={100} required placeholder='Your Name' value={input.name} autoComplete='off' name='name' onChange={handleInputChange}/>
            </div>

            <div >
            <label className="text-teal-500">Email: </label>
            <input className="w-4/5 h-8 bg-purple-800 text-dark-text mb-5 border-none outline-none rounded-md py-5 px-4" type="email" minLength={5} maxLength={150} required placeholder='Email address' value={input.email} autoComplete='off' name='email' onChange={handleInputChange}/>
            </div>

            <div className='p-2 ml-12'>
                <label className="text-teal-500"></label>
                <textarea className="w-11/12 bg-purple-800 text-dark-text mb-5 border-none outline-none rounded-md py-5 px-4" name="message" cols="30" rows={10} required minLength={10} maxLength={500} placeholder='Leave your Message'></textarea>
            </div>

           <div className='bg-transparent'>
           <button className='rounded-lg bg-slate-800 hover:bg-purple-950 border-solid border-teal-400 border-2 p-2 font-semibold text-dark-text hover:text-teal-500 ml-14' type='submit' disabled={loading}>Send</button>
           </div>
        </form>
    </div>
  )
}

export default Form