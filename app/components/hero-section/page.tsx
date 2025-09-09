import React from 'react'
import Image from 'next/image'
import hair from '@/public/hair.webp'

const HeroPage = () => {
  return (
    <div className='flex flex-col lg:flex-row-reverse lg:items-center lg:px-32 lg:mt-10'>
      <Image src={hair} alt='Hair image'/>

      <div className=''>
        <div className='p-5 '>
        <h1 className='text-2xl lg:text-5xl font-medium'>UNLEASH YOUR <span className='text-pink-600'>BEAUTY</span> WITH PREMIUM HAIR</h1>
        <p className=' mt-2 font-medium'>Quality You Deserve. Style You Love. Prices You'll Enjoy</p>
      </div>

      <div className='text-center flex gap-5 justify-center lg:justify-start px-5 lg:px-5 mt-3'>
        <button className='border-1 py-3 w-full text-pink-600 font-medium lg:w-fit lg:px-7 border-pink-600 hover:bg-pink-600 hover:text-white rounded-xl'>Book Section</button>
        <button className='bg-pink-600 text-white py-3 w-full lg:w-fit lg:px-12 rounded-xl font-medium hover:bg-pink-300 hover:text-pink-600'>Shop Now</button>
      </div>
      </div>

    </div>
  )
}

export default HeroPage
