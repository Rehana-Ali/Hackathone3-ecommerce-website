import Image from "next/image"
import { IoMdPerson } from "react-icons/io";
import { CgGift } from "react-icons/cg";
import { SlTrophy } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";
import SearchBar from "../components/searchbar";


export default function Blog(){
    return(
        <div>
  

<div className="relative w-full mb-6">
            <Image src="/shop.png" alt="Banner" width={1200} height={400} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold">Blog</h1>
              <p className="mt-2 text-lg">Home &gt; Shop</p>
            </div>
          </div>

    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Blog Post 1 */}
            <div>
              <Image
                src="/Rectangle 68.png"
                alt="Blog 1"
                width={817}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <span>Admin</span>
                  <span><IoMdPerson /></span>
                  <span>14 Oct 2022</span>
                  <span><CgGift /> </span>
                  <span>Wood</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mt-2">
                  Going all-in with millennial design
                </h2>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="#"
                  className="text-black hover:underline mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div>
              <Image
                src="/Rectangle 68 (1).png"
                alt="Blog 2"
                width={1200}
                height={600}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <span>Admin</span>
                  <span><IoMdPerson /></span>
                  <span>14 Oct 2022</span>
                  <span><CgGift /></span>
                  <span>Handmade</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mt-2">
                  Exploring new ways of decorating
                </h2>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="#"
                  className="text-black hover:underline mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div>
              <Image
                src="/Rectangle 68 (2).png"
                alt="Blog 3"
                width={1200}
                height={600}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <span>Admin</span>
                  <span><IoMdPerson /></span>
                  <span>14 Oct 2022</span>
                  <span><CgGift /> </span>
                  <span>Wood</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mt-2">
                  Handmade pieces that took time to make
                </h2>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="#"
                  className="text-black hover:underline mt-4 inline-block"
                >
                  Read more
                </a>
                <div className="flex gap-10 justify-center items-center text-center ml-96 ">
                <div className=" w-[40px] h-[40px] bg-[#B88E2F]">1</div>
              <div className="w-[40px] h-[40px] bg-[#F9F1E7]">2</div>
              <div className="w-[40px] h-[40px] bg-[#F9F1E7]">3</div>
              
             <div className="w-[40px] h-[40px] bg-[#F9F1E7]">Next</div>
              </div>
             <div className="flex bg-[#F6F1E7] w-[1250px] h-[100px] mt-20 gap-20 pr-5">
            <span><SlTrophy className="w-[50px] h-[50px] pt-3" /></span>
            <div>
            <h2>High Quality</h2>
            <p>Crafted from top materials</p>
            </div>

            <span><SiTicktick  className="w-[50px] h-[50px] pt-3" /></span>
            <div>
            <h2>Warenty Protection </h2>
            <p>Over 2 years</p>
            </div>

            <span>
            <Image
                src="/shipping.png" 
                alt="Blog 2"
                width={60}
                height={60}
                className="pt-3"
              /></span>
            <div>
            <h2>Free Shipping</h2>
            <p>Order Over 150 $</p>
            </div>
        

                 <span>   
                    <Image
                        src="/customer-support.png" 
                        alt="Blog 3"
                        width={60}
                        height={60}
                        className="pt-3"
                      /></span>
                    <div>
                    <h2>24/7 Support</h2>
                    <p>Dedicated support</p>
                    </div>
        </div>
                  
        

                
              </div>
            </div>
          </div>

          {/* Sidebar */}


           <div className="space-y-8">
           <div>
            <SearchBar/>
           </div>
          
          {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex justify-between items-center">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Crafts
                  </a>
                  <span className="text-sm text-gray-500">2</span>
                </li>
                <li className="flex justify-between items-center">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Design
                  </a>
                  <span className="text-sm text-gray-500">8</span>
                </li>
                <li className="flex justify-between items-center">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Handmade
                  </a>
                  <span className="text-sm text-gray-500">7</span>
                </li>
                <li className="flex justify-between items-center">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Interior
                  </a>
                  <span className="text-sm text-gray-500">1</span>
                </li>
                <li className="flex justify-between items-center">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Wood
                  </a>
                  <span className="text-sm text-gray-500">6</span>
                </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800">Recent Posts</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center space-x-4">
                  <Image
                    src="/Rectangle 69.png"
                    alt="Recent 1"
                    width={60}
                    height={60}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-500">
                      Going all-in with millennial design
                    </a>
                    <p className="text-sm text-gray-500">03 Aug 2022</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <Image
                    src="/Rectangle 69 (1).png"
                    alt="Recent 2"
                    width={60}
                    height={60}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-500">
                      Exploring new ways of decorating
                    </a>
                    <p className="text-sm text-gray-500">03 Aug 2022</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
           
                <Image
                    src="/Rectangle 69 (2).png"
                    alt="Recent 3"
                    width={60}
                    height={60}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-500">
                      Handmade pieces that took time to make
                    </a>
                    <p className="text-sm text-gray-500">03 Aug 2022</p>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <Image
                    src="/Rectangle 69 (3).png"
                    alt="Recent 3"
                    width={60}
                    height={60}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-500">
                      Modern Home in Milan
                    </a>
                    <p className="text-sm text-gray-500">03 Aug 2022</p>
                  </div>
                </li>


                <li className="flex items-center space-x-4">
                  <Image
                    src="/Rectangle 69 (4).png"
                    alt="Recent 3"
                    width={60}
                    height={60}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-500">
                      Colour office redesign
                    </a>
                    <p className="text-sm text-gray-500">03 Aug 2022</p>
                  </div>
                </li>

              </ul>


           </div>
            </div>
          </div>
        </div>
      </div>

      <div>
       <hr className="text-gray-600 px-20 mt-10"/> 
       
    </div>
    </div>
        
    )
}

Blog();




























