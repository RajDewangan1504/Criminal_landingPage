import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const BenefitsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true, // Enables arrows
        prevArrow: <CustomPrevArrow />, // Custom previous button
        nextArrow: <CustomNextArrow />, // Custom next button
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="h-full py-10 w-full">
            <div className="flex justify-center mb-5">
                <h1 className="text-4xl md:text-6xl font-normal w-full md:w-[50%] border-b-2 py-5 border-gray-400 text-center">
                    Benefits
                </h1>
            </div>
            <div className="relative h-full">
                <Slider {...settings} className="mx-4 md:mx-32">
                    {/* Carousel items */}
                    {[
                        {
                            title: "Placement Facilitation",
                            description:
                                "Career support and placement facilitation will be provided for students who successfully complete the program.",
                        },
                        {
                            title: "Blended Delivery",
                            description:
                                "Chemical engineering courses combine online learning with hands-on in-person sessions, enhancing theoretical understanding and practical skills.",
                        },
                        {
                            title: "Value Additions",
                            description:
                                "The students will be enabled with various initiatives including free micro-learning, webinars, and impactful events.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-gradient-to-tl from-blue-700 to-blue-300 text-white rounded-lg p-6 md:p-10 gap-10 shadow-lg">
                                <img
                                    src="/assets/Frame 2418.png"
                                    className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-4"
                                    alt={item.title}
                                />
                                <h3 className="text-xl md:text-2xl font-normal mb-2 text-center">
                                    {item.title}
                                </h3>
                                <p className="text-sm md:text-base text-center">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

// Custom previous arrow
const CustomPrevArrow = ({ onClick }) => {
    return (
        <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-800 text-white rounded-full p-2 shadow-lg z-10"
            onClick={onClick}
            style={{ left: "-30px" }}
        >
            <GrLinkPrevious size={20} />
        </button>
    );
};

// Custom next arrow
const CustomNextArrow = ({ onClick }) => {
    return (
        <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-800 text-white rounded-full p-2 shadow-lg z-10"
            onClick={onClick}
            style={{ right: "-30px" }}
        >
            <GrLinkNext size={20} />
        </button>
    );
};

export default BenefitsCarousel;
