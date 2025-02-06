import Card from "./components/card";
import Products from "./components/products";
import ShowMore from "./components/showmore";
import Furniture from "./components/furniture";
import Image from 'next/image';
import React from 'react'
import ShippoData from './components/ShippoData'


export default function Home(){
  return(
      <div>
          <div className="bg-[#F5F5F5]">
    <Image
    src="/Mask Group.jpg"
    width={1330}
    height={802}
    alt="hero image"
    className="w-full h-auto max-w-[1440px] max-h-[500px] mx-auto"
  /> 




</div>
          <Card/>
          <Products/>
        
    {/* <div className="text-center">
       <a href="/shop">
          <button className="border border-[#B88E2F]  p-2 w-[10%] ml-32 mt-10 ">
            <span className="pl-3 text-[#B88E2F]  ">Show More</span></button></a>
       </div> */}



<div className="text-center">
  <a href="/shop">
    <button className="border border-[#B88E2F] p-2 px-5 mb-5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto mt-10">
      <span className="pl-3 text-[#B88E2F]">Show More</span>
    </button>
  </a>
</div>

          <ShowMore/>
           <Furniture/>
          
          <div className='bg-pink-50 min-h-64'>
      <ShippoData />
    </div>
        
      </div>
  )
}
Home();
   