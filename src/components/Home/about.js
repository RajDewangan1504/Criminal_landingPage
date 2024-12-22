import React from "react";

const ProgramCard = () => {
    return (
        <div className=" min-h-screen py-10 px-6 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20">
            {/* Left Section */}
            <div className="w-full lg:w-[50%] flex flex-col gap-8">
                <div className="flex-1 p-4 lg:p-6 rounded-lg">
                    <h1 className="text-2xl lg:text-4xl  border-b-2 border-gray-400 pb-4 mb-6">
                        About the Program
                    </h1>
                    <p className="text-gray-700 text-justify leading-relaxed text-sm lg:text-base">
                        The Chemical Engineering course is designed to provide students with
                        a comprehensive understanding of the principles of chemistry,
                        physics, and mathematics, applied to solve problems in the
                        production of chemicals, materials, and energy. The program includes
                        subjects like thermodynamics, fluid mechanics, reaction engineering,
                        process control, and material science, offering both theoretical
                        knowledge and practical skills. Students gain hands-on experience
                        through laboratory work, project assignments, and industry
                        internships. The course prepares graduates for diverse roles in
                        industries such as pharmaceuticals, energy, food processing, and
                        environmental management, equipping them with the expertise to
                        innovate and optimize processes for sustainable development.
                    </p>
                </div>

                {/* Courses Section */}
                <div className="p-4  lg:p-10 flex-1 rounded-lg border-2 border-gray-300 shadow-md mx-6">
                    <h2 className="text-2xl lg:text-4xl font-normal border-b-2 border-gray-400 pb-4 mb-6">
                        Courses
                    </h2>
                    <div className="space-y-4 lg:space-y-6">
                        {["Technical Skills", "Functional Skills", "Behavioral Skills"].map(
                            (label, index) => (
                                <div key={index}>
                                    <select
                                        id={`${label.toLowerCase().replace(" ", "-")}`}
                                        className="w-full px-4 py-2 border rounded-lg text-sm lg:text-base"
                                    >
                                        <option>Technical Skills</option>
                                    </select>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-[30%] flex justify-center items-center">
                <div className="w-full bg-white p-6 lg:p-10 rounded-4xl shadow-2xl flex flex-col justify-center items-center">
                    <img
                        src="/assets/image 284.png"
                        alt="Lab Work"
                        className="rounded-lg mb-4 w-full h-40 sm:h-48 lg:h-64 object-cover shadow-lg shadow-gray-300"
                    />
                    <button className="bg-blue-500 bg-gradient-to-l from-blue-700 to-blue-300 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-600 mb-6">
                        Start Learning
                    </button>
                    <div className="w-full border-t pt-4 space-y-2 lg:space-y-3 text-sm lg:text-lg">
                        {[
                            { label: "Duration", value: "45hrs" },
                            { label: "Language", value: "English" },
                            { label: "Total Credits", value: "30" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between text-gray-700 border-b-2 border-gray-400 pb-2 lg:pb-3"
                            >
                                <span>{item.label}</span>
                                <span className="font-semibold">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
