'use client'
import React from 'react'
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Navbar = () => {

  const [isClick, setIsClick] = useState(false)



  return (
    <div className='sticky top-0 z-10 w-full bg-white'>
      <nav className='flex justify-between items-center lg:p-7 p-5 lg:px-32'>

        
        {/*  */}

            <div>
                <h1 className='text-pink-500 text-2xl font-bold'>T-Bella</h1>
            </div>
            {/*  */}

            <div>
              <ul className='hidden lg:flex gap-10'>
                <li className='cursor-pointer hover:text-pink-600'>Home</li>
                <li className='cursor-pointer hover:text-pink-600'>About</li>
                <li className='cursor-pointer hover:text-pink-600'>Shop</li>
                <li className='cursor-pointer hover:text-pink-600'>Latest products</li>
              </ul>
            </div>
            {/*  */}

            <div className='flex items-center gap-2'>

            <div className='hidden lg:flex'>
              <input type="text" placeholder='Enter keyword to search' className='bg-gray-300 p-2 px-7 rounded-3xl outline-none'/>
              <IoIosSearch className='relative right-6 top-3'/>
            </div>

              <div className='flex gap-3 text-pink-700 text-3xl'>
                <div className="relative flex items-center">
                <IoIosHeartEmpty className="text-3xl cursor-pointer hover:text-red-500 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1 py-0.5 shadow-lg">
                  1
                </span>
                </div>

                      <div className="relative flex items-center">
                <IoBagOutline className="text-3xl cursor-pointer hover:text-red-500 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1 py-0.5 shadow-lg">
                  1
                </span>
                </div>


              
            </div>
          

          
            </div>
      </nav>
      <hr className='text-gray-400'/>
      {/*  */}

      <div className='flex lg:hidden px-5 p- gap-3 items-center'>

      <div onClick={()=> setIsClick(!isClick)} className='lg:hidden flex text-2xl '>
          {isClick ? <MdClose/> : <CiMenuBurger/>}
          
        </div>
        <div className='flex items-center'>
          <div className='bg-gray-400 h-14 w-[2px]'></div>
        <input type="text" placeholder='Search' className='py-2 px-1 w-[280px] md:w-[680px] outline-none' />
        </div>

        <IoIosSearch className='text-2xl'/>
      </div>

     {/*  */}

        <div className={isClick ? 'bg-pink-100 py-7 text-center' : 'hidden'}>
          <ul className={isClick ? 'lg:hidden flex flex-col gap-5 ' : 'hidden'}>
                <li className='cursor-pointer hover:text-black text-pink-600'>Home</li>
                <li className='cursor-pointer hover:text-pink-600'>About</li>
                <li className='cursor-pointer hover:text-pink-600'>Shop</li>
                <li className='cursor-pointer hover:text-pink-600'>Latest products</li>
              </ul>

          <div className={isClick ? 'pt-10' : 'hidden'}>
            <p>Follow us on our </p>
          </div>

        </div>

    </div>
  )
}

export default Navbar
