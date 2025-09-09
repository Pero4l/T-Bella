'use client'

import React from 'react';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { TfiLocationPin } from 'react-icons/tfi'; 
import { FaMinus } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import noImage from "@/public/No_Image_Available.jpg" 
import { ToastContainer, toast } from 'react-toastify';
import { Dummy } from "@/app/dummy";
import Image from 'next/image';



const ProductDetails = () => {
  const { id } = useParams();

 
  const product = Dummy.find(item => String(item.id) === id);

  if (!product) {
    return <div className="text-center text-red-500 mt-10">Product not found</div>;
  }

  const images = [
    product?.image || noImage,
    product?.image1 || noImage,
    product?.image2 || noImage,
    product?.image3 || noImage,
    product?.image4 || noImage,
  ];

  // State to track which image is currently shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for prev/next buttons
  const prevImage = () => {
    setCurrentIndex((currentIndex === 0) ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex === images.length - 1) ? 0 : currentIndex + 1);
  };

  const [count, setCount] = useState(0)

  const countPlus = () => {
    setCount(count + 1)
  }

  const countMinus = () => {
    setCount(count - 1)

    if(count === 0){
     setCount(0)
    }
  }

  
const [addCart, setAddCart] = useState(false)

const addToCart = () => {
  const newCartState = !addCart
  setAddCart(newCartState)

  if (newCartState) {
    toast.success('Added to cart successfully')
  } else {
    toast.error('Removed from cart successfully')
  }
}

  

  return (
    <>
    <div className="w-11/12 mx-auto">
    
      <ToastContainer/>


 <div className="min-h-screen px-4 py-8 font-sans max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold">Product Details</h2>
      <p className="text-gray-600 pt-3">Product view details to see full information.</p>


      <div className="flex flex-col lg:flex-row gap-6 mt-6">
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
  <Image
    src={images[currentIndex]}
    alt={`Product image ${currentIndex + 1}`}
    className="object-cover rounded-md w-full max-h-[500px]"
  />
  {/* Prev Button */}
  <button
    onClick={prevImage}
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded-full hover:bg-opacity-70"
    aria-label="Previous"
  >
    &#8592;
  </button>
  {/* Next Button */}
  <button
    onClick={nextImage}
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded-full hover:bg-opacity-70"
    aria-label="Next"
  >
    &#8594;
  </button>
</div>



        <div className="w-full lg:w-1/2 space-y-3">
          <p className="text-xs text-gray-500 mt-4">Product</p>

          <div className='flex items-center gap-1 mt-2'>
                              <TfiLocationPin className='text-sm' />
                              <p className='text-xs lg:text-sm'>{product.location}</p>
                            </div>
          <div className="flex items-center gap-2 text-sm text-gray-800 bg-green-100 border px-2 py-1 w-fit rounded">
            🚚 Delivery fee
            <span className="bg-gray-900 px-1 py-1 rounded text-xs text-gray-100">₦1,500</span>
          </div>

          


          <h3 className="text-2xl lg:text-2xl font-semibold">{product.name}</h3>
          

          <p className="text-sm text-gray-600">
            {product.info}
          </p>


        

          <p>In Stock: {product.stock}</p>


          <div className="flex flex-wrap items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-1">
                <AiFillStar />
              </span>
            ))}
            <span className="p-1 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
            <span className="p-1 ml-2 border rounded-md font-bold">{product.rating}</span>
          </div>



          <div className="flex flex-wrap items-center gap-5 mb-5">
            <div className="text-sm font-medium">
              Price:
              <span className="text-lg border border-gray-300 p-1 ml-1 rounded">{product.price}</span>
            </div>


            <span className="font-bold text-lg text-gray-400">|</span>
            <div className="flex items-center gap-2">
              <span>Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button onClick={countPlus} className="text-lg p-2 "><HiPlus/></button>
                <span className="px-2">{count}</span>
                <button onClick={countMinus} className="text-lg p-2 "><FaMinus/></button>
              </div>
            </div>
          </div>

          
         

          {/*  */}

          

          <div className="flex flex-col gap-3">
            <button className="py-2 w-full sm:full border border-black rounded-md text-black font-medium">
              Buy Now
            </button>
            <button onClick={addToCart} className={addCart ? "py-3 bg-green-600 text-white rounded-md font-medium w-full sm:w-full" : "py-3 bg-black text-white rounded-md font-medium w-full sm:w-full"}>
              {addCart ? 'Added' : 'Add to cart'}
            </button>
          </div>

          <div className="relative mt-4">
            <select className="w-full border border-green-700 outline-none rounded-md px-4 py-3 text-green-700">
              <option>Select your location</option>
              <option>Lagos</option>
              <option>Plateau</option>
              <option>Abuja</option>
            </select>
          </div>
        </div>
      </div>

      <div className="pt-16">
            
            <h1>Other image of Product</h1>
            <div className='flex gap-3 pt-3'>
  {images.slice(1).map((img, idx) => (
    <Image
      key={idx}
      src={img}
      alt={`Image ${idx + 1}`}
      className={`w-[72px] md:w-[120px] lg:w-24 h-auto rounded cursor-pointer border-2 ${
        currentIndex === idx + 1 ? 'border-black' : 'border-transparent'
      }`}
      onClick={() => setCurrentIndex(idx + 1)}
    />
  ))}
</div>

      </div>

      {/* <div className="mt-4 space-x-3 text-sm text-gray-600 flex flex-wrap">
        <label><input type="radio" name="zip" /> Design</label>
        <label><input type="radio" name="zip" /> Plane</label>
        <label><input type="radio" name="zip" /> Design and Plane</label>
        <label><input type="radio" name="zip" /> None</label>
        <p className="text-xs text-gray-400 mt-2 w-full">Design adds ₦1,000 extra while Plane adds ₦500</p>
      </div> */}

      <div className="mt-4">
        <p className="text-gray-900 text-xl font-bold">Description</p>
        <p className="text-sm text-gray-600 mb-6">
            {product.description}
</p>

      </div>

      {/* <div className="mt-6 max-w-2xl flex flex-col mx-auto px-4">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        <p className="text-gray-500 mb-6 text-sm">Customer's Testimonies</p>

        <div className="mb-10 pb-6">
          <div className="flex items-center gap-3">
            <img src={bag} alt="User" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium">Yusuf</p>
              <p className="text-sm text-gray-500">May 15, 2024</p>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1 flex-wrap">
            <span className="text-sm font-semibold">Rating:</span>
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                <AiFillStar />
              </span>
            ))}
            <span className="p-2 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Size: <span className="font-semibold">16.g</span> | Color:{" "}
            <span className="font-semibold">White</span> | Design Pattern:
            <span className="font-semibold">Classic</span>
          </p>

          <div className="flex flex-wrap gap-3 mt-3">
            <img src={bag} alt="Stylish" className="h-24 w-24 rounded-lg border object-cover" />
            <div className="h-24 w-24 rounded-lg border flex items-center justify-center text-gray-400">+</div>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            This bag is stylish and fits all my essentials. Would definitely recommend it for everyday use.
          </p>
        </div>
      </div> */}

      {/* <div className="mt-10">
        <h2 className="text-xl font-medium">Bags You may like</h2>
        <p className="text-sm text-gray-600">Similar bags from the one selected</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 cursor-pointer">
          {[...Array(8)].map((_, i) => (
            <div key={i}>
              <img src={bag} alt="Bag" className="rounded bg-contain w-full" />
              <div className="flex flex-row justify-between mt-4 text-gray-800">
                <span>Stylish Bag</span>
                <span>₦5,000</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>

      
    </div>
    </>
  );
};

export default ProductDetails;