import React from 'react'
import { FaChevronLeft, FaChevronRight, FaHtml5 } from 'react-icons/fa';
import CardSkill from '../Atoms/CardSkill';

function Skills({ setActiveSection }) {
    return (
        <>
            <h1 className="text-4xl font-bold mb-5">Skills & Tools</h1>
            <div className='flex gap-5'>
                <CardSkill icon={<FaHtml5 color='#e34f26' />} text="HTML" />
            </div>
            <div className="flex justify-between">
                <button
                    className="relative px-5 py-2 rounded-lg mt-5 cursor-pointer hover:bg-(--surface-hover)"
                    onClick={() => setActiveSection("projects")}
                >
                    <span className="ml-5">Projects</span>
                    <FaChevronLeft className="absolute left-4 top-3 text-sm" />
                </button>
                <button
                    className="relative px-5 py-2 rounded-lg mt-5 cursor-pointer hover:bg-(--surface-hover)"
                    onClick={() => setActiveSection("education")}
                >
                    <span className="mr-5">Education</span>
                    <FaChevronRight className="absolute right-4 top-3 text-sm" />
                </button>
            </div>
        </>
    )
}

export default Skills