import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { Search } from './Search';


export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-zinc-700 border-zinc-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to="/" >
          <p className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-1 px-2 rounded'>
            Findly
          </p>
         
        </Link>
        <button type='button' onClick={()=> setDarkTheme(!darkTheme)} className='text-xl px-2 py-1'>
          {darkTheme ? <Sun/> : <Moon />}
        </button>
      </div>
      <Search/>
    </div>
  )
}

