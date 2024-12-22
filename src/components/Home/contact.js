import React from "react";
import { FiMail } from "react-icons/fi";
import { MdOutlineCall } from "react-icons/md";

const Contact = () => {
    return (
        <section className="p-10 bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex flex-wrap gap-5  justify-between">
            <div>
                <h2 className="text-5xl font-semibold mb-5">Have more Questions?</h2>
                <p className="text-gray-300 mb-5 text-2xl">Reach out to us. Our Support team is to assist you.</p>
                <div className="flex items-center gap-2 mb-5 text-2xl">
                    <FiMail />
                    <p className="text-gray-300">hrd@theunivoc.com</p>
                </div>
                <div className="flex items-center gap-2 mb-5 text-2xl">
                    <MdOutlineCall />
                    <p className="text-gray-300">+91 84483 73884</p>
                </div>
            </div>
            <div className="md:mx-52 py-8 px-6 w-full max-w-80 bg-white text-black rounded-2xl shadow-lg">
                <form className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name*"
                            className="mt-1 block w-full border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address*"
                            className="mt-1 block w-full border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <div className="flex items-center text-gray-500">
                            <select
                                className="block pb-1 border-b-2 border-gray-300 bg-transparent focus:ring-0 focus:border-blue-500 focus:outline-none"
                            >
                                <option value="IN">IN</option>
                                <option value="US">US</option>
                            </select>
                            <input
                                type="tel"
                                placeholder="Enter your mobile number*"
                                className="block w-full border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                placeholder="State*"
                                className="mt-1 block w-full border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="City*"
                                className="mt-1 block w-full border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <select
                            className="mt-1 pb-1 block w-full text-gray-400 border-b-2 border-gray-300 bg-transparent focus:ring-0 focus:border-blue-500 focus:outline-none"
                        >
                            <option>Select School Name</option>
                            <option>School 1</option>
                            <option>School 2</option>
                        </select>
                    </div>
                    <div>
                        <textarea
                            rows="3"
                            placeholder="Your Message*"
                            className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-lg focus:ring-0 focus:border-blue-500 focus:outline-none resize-none"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className=" py-2 px-4 w-full bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Contact Us
                        </button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default Contact;