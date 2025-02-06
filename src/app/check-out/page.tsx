
"use client";
import { useCart } from "@/app/components/CartContext"; 
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image"
import { CartContext } from "@/app/components/CartContext";
import { useContext } from "react";
import CheckoutButton from "../components/checkoutButton";


      const Checkout = () => {

        const { cartItems } :any = useContext(CartContext); 
          
        
  const { cart, removeFromCart, updateQuantity } = useCart(); 
  const formattedPrice = (price: number) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
    }).format(price);

  return (
    <div>
      <div className="relative w-full mb-6">
        <Image src="/shop.png" alt="Banner" width={1200} height={400} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">Checkout</h1>
          <p className="mt-2 text-lg">Home &gt; Shop</p>
        </div>
      </div>


          {/* checkout Form */}
          <div className="flex">
          <div className="w-full lg:max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-center lg:text-left mb-6">
            Billing Details
          </h1>

          <form>
            {/* First Name and Last Name */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name (optional)
              </label>
              <input
                type="text"
                id="company-name"
                name="company-name"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
              />
            </div>

            {/* Country/Region */}
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country/Region
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
              >
                <option value="">Sri Lanka</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>

            {/* Address Fields */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="street-address"
                  name="street-address"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Town/City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="province"
                  className="block text-sm font-medium text-gray-700"
                >
                  Province
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="zip-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip-code"
                  name="zip-code"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Additional Information"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
              />
            </div>
          </form>
        </div>

      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Cart Items */}
        <div className=" bg-pink-100 ">
        <div className="w-full lg:w-[320px]  shadow-md rounded-lg p-6">


            <h2 className="text-xl sm:text-2xl font-bold">Payment Summary</h2> 


            <span className="ml-5">    {formattedPrice(
                cart.reduce((total: any, item: any) => total + item.price * item.quantity, 0)
              )}
            </span>
            <div className="flex justify-between mb-4 ml-5">
            <span className="font-bold">Total</span>
            <span className="font-bold text-gold">
              {formattedPrice(
                cart.reduce((total: any, item: any) => total + item.price * item.quantity, 0)
              )}
            </span>
          </div> 



              </div>
          <table className=" w-full border-collapse border border-gray-200">
           
            <tbody>
              {cart.map((item: any) => (  
                <tr key={item.id}>
                  <td className="p-4 flex items-center gap-4">
                  


                   <Image
                                    src={urlFor(item.productImage).width(300).height(300).url()}
                                    alt={item.title || "Product Image"}
                                    width={80}
                                    height={80}
                                    className="rounded-lg"
                                  />
                  


                    <span>{item.title}</span>
                  </td>
                  <td className="p-4">{formattedPrice(item.price)}</td>
                  <td className="p-4">
                   
                  </td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>


          
        </div>



        <div>
          <hr className="my-4"/>      
           <h2 className="text-5xl font-bold mb-2 ml-5 text-center">Payment Options</h2>        
           <p className="text-sm text-gray-600 mb-4  ml-5 text-center">
            Direct Bank Transfer or Cash On Delivery available.
          </p>

       <CheckoutButton cartItems={cartItems} />
     </div>


      </div>
  
  );
};
export default Checkout
















