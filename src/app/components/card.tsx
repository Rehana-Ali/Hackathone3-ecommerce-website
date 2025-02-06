import React from 'react'
import Image from 'next/image'

function Card() {
  return (
    <div className="text-center mt-12">
      {/* Heading Section */}
      <div className="justify-items-center">
        <h1 className="font-bold text-2xl md:text-3xl">Browse The Range</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5 md:px-20">
        {/* Dining */}
        <div className="text-center">
          <Image
            src="/dining.png"
            width={381}
            height={480}
            alt="dining"
            className="w-full h-auto mx-auto"
          />
          <h1 className="font-bold text-xl md:text-2xl mt-4">Dining</h1>
        </div>

        {/* Living */}
        <div className="text-center">
          <Image
            src="/Image-living room.png"
            width={381}
            height={480}
            alt="living"
            className="w-full h-auto mx-auto"
          />
          <h1 className="font-bold text-xl md:text-2xl mt-4">Living</h1>
        </div>

        {/* Bedroom */}
        <div className="text-center">
          <Image
            src="/bedroom.png"
            width={381}
            height={480}
            alt="bedroom"
            className="w-full h-auto mx-auto"
          />
          <h1 className="font-bold text-xl md:text-2xl mt-4">Bedroom</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;

















