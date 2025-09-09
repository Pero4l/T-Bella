'use client'
import React, { useState } from "react";
import { Dummy } from "@/app/dummy";
import Image from "next/image";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



const LatestHairPage = () => {

  const [isClick, setIsClick] = useState<{ [key: number]: boolean }>({})
  const [isAdd, setIsAdd] = useState<{ [key: number]: boolean }>({})

  const data = Dummy.slice(0, 4);

  return (
    <div className="p-5 mt-10">
      <h1 className="text-2xl font-medium">Latest Hairs</h1>

      <div className="grid grid-cols-2 gap-6 mt-4">
        {data.map((hair) => (
          <div key={hair.id} className="border-1 border-gray-200 rounded-md ">

           <div className="-mt-7 p-2">
             <div className="flex justify-between relative top-8 px-2">
                <p className="bg-pink-200 rounded-full p-1 text-sm font-medium">New</p>

                <div
                  onClick={() =>
                  setIsClick((prev) => ({
                    ...prev,
                    [hair.id]: !prev[hair.id],
                  }))
                  }
                >
                  {isClick[hair.id] ? (
                  <FaHeart className="bg-gray-200 rounded-full text-2xl p-1 text-pink-700" />
                  ) : (
                  <IoIosHeartEmpty className="bg-gray-200 rounded-full text-2xl p-1" />
                  )}
                </div>
            </div>
            <Image
              src={hair.image}
              alt={hair.name}
              width={200}
              height={200}
              className="object-cover rounded"
               unoptimized
            />
            <h2 className="text-lg font-semibold">{hair.name}</h2>
            <p className="text-sm pt-2">{hair.price}</p>

            <div className="flex justify-between items-center">
                <p className="text-xs text-gray-600 ">Stock({hair.stock})</p>

                <div onClick={() =>
                  setIsAdd((prev) => ({
                    ...prev,
                    [hair.id]: !prev[hair.id],
                  }))
                  }>
                  {isAdd[hair.id] ? <IoMdClose className="border-2 text-pink-900 rounded-full text-2xl"/> : <FiPlus className="border-2 text-pink-900 rounded-full text-2xl"/>}
                </div>
            </div>
           </div>
          </div>
        ))}
      </div>


        <div className="mt-12">
                  <button className='border-1 py-3 w-full text-pink-600 font-medium lg:w-fit lg:px-7 border-pink-600 hover:bg-pink-600 hover:text-white rounded-xl flex text-center justify-center items-center gap-3'>See All <span><FiPlus className="text-2xl "/></span></button>
        </div>


    </div>
  );
};

export default LatestHairPage;
