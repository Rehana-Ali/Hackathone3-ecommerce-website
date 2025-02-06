export default function Footer() {
    return (
        
        <div className="bg-[#FFFFFF] text-poppins mt-20 px-6 md:px-20 py-10">
            <div className="flex flex-col ml-20 md:flex-row flex-wrap md:justify-between space-y-10 md:space-y-0">
                {/* Logo and Address Section */}
                <div className="flex flex-col space-y-2">
                    <h1 className="text-lg font-bold">Furniro.</h1>
                    <p className="text-[#9F9F9F]">400 Universities Drive Suite 200 Coral</p>
                    <p className="text-[#9F9F9F]">Globles</p>
                    <p className="text-[#9F9F9F]">FL 33134 USA</p>
                </div>

                {/* Links Section */}
                <div className="space-y-4">
                    <h3 className="text-[#9F9F9F] font-semibold">Links</h3>
                    <ul className="space-y-2 text-[#333]">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Help Section */}
                <div className="space-y-4">
                    <h3 className="text-[#9F9F9F] font-semibold">Help</h3>
                    <ul className="space-y-2 text-[#333]">
                        <li>Payment Option</li>
                        <li>Returns</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="space-y-4">
                    <h3 className="text-[#9F9F9F] font-semibold">Newsletter</h3>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        
                           <p className="underline   w-full md:w-auto">Enter Your Email</p>
                        
                        <button className="underline text-black px-4 py-2 font-semibold">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
            <div>
               <hr className="text-gray-600 px-20"/> 
               <p className="mt-3">2023 furino. All rights reverved</p>
            </div>
        </div>
    );
}

Footer();





























