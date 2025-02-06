import React from 'react'
import Image from 'next/image'

export default function Furniture (){
  return (
    <div className='mt-12 text-center'>
      <div>
        <p className='text-1xl'>Share your setup with</p>
        <h1 className='font-bold text-4xl '>#FuniroFurniture</h1>
      </div>
   <div>
              <Image
                src="/Images.png" 
                alt="furniture image"
                width={1440}
                height={500}
                />
      </div>
       <div>
       <hr className="text-gray-600 px-20 mt-10"/> 
       
    </div>

      </div>
)}
Furniture();