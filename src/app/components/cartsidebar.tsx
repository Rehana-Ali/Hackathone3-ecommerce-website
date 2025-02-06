

"use client";


import { useCart } from "@/app/components/CartContext"; 
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CartContext } from "@/app/components/CartContext";
import { useContext } from "react";
import CheckoutButton from "../components/checkoutButton";



const CartSidebar = () => {

  const { cartItems } :any = useContext(CartContext); // Accessing cart items from context
    
  
    
  const { cart, removeFromCart, updateQuantity } = useCart(); 
  const formattedPrice = (price: number) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
    }).format(price);

  return (
    <div>
      

      <div>
        {/* Cart Items */}

        <div className=" mt-24 fixed top-0 right-0 w-full sm:w-96 bg-white shadow-lg overflow-y-auto transition-transform transform translate-x-0 sm:translate-x-0">       {/* Header */}
       <div className="p-4 sm:p-6 border-b">
           <h2 className="text-xl sm:text-2xl font-bold">Payment Summary</h2>
         </div>
        
          <table className="bg-white border-collapse border border-gray-200 mr-10">
            
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
                  <td className="p-4 ">{formattedPrice(item.price)}</td>
                
                  
                </tr>
              ))}
          

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

          <hr className="my-4" />
          
          <h2 className="text-md font-bold mb-2 ml-5">Payment Options</h2>
          <p className="text-sm text-gray-600 mb-4  ml-5">
            Direct Bank Transfer or Cash On Delivery available.
          </p>

          <button
            onClick={() => console.log("Proceed to checkout")}
            // className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-black font-semibold hover:shadow-md">
            className="w-full mb-32 ml-5 bg-[#B88E2F] text-white py-2 rounded-md shadow-sm hover:bg-[#9F7D27] transition">
            {/* Place Order */}
                  <CheckoutButton cartItems={cartItems} />
            
          </button>

          </tbody>
          </table>
        </div>

        

        </div>

        
      </div>
  
  );
};
export default CartSidebar



