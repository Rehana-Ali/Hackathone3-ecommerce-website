
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

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]); // Use Product type for state
  const { addToCart } = useContext(CartContext) ?? { addToCart: () => {} }; // Fallback to prevent undefined error

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await client.fetch(allproducts);
      const displayedProducts = productsData.slice(21, 29);
      setProducts(displayedProducts);
    };

    fetchProducts();
  }, []); 


  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.title} added to cart!`);
  };
  

  return (
    <div>
     
      <div>
        <h1 className="text-5xl font-bold mb-4 text-center mt-16">Our Products</h1>
        <div className="grid gap-6"

        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {products.map((product:any) => (
            <div key={product._id} className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
              <Link href={`/product/productDetail/${product._id}`}>
                

                <Image
                  src={urlFor(product.productImage).width(300).height(300).url()}
                  alt={product.title || "Product Image"}
                  width={300}
                  height={300}
                  className="rounded-lg  w-full h-auto mx-auto"
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