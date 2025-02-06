

"use client"


import { CartContext } from "../components/CartContext"; // Adjust path as necessary
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { useState, useEffect, useContext } from "react"


// Define the Product type interface
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  tag: string;
  discountPercentage?: number;
  newbadge: string;
  productImage: string;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]); 
  const { addToCart } = useContext(CartContext) ?? { addToCart: () => {} }; 

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await client.fetch(allproducts);
      const displayedProducts = productsData.slice(0, 16);
      setProducts(displayedProducts);
    };

    fetchProducts();
  }, []); 


  

  
  const handleAddToCart = (product: any) => { 
    addToCart({
      ...product,
      id: product._id, // Assign unique ID
      quantity: 1, // ✅ Add a comma here
    });                             
  };
  
  

  return (
    <div>
      <div className="relative w-full mb-6">
        <Image src="/shop.png" alt="Banner" width={1200} height={400} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">Shop</h1>
          <p className="mt-2 text-lg">Home &gt; Shop</p>
        </div>
      </div>

 <div>
        <h1 className="text-5xl font-bold mb-4 text-center ">Products</h1>
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {products.map((product:any) => (
            <div key={product._id} className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
              <Link href={`/product/productDetail/${product._id}`}>
                

                <Image
                  src={urlFor(product.productImage).width(300).height(300).url()}
                  alt={product.title || "Product Image"}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />

              </Link>
              <h2 className="mt-4 text-lg font-medium">{product.title}</h2>
              <p className="mt-2 text-gray-700">Price: ${product.price}</p>
              {product.discountPercentage && <p className="mt-1 text-red-600">Discount: {product.discountPercentage}%</p>}
              <button onClick={() => handleAddToCart(product)} className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );


}