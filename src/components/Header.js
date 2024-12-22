import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Explore");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <header className="bg-blue-100 shadow-md p-4 border-2 sm:rounded-t-xl rounded-none border-blue-400 sm:h-28 h-15">
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex flex-row justify-center items-center gap-10">
                    <div className="flex items-center">
                        <img
                            src="/assets/logo-1.png"
                            alt="Univoc Logo"
                            className="w-32 h-26 object-contain"
                        />
                    </div>
                    <div className="hidden lg:flex gap-8 items-center">
                        <div className="relative">
                            <button
                                className="px-4 py-2 text-blue-800 border bg-white border-blue-800 rounded-full hover:bg-blue-100 focus:outline-none"
                                onClick={toggleDropdown}
                            >
                                {selectedOption}
                            </button>

                            {isOpen && (
                                <ul className="absolute z-10 mt-2 bg-white shadow-lg border rounded-md w-40">
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleOptionClick("Option 1")}
                                    >
                                        Option 1
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleOptionClick("Option 2")}
                                    >
                                        Option 2
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleOptionClick("Option 3")}
                                    >
                                        Option 3
                                    </li>
                                </ul>
                            )}
                        </div>

                        <div className="relative flex items-center w-96">
                            <button className="absolute left-3 text-blue-800">
                                <MdOutlineSearch size={20} />
                            </button>
                            <input
                                type="text"
                                placeholder="What do you want to learn today"
                                className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none"
                            />
                            <button className="absolute right-3 text-blue-800">
                                <FiSend size={20} />
                            </button>
                        </div>


                    </div>
                </div>

                {/* Desktop Navigation */}

                <div className=" hidden lg:flex items-center space-x-4">
                    <button className="px-6 py-2 text-blue-800 border border-blue-800 rounded-full hover:bg-blue-100">
                        Sign in
                    </button>
                    <button className="px-4 py-2 text-white rounded-full bg-gradient-to-r from-blue-700 to-blue-300 hover:from-blue-800 hover:to-blue-400">
                        Register for free
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleDrawer}
                        className="text-blue-800 focus:outline-none"
                    >
                        {isDrawerOpen ? <AiOutlineClose size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isDrawerOpen && (
                <div className="lg:hidden mt-4 bg-blue-100 border-t border-blue-400 p-4 rounded-b-xl shadow-md">
                    <div className="flex flex-col space-y-4">
                        <div className="relative">
                            <button
                                className="px-4 py-2 text-blue-800 border bg-white border-blue-800 rounded-full hover:bg-blue-100 focus:outline-none"
                                onClick={toggleDropdown}
                            >
                                {selectedOption}
                            </button>

                            {isOpen && (
                                <ul className="absolute z-10 mt-2 bg-white shadow-lg border rounded-md w-40">
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleOptionClick("Option 1")}
                                    >
                                        Option 1
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleOptionClick("Option 2")}
                                    >
                                        Option 2
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleOptionClick("Option 3")}
                                    >
                                        Option 3
                                    </li>
                                </ul>
                            )}
                        </div>

                        <input
                            type="text"
                            placeholder="What do you want to learn today"
                            className="w-full pl-3 pr-12 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none"
                        />

                        <div className="flex flex-col space-y-2">
                            <button className="px-6 py-2 text-blue-800 border border-blue-800 rounded-full hover:bg-blue-100">
                                Sign in
                            </button>
                            <button className="px-4 py-2 text-white rounded-full bg-gradient-to-r from-blue-700 to-blue-300 hover:from-blue-800 hover:to-blue-400">
                                Register for free
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
