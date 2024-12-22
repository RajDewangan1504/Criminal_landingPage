import React from "react";
// import Logo from "../assets/logo.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="p-10 bg-indigo-950">
            <div className="flex gap-20 flex-wrap">
                <div className="">
                    <img src="/assets/logo-1.png" className="h-15 w-32" />
                    <p className="text-center text-white">Skilling to Empower</p>
                </div>
                <p className="text-white">
                    "Empowering individuals with the skills to thrive in a changing world.
                    <br />
                    UNIVOC Skilling to Empower bridges talent and opportunity, driving
                    innovation and growth for a brighter future."
                </p>
            </div>
            <div className="p-4 pr-20 grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-4">
                <ul>
                    <h3 className="my-4 text-white text-3xl font-semibold ">About us</h3>
                    <h3 className="my-4 text-white text-3xl font-semibold">Careers </h3>
                    <p className="my-4 text-gray-400 font-semibold ">Adressss</p>
                    <p className="my-4 text-gray-400 font-semibold">hrd@theunivoc.com</p>
                </ul>
                <ul>
                    <h3 className="my-4 text-white text-3xl font-semibold ">Academics</h3>
                    <li className="my-4 text-xl text-gray-400 ">Programme</li>
                </ul>
                <ul>
                    <h3 className="my-4 text-white text-3xl font-semibold">Innovation</h3>
                    <li className="my-4 text-xl text-gray-400 ">Student</li>
                    <li className="my-4 text-xl text-gray-400 ">Faculty</li>
                </ul>
                <ul>
                    <h3 className="my-4 text-white text-3xl font-semibold ">Other Links</h3>
                    <li className="my-4 text-xl text-gray-400 ">Jobs</li>
                    <li className="my-4 text-xl text-gray-400 ">Become a Teacher</li>
                    <li className="my-4 text-xl text-gray-400 ">Events</li>
                </ul>
            </div>
            <div className="mx-2 flex ">
                <FaXTwitter className="m-2 text-white text-4xl" />

                <RiInstagramFill className="m-2 text-white text-4xl" />
                <FaLinkedinIn className="m-2 text-white text-4xl" />
                <FaYoutube className="m-2 text-white text-4xl" />


            </div>
            <div className="mb-10 sm:mb-40 w-full h-0.5 bg-gray-200"></div>
        </footer>
    );
};

export default Footer;