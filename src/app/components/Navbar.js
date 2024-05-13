import React from 'react';
import Image from 'next/image';
import shoppingBagImage from '../../images/shopping-bag.png'; // Adjust the path based on your project structure
import user from '../../images/user.png';
const Navbar = () => {
  return (
    <div className='bg-yellow-200 h-15 w-screen flex justify-center items-center'>
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
        <Image src={user} alt = "user" width={30} height={30} className='mr-4'></Image>
        <Image src={shoppingBagImage} alt="Shopping Bag" width={30} height={30} />
      </div>
    </div>
  );
};

export default Navbar;
