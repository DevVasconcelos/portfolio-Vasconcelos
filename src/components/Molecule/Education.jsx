import React from 'react'
import EducationLine from '../Atoms/EducationLine'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Education({ setActiveSection }) {
    return (
        <>
            <h1 className="text-4xl font-bold mb-5">Education</h1>
            <h2 className="text-2xl mb-5 text-(--muted)">
                A clear progression in programming, web development, and software engineering.
            </h2>
            <p className='mb-10'>
                My academic path has been focused on developing solid technical foundations and practical
                skills in software creation. From programming fundamentals to web development and broader
                software engineering studies, each stage has strengthened my ability to build maintainable,
                real-world solutions.
            </p>
            <EducationLine />
            <div className="flex justify-between">
                <button
                    className="relative px-5 py-2 rounded-lg mt-5 cursor-pointer hover:bg-(--surface-hover)"
                    onClick={() => setActiveSection("skills")}
                >
                    <span className="ml-5">Skills & Tools</span>
                    <FaChevronLeft className="absolute left-4 top-3 text-sm" />
                </button>
                <button
                    className="relative px-5 py-2 rounded-lg mt-5 cursor-pointer hover:bg-(--surface-hover)"
                    onClick={() => setActiveSection("introduction")}
                >
                    <span className="mr-5">Introduction</span>
                    <FaChevronRight className="absolute right-4 top-3 text-sm" />
                </button>
            </div>
        </>
    )
}

export default Education