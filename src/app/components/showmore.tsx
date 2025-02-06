
import Image from "next/image";

export default function ShowMore() {
    return (
        <div className="bg-[#FCF8F3] flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-10 md:py-20">
            {/* Left Side (Text Content) */}
            <div className="text-center md:text-left mb-8 md:mb-0 md:mr-10">
                <h1 className="font-bold text-2xl md:text-4xl">
                    50+ Beautiful rooms <br />
                    inspiration
                </h1>
                <p className="mt-4 text-sm md:text-base max-w-md mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rerum.
                </p>
                <button className="bg-[#B88E2F] font-bold px-6 py-3 mt-6 text-white hover:bg-[#A67C2A] transition-colors">
                    Explore More
                </button>
            </div>

            {/* Right Side (Images) */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                {/* First Image */}
                <div className="w-full md:w-auto">
                    <Image
                        src={"/Image.png"}
                        width={300}
                        height={480}
                        alt="img1"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Second Image */}
                <div className="w-full md:w-auto">
                    <Image
                        src={"/Rectangle 25.png"}
                        width={381}
                        height={480}
                        alt="img2"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

            </div>
        </div>
    );
}














