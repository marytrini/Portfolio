'use client'
import useThemeSwitcher from './useThemeSwitcher';
import {FaMoon, FaSun} from 'react-icons/fa'
import { useState, useEffect } from 'react';

const DarkModeButton = () => {
  const [mounted,setMounted]   = useState();
  const [mode, setMode] = useThemeSwitcher();
   
  const toggleTheme = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  }

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted){
        return null
    }
console.log(mode);
  return (
    <button className='transition-all duration-100' onClick={toggleTheme}>
        {mounted &&  (mode === 'dark' ? <FaMoon/> : <FaSun/>)}
    </button>
  )
}

export default DarkModeButton