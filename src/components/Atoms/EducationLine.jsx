import React from 'react'

function EducationLine() {
    return (
        <ol className="relative mb-10 border-s border-(--timeline-line)">
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-(--timeline-dot-bg) rounded-full -inset-s-3 ring-8 ring-(--timeline-ring)">
                    <svg className="w-2.5 h-2.5 text-(--timeline-dot-icon)" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-(--timeline-title)">
                    Bachelor of Science in Software Development · Brigham Young University–Idaho
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-(--timeline-time)">In Progress</time>
                <p className="mb-4 text-base font-normal text-(--timeline-body)">
                    Currently advancing my studies in software development, software engineering principles, and scalable application design.
                </p>
            </li>
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-(--timeline-dot-bg) rounded-full -inset-s-3 ring-8 ring-(--timeline-ring)">
                    <svg className="w-2.5 h-2.5 text-(--timeline-dot-icon)" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-(--timeline-title)">
                    Associate Degree in Web Development · Brigham Young University–Idaho
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-(--timeline-time)">
                    Completed
                </time>
                <p className="mb-4 text-base font-normal text-(--timeline-body)">
                    Completed a focused academic program in modern web development, covering both technical foundations and practical application.
                </p>
            </li>
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-(--timeline-dot-bg) rounded-full -inset-s-3 ring-8 ring-(--timeline-ring)">
                    <svg className="w-2.5 h-2.5 text-(--timeline-dot-icon)" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z">
                        </path>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-(--timeline-title)">
                    Web and Computer Programming Certificate · Brigham Young University–Idaho
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-(--timeline-time)">
                    Completed
                </time>
                <p className="mb-4 text-base font-normal text-(--timeline-body)">
                    Built a foundation in programming logic, problem-solving, and core web development concepts.
                </p>
            </li>
        </ol>
    )
}

export default EducationLine