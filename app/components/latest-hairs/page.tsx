import React from "react";
import { Dummy } from "@/app/dummy";
import Image from "next/image";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiPlus } from "react-icons/fi";



const LatestHairPage = () => {
  const data = Dummy.slice(0, 4);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-medium">Latest Hairs</h1>

      <div className="grid grid-cols-2 gap-6 mt-4">
        {data.map((hair) => (
          <div key={hair.id} className="border-1 border-gray-200 rounded-md ">

           <div className="-mt-7 p-2">
             <div className="flex justify-between relative top-8 px-2">
                <p className="bg-pink-200 rounded-full p-1 text-sm font-medium">New</p>
                <IoIosHeartEmpty className="bg-gray-200 rounded-full text-2xl p-1"/>
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
            <p className="text-sm text-gray-600">{hair.price}</p>
            <div>
                <p className="text-xs text-gray-600 ">Stock({hair.stock})</p>
                <FiPlus/>
            </div>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestHairPage;
