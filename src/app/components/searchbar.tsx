"use client";


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

import { client } from "@/sanity/lib/client";
import { product } from "@/sanity/schemaTypes/product";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (e:any) => {
        e.preventDefault();
        if (searchTerm.trim() === "") return;

        const query = `*[_type == "product" && title match $searchTerm]{
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
        }`;

        const results = await client.fetch(query, { searchTerm: `*${searchTerm}*` });
        setSearchResults(results);
    };

    return (
        <nav className="flex items-center justify-between px-4 md:px-10 bg-[#FFFFFF] text-[#000000] py-3">
           
            {/* Search Bar */}
            <div className="text-xs mr-5 md:flex items-center gap-4">
                <form onSubmit={handleSearch} className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                
                        className="px-1 md:px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"

                    />
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
                        <CiSearch />
                    </button>
                </form>
            </div>

          
           

            {/* Display Search Results */}
            {searchResults.length > 0 && (
                <div className="absolute top-16 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                    {searchResults.map((product :any) => (
                        <Link key={product._id} href={`/product/productDetail/${product._id}`}>
                            <div className="p-4 hover:bg-gray-100 cursor-pointer">
                                <h3 className="font-bold">{product.title}</h3>
                                
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

SearchBar





