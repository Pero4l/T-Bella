import React from 'react'
import Image from 'next/image'
import hair from '@/public/hair.webp'

const HeroPage = () => {
  return (
    <div>
      <Image src={hair} alt='Hair image'/>
    </div>
  )
}

export default HeroPage
