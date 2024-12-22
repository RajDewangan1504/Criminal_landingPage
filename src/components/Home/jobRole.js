import React from "react";

const JobRole = ({ jobRoles, courses }) => {
    return (
        <div className="w-full flex flex-col lg:flex-row">
            {/* Left Section */}
            <div className="w-full lg:w-[60%] p-10 lg:p-20">
                <h1 className="text-3xl lg:text-5xl border-b-2 border-gray-400 pb-5">Job Roles</h1>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-6 space-y-6 lg:space-y-0 lg:h-[60%]">
                    {jobRoles.map((roles, index) => (
                        <ul key={index} className="list-disc text-lg">
                            {roles.map((role, idx) => (
                                <li key={idx}>{role}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-[40%] p-10 lg:p-20">
                <h1 className="text-3xl lg:text-5xl border-b-2 border-gray-400 pb-5">Related Courses</h1>
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row items-start lg:items-center border-b-2 border-gray-400 py-4 space-y-4 lg:space-y-0"
                    >
                        <div>
                            <img
                                src={course.image}
                                alt={course.name}
                                className="h-20 w-20 lg:h-28 lg:w-28"
                            />
                        </div>
                        <div className="flex flex-col lg:ml-4">
                            <p className="text-xl lg:text-2xl">{course.name}</p>
                            <div className="flex items-center mt-2">
                                {/* Star Ratings */}
                                <div className="flex">
                                    {[...Array(Math.floor(course.rating))].map((_, i) => (
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
                                    {course.rating % 1 !== 0 && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 text-yellow-400"
                                        >
                                            <defs>
                                                <linearGradient
                                                    id={`half-star-${index}`}
                                                    x1="0"
                                                    x2="1"
                                                    y1="0"
                                                    y2="0"
                                                >
                                                    <stop
                                                        offset="50%"
                                                        stopColor="#F59E0B"
                                                    />
                                                    <stop
                                                        offset="50%"
                                                        stopColor="#E5E7EB"
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                fill={`url(#half-star-${index})`}
                                                d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.416 8.334L12 18.567l-7.416 4.437L6 15.27 0 9.423l8.332-1.268z"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobRole;
