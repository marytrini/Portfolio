"use client"
import React, { useState } from 'react'

const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
};

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(INITIAL_STATE);
  const [submissionStatus, setSubmissionStatus] = useState('');

    const handleSubmit = async (event) => {
    event.preventDefault();

    if (!input.name || !input.email || !input.message) {
      return alert('Please complete the form before submitting');
    }

    setLoading(true);

    try {
      const res = await fetch('https://maria.back.rammerbot/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });

      if (res.ok) {
        setSubmissionStatus('success');
        setInput(INITIAL_STATE);
      } else {
        setSubmissionStatus('error');
        console.error({error:error.message});
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error({error:error.message});
      alert("There was an error sending the message")
    } finally {
      setLoading(false);
    }
  };
    const handleInputChange = (event) => {
      setInput({
        ...input,
        [event.target.name]: event.target.value,
      })
      
    }
    
  return (
    <div className='2xl:w-fit dark:bg-dark-features bg-light-features items-center justify-evenly p-8 rounded-xl shadow-md shadow-slate-800 dark:shadow-sm dark:shadow-slate-400'>
        <form onSubmit={handleSubmit} >
            <div className='object-fit'>
            <label htmlFor='name' className="text-dark-title">Name: 
            <input className="sm:w-2/3 2xl:w-4/5 h-8 dark:bg-slate-600 bg-light-secondary_feat dark:text-dark-text text-light-title mb-5 border-none outline-none rounded-md py-5 px-4 ml-[10px]" type="text" minLength={3} maxLength={100} required placeholder='Your Name' autoComplete='off' id='name' name='name' value={input.name} onChange={handleInputChange}/>
            </label>
            </div>

            <div >
            <label htmlFor='email' className="text-dark-title">Email: 
            <input className="sm:w-2/3 2xl:w-4/5 h-8 dark:bg-slate-600 bg-light-secondary_feat dark:text-dark-text text-light-title mb-5 border-none outline-none rounded-md py-5 px-4 ml-[10px]" type="email" minLength={5} maxLength={150} required placeholder='Email address' autoComplete='off' id='email' name='email' value={input.email} onChange={handleInputChange}/>
            </label>
            
            </div>

            <div className='p-2 ml-12'>
                <label htmlFor='message' className="text-teal-500">
                <textarea className="sm:w-full 2xl:w-11/12 dark:bg-slate-600 bg-light-secondary_feat dark:text-dark-text text-light-title mb-5 border-none outline-none rounded-md py-5 px-4 ml-2" name="message" cols="30" rows={10} required minLength={10} maxLength={500} placeholder='Leave your Message' id='message' value={input.message} onChange={handleInputChange}></textarea>
                </label>
                
            </div>

           <div className='bg-transparent'>
           <button className='rounded-lg dark:bg-slate-900 bg-light-secondary_feat  dark:hover:bg-purple-950 hover:bg-light-secondary_feat border-solid border-dark-title border-2 p-2 font-semibold dark:text-dark-text text-light-title dark:hover:text-teal-500 hover:text-purple-950 ml-14' type='submit' disabled={loading}>Send</button>
           </div>
        </form>
        {submissionStatus === 'success' && (
        <p className='text-green-500'>Form submitted successfully!</p>
      )}
      {submissionStatus === 'error' && (
        <p className='text-red-500'>There was an error submitting the form. Please try again.</p>
      )}
    </div>
  )
}

export default Form