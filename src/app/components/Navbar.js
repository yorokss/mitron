import React from 'react';
import Image from 'next/image';
import shoppingBagImage from '../../images/shopping-bag.png'; // Adjust the path based on your project structure
import { RiHandbagFill } from "@remixicon/react";

const Navbar = () => {
  return (
    <div>
      <div className='bg-yellow-200 h-15 w-screen flex justify-center items-center border-2 outline-slate-50'>
        <div className='flex items-center'>
          <h1 className='mr-40'>mitron</h1>
          <h3 className='text-gray-500'>the show wardrobe</h3>
          <input
            type='text'
            placeholder='Search...'
            className='border border-gray-300 rounded-md px-2 py-1 mx-20'
          />
        </div>
        <div className='ml-60 flex items-center'>
          <div className=''> <RiHandbagFill/></div>
        </div>
      </div>
      
      <div className="border-b border-gray-300 w-screen"></div>
    </div>
  );
};

export default Navbar;
