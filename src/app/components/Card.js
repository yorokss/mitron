import React from 'react';
import Image from 'next/image';
const Card = ({ imageSrc }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0 ">       
          <Image src={ imageSrc } alt="Active" className='h-50 w-full object-cover md:w-48'/> 
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Category</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Title of the card</a>
          <p className="mt-2 text-gray-500">Description of the card goes here. You can add more text to see how it wraps.</p>
          <div className="mt-4">
            <a href="#" className="text-indigo-600 hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
