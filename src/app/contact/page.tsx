import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import Image from 'next/image'

export default function Contact () {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
     
 <div className="relative w-full mb-6">
                    <Image src="/shop.png" alt="Banner" width={1200} height={400} className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black bg-black bg-opacity-50">
                      <h1 className="text-4xl font-bold">Contact</h1>
                      <p className="mt-2 text-lg">Home &gt; Shop</p>
                    </div>
                  </div>



      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Get In Touch With Us
        </h2>
        <p className="mt-4 text-center text-gray-500">
          For more information about our product & services, please feel free to drop us<br/> an email. Our staff is always here to help you out. Do not hesitate!
        </p>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-600 ml-20 mr-24">
            <div className="flex items-start ">
              <span className="material-icons text-black"><IoLocationSharp /></span>
              <div className="ml-4">
                <h3 className="font-semibold">Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="material-icons text-black"><IoIosCall /></span>
              <div className="ml-4">
                <h3 className="font-semibold">Phone</h3>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="material-icons text-black"><FaClock /></span>
              <div className="ml-4">
                <h3 className="font-semibold">Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm p-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm p-3"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject (optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm p-3"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I'd like to ask about"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm p-3"
                  rows={4}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
       <hr className="text-gray-600 px-20 mt-10"/> 
       
    </div>

    </div>
  );
};

Contact();