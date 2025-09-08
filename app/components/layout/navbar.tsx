import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center lg:p-10 p-5 lg:px-32'>

        
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
              <IoIosHeartEmpty/>
              <IoBagOutline/>
            </div>
          

          
            </div>
      </nav>
      <hr className='text-gray-400'/>
      {/*  */}

      <div className='flex lg:hidden'>

      <div className='lg:hidden flex text-3xl'>
          <CiMenuBurger/>
          
        </div>
        <div className='flex items-center'>
          <div className='bg-gray-400 h-3 w-1'></div>
        <input type="text" placeholder='Search' />
        </div>
      </div>

    </div>
  )
}

export default Navbar
