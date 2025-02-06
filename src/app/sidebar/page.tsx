import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import CartSidebar from "../components/cartsidebar";



export default function Sidebar () {
    return(
    <div className="w-full h-full bg-gray-600 bg-opacity-10 shadow-[0_0_15px_15px_rgba(0,0,0,0.5)] z-50 pointer-events-none">
         
{/* //     <div className="w-full h-full bg-gray-600 bg-opacity-10 shadow-[0_0_15px_15px_rgba(0,0,0,0.5)] z-50 pointer-events-none"> */}
  
   <div className="flex flex-wrap gap-10 mt-5   bg-[#F9F1E7] px-4 sm:px-10 py-3 w-[1540]  p-5">
{/* <div className="flex flex-wrap gap-3 mt-5 bg-[#F9F1E7] px-4 sm:px-10 py-3"> */}
      
     <h1 className="ml-20">Home</h1>
   <IoIosArrowForward /> 
   <h1>Shop</h1>
   <IoIosArrowForward /> 
 <h1>|</h1>
 <h1>Asgaard Sofa</h1>
  
  </div>
  <div className="flex ml-">
  <div className="mt-9 ml-20 ">
     <Image
     src={"/Group 94.png"}
      width={150} 
      height={200} 
      alt="sofa image" className="mt-10"/>

<Image
     src={"/Group 98.png"}
      width={78} 
      height={80} 
      alt="sofa image" className="mt-10"/>

<Image
     src={"/Group 97.png"}
      width={78} 
      height={80} 
      alt="sofa image" className="mt-10"/>

<Image
     src={"/Group 96.png"}
      width={78} 
      height={80} 
      alt="sofa image" className="mt-10"/>
 </div>
 <div className="mt-8 rounded-10 ml-10">

 <Image
     src={"/Group 146.png"}
      width={1123} 
      height={1200} 
      alt="sofa image"/>

 </div>
 <div className="ml-24">
    <h1 className=" text-4xl mt-6">Asgaard sofa</h1>
    <p className="font-bold text-3xl mt-5 text-gray-400">Rs. 250,000.00</p>

    <div className="flex gap-5 mt-5">
 
 <Image
     src={"/Group 88 (1).png"}
      width={124} 
      height={20} 
      alt="star image"/>

      <h1>|</h1>

      <h1>5 Customer Review</h1>

 </div>
 <div className="mt-5">
    <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
</p>
<h1 className="text-gray-400 mt-5">Size</h1>
<div className="flex gap-8 mt-5 ">
    <div className="w-[30px] h-[30px] bg-[#B88E2F] ">L</div>
    <div className="w-[30px] h-[30px] bg-[#F9F1E7]">XL</div>
    <div className="w-[30px] h-[30px] bg-[#F9F1E7]">XS</div>
</div>
<div className="mt-5 text-gray-400">
        <h1>Color</h1>
        <div className="flex gap-5 mt-5">
        <div className="rounded-full w-[30px] h[30px] bg-[#816DFA]">
            <h1>.</h1>
        </div>
        <div className="rounded-full w-[30px] h[30px] bg-[#000000]">
            <h1>.</h1>
        </div>
        <div className="rounded-full w-[30px] h[30px] bg-[#B88E2F]">
            <h1>.</h1>
        </div>
        </div>

        <div className="flex gap-5 ">
        <div className="border border-gray-400 rounded-md p-2 px-8 mt-10 shadow-sm hover:shadow-md transition-shadow duration-300 text-black py-3">
    <h1>-&nbsp;&nbsp;1&nbsp;&nbsp;+</h1>
            </div>
            <div className="border border-black rounded-md p-2 px-8 mt-10 shadow-sm hover:shadow-md transition-shadow duration-300 text-black">
    <h1>Add To Cart</h1>
            </div>
            <div className="border border-black rounded-md p-2 px-8 mt-10 shadow-sm hover:shadow-md transition-shadow duration-300 text-black">
    <h1>+ Compare</h1>


            </div>
            
        </div>
        <div className="mt-8">
    <hr className="text-black px-10"></hr>
        </div>
    </div>
    <div className="text-gray-400 mt-10">
        <h1 className="mt-5">SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SSOO1</h1>
        <h1 className="mt-5">Category&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sofas</h1>
        <h1 className="mt-5">Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sofa, Chair, Home, Shop</h1>
        
         <div className="flex gap-10">
            <h1 className="mt-5 ">Share</h1>
         <h1 className="mt-5">:</h1>
         <FaFacebook className="mt-6 text-black w-[20px] h-[20px]"/>    
         <FaLinkedin className="mt-6 text-black  w-[20px] h-[20px]"/>
         <AiFillTwitterCircle className="mt-6 text-black  w-[20px] h-[20px]"/>

         </div>
         
    </div>
    </div>
    
 </div>
 <div>
 
</div>
   </div>
   <div className="mt-10">
        <hr className="text-gray-600 px-20"/>
    </div>

    <div className="flex gap-8 justify-center items-center mt-10">
        <h1>Description</h1>
        <h1 className="text-gray-400">Additional Information</h1>
        <h1 className="text-gray-400">Reviews [5]</h1></div>
        <div className=" mt-10 ml-60 text-gray-400"><p>Embodying the raw, wayward spirit of rock & roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br/>sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p className="mt-10">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest<br/> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange<br/> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls<br/> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p></div>

        <div className="flex gap-5 mt-8 justify-around ml-9 mr-9">
        <Image
     src={"/Group 107.png"}
      width={605} 
      height={348} 
      alt="sofa image"/>

<Image
     src={"/Group 106.png"}
      width={605} 
      height={348} 
      alt="sofa image"/>
        </div>
        <div>
            <hr className="text-gray-400 mt-16" />
        </div>

        <div className="justify-items-center mt-10">
            <h1 className="font-bold text-4xl ">Related Products</h1>
            <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  px-5 mt-16">
        {/* Product Images */}
        <Image
          src="/Featured Products1.png"
          width={381}
          height={480}
          alt="img1"
          className="w-full h-auto mx-auto "
        />
        <Image
          src="/Featured Products (12).png"
          width={381}
          height={480}
          alt="img2"
          className="w-full h-auto mx-auto"
        />
        <Image
          src="/Featured Products (3).png"
          width={381}
          height={480}
          alt="img3"
          className="w-full h-auto mx-auto"
        />
        <Image
          src="/Featured Products (4).png"
          width={381}
          height={480}
          alt="img4"
          className="w-full h-auto mx-auto"
        />

            </div>
        </div>
        </div>
        <div className="border border-[#B88E2F]  p-2 w-[10%] ml-96 justify-center items-center mt-10 ">
    <span className="pl-3 text-[#B88E2F]  ">Show More</span>
            </div>

            <div>
            <hr className="text-gray-400  mt-16" />
        </div>
    {/* <CartSidebar/> */}
   </div>
    )
}
Sidebar();

