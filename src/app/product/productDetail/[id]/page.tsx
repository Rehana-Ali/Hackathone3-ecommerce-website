

"use client"; // Ensure this runs on the client side

import { FaLinkedin } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "@/app/components/CartContext";
import CartSidebar from "@/app/components/cartsidebar";

interface ProductPageProps {
  params: { id: string };
}

// Fetch product data
async function getProduct(id: string) {
  return client.fetch(
    groq`*[_type == "product" && _id == $id][0]{
      _id,
      title,
      description,
      productImage {
        asset -> {
          _id,
          url
        }
      },
      price,
      tags,
      discountPercentage,
      isNew
    }`,
    { id }
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const { addToCart } = useContext(CartContext) ?? { addToCart: () => {} }; // Ensure no errors if context is undefined
  const { id } = params;

  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  // Fetch product data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  // Handle loading state
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
    );
  }

  // Handle product not found
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  // Add to cart function
  const handleAddToCart = () => {
    addToCart({
      ...product,
      id: product._id, // Ensure unique ID
      quantity: 1,
    });


 
    // Show notification
    setShowNotification(true);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          Product has been added to cart
        </div>
      )}

      {/* Image Section */}
      <div className="flex flex-col gap-4">
        <div className="aspect-square border rounded-lg overflow-hidden shadow-md">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title || "Product Image"}
              height={500}
              width={500}
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden aspect-square cursor-pointer shadow-sm"
            >
              <Image
                src={urlFor(product.productImage).url()}
                alt={`Thumbnail ${index + 1}`}
                height={100}
                width={100}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">{product.title}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>&#9733;</span>
            ))}
          </div>
          <p className="text-sm text-gray-500">5 Customer Reviews</p>
        </div>

        {/* Price */}
        <p className="text-3xl font-semibold text-gray-900">${product.price}</p>

        {/* Description */}
        <p className="text-gray-700">{product.description}</p>

        {/* Size Selector */}
        <div className="flex items-center gap-4 flex-wrap">
          <p className="font-semibold">Size:</p>
          <div className="flex gap-2 flex-wrap">
            {["XS", "L", "XL"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border rounded-lg hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div className="flex items-center gap-4 flex-wrap">
          <p className="font-semibold">Color:</p>
          <div className="flex gap-2 flex-wrap">
            {["bg-blue-500", "bg-black", "bg-yellow-500"].map(
              (colorClass, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full border ${colorClass}`}
                ></button>
              )
            )}
          </div>
        </div>

        {/* Add to Cart and Quantity */}
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-3 border gap-5 rounded-lg hover:bg-pink-500">
            - 1 +
          </button>
          <button onClick={handleAddToCart} className="px-6 py-3 border rounded-lg bg-pink-500 text-white hover:bg-pink-600">
            Add To Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="flex mt-6 border-t pt-4 gap-5">
          <ul className="text-gray-400">
            <li>Sku</li>
            <li className="mt-2">Category</li>
            <li className="mt-2">Tags</li>
            <li className="mt-2">Share</li>
          </ul>

          <ul className="text-gray-400">
            <li>:</li>
            <li className="mt-2">:</li>
            <li className="mt-2">:</li>
            <li className="mt-2">:</li>
          </ul>

          <ul>
            <li className="text-gray-400">55001</li>
            <li className="mt-2 text-gray-400">Sofa</li>
            <li className="mt-2 text-gray-400">{product.tags.join(", ")}</li>
            <li className="mt-3 flex gap-5 text-black">
              <FaFacebook />
              <FaLinkedin />
              <AiFillTwitterCircle />
            </li>
          </ul>
        </div>
      </div>
      

 </div>

  );
}
