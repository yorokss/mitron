import React from 'react'
import Image from 'next/image';
import homePic1 from '../../images/2160X1080_2.webp'
import Card from './Card';
import RoundedCard from './RoundCard';
import activeImage from '../../images/active.webp';
import bootsImage from '../../images/boots.webp';
import girlCardImage from '../../images/girlCard.webp';
import greenShoeImage from '../../images/greenShoe.webp';
import sneeker from '../../images/sneeker.webp';
const Home = () => {
  return (
    <div>
<div className='flex justify-center items-center mt-10 mb-10 h-screen'><Image src={homePic1} alt="homePic1" /> </div>   

<div className='flex justify-item-between items-center mx-5'> 
<div className='m-4'><Card imageSrc={activeImage}/> </div>
<div className='m-4'><Card imageSrc={bootsImage} /> </div><div className='m-4'><Card imageSrc={greenShoeImage}/> </div><div className='m-4'><Card imageSrc={girlCardImage}/> </div>
</div>
<div className='flex justify-center items-center my-5'>
  <h1 className='text-2xl font-bold mb-5 p-2 rounded-md text-center flex items-center justify-center'>
    ALL CATEGORIES
  </h1>
</div>

<div className=''> <RoundedCard imageSrc={sneeker}/></div>
    </div>

  )
}

export default Home