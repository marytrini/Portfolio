'use client'
import React, {useState,useEffect} from 'react'
import validate from '@/app/validation';

const Form = () => {
    const [input, setInput]=useState("");
    const [errors, setErrors]=useState({});

    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    const handleInputChange=(event)=>{
        setInput({
            ...input,
            [event.target.name]:event.target.value,
        })
        setErrors(
            validate({
                ...input,
                [event.target.name]:event.target.value
            })
        )
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name: </label>
            <input type="text" placeholder='Your Name' value={input.name} name='name' onChange={handleInputChange} />
            </div>

            <div>
            <label>Email: </label>
            <input type="email" placeholder='Email' value={input.email} name='email' onChange={handleInputChange} />
            </div>

            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default Form