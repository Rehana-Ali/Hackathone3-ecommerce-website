



"use client";


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
// import { client } from "@/lib/sanity.client"; // Import your Sanity client
import { client } from "@/sanity/lib/client";
import { product } from "@/sanity/schemaTypes/product";

export default function Header() {
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
            {/* Logo Section */}
            <div className="flex items-center ">
                <Image src={"/header-logo.png"} width={50} height={30} alt="logo" />
                <h1 className="font-bold text-2xl md:text-5xl">Furniro</h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 font-bold">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/shop">Shop</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            {/* Search Bar */}
            <div className="text-xs mr-5 md:flex items-center gap-4">
                <form onSubmit={handleSearch} className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        // className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                        className="px-1 md:px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"

                    />
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
                        <CiSearch />
                    </button>
                </form>
            </div>

            {/* Icons Section */}
            <div className="hidden md:flex items-center gap-4 md:gap-8 text-2xl">
                <MdOutlinePersonOutline />
                <CiSearch />
                <Link href="/sidebar"><CiHeart /></Link>
                <Link href="/uicart"><MdOutlineShoppingCart /></Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <Sheet>
                <SheetTrigger className="md:hidden">
                    <Menu className="text-3xl" />
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-950 text-white p-6">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>
                            <ul className="mt-6 space-y-6 text-3xl font-semibold text-white">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>

                                <div className="flex items-center ml-24 gap-4 md:gap-8 text-2xl">
                                    <MdOutlinePersonOutline />
                                    <CiSearch />
                                    <Link href="/sidebar"><CiHeart /></Link>
                                    <Link href="/cart"><MdOutlineShoppingCart /></Link>
                                </div>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            {/* Display Search Results */}
            {searchResults.length > 0 && (
                <div className="absolute top-16 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                    {searchResults.map((product :any) => (
                        <Link key={product._id} href={`/product/productDetail/${product._id}`}>
                            <div className="p-4 hover:bg-gray-100 cursor-pointer">
                                <h3 className="font-bold">{product.title}</h3>
                                {/* <p className="text-sm text-gray-600">{product.description}</p> */}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}







