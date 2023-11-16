'use client'
import { useTheme } from 'next-themes';
import React, {useState, useEffect} from 'react'
import {FaMoon, FaSun} from 'react-icons/fa'

const DarkModeButton = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted){
        return null
    }

  return (
    <button className='absolute right-4 bottom-4' onClick={e => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
        {theme === 'dark' ? <FaMoon/> : <FaSun/>}
    </button>
  )
}

export default DarkModeButton