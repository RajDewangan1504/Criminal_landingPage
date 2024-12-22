import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative bg-frame h-[400px] w-full rounded-b-6xl overflow-hidden  flex flex-row justify-between px-20">
            {/* Background Image */}
         

            {/* Breadcrumb Navigation */}
            <div className="relative z-10   sm:mt-8 mt-0 flex flex-col py-20">
                <div className="relative z-10 max-w-7xl mx-auto sm:px-6 px-0 pt-6">
                    <nav className="text-white text-base sm:text-xl flex flex-wrap items-center font-light border-b border-white pb-2 w-full">
                        <Link href="/" className="hover:underline mr-4 mb-2 sm:mb-0">
                            Home
                        </Link>
                        <Link href="/programs" className="hover:underline mr-4 mb-2 sm:mb-0">
                            Integrated Degree Programs
                        </Link>
                        <span className="font-medium">
                            <Link href="/chemical" className="hover:underline">
                                Chemical
                            </Link>
                        </span>
                    </nav>
                </div>

                {/* Main Content */}

                {/* Text Section */}
                <div className="text-white px-6 py-10">
                    <h1 className="text-4xl font-normal">Chemical</h1>
                    <div className="flex items-center mt-2">
                        {/* Star Ratings */}
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 text-yellow-400"
                                >
                                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.416 8.334L12 18.567l-7.416 4.437L6 15.27 0 9.423l8.332-1.268z" />
                                </svg>
                            ))}
                            {/* Half Star */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-yellow-400"
                            >
                                <defs>
                                    <linearGradient id="half-star" x1="0" x2="1" y1="0" y2="0">
                                        <stop offset="50%" stopColor="#F59E0B" />
                                        <stop offset="50%" stopColor="#E5E7EB" />
                                    </linearGradient>
                                </defs>
                                <path
                                    fill="url(#half-star)"
                                    d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.416 8.334L12 18.567l-7.416 4.437L6 15.27 0 9.423l8.332-1.268z"
                                />
                            </svg>
                        </div>
                        <span className="ml-2 text-white text-lg font-medium">(4.5)</span>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-[30%] mt-5  h-96 ">
                <img
                    src="/assets/image 296.png"
                    alt="Scientist holding test tubes"
                    className=" object-contain"
                />
            </div>

        </div>
    );
};

export default Banner;
