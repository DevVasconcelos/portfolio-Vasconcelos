import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function About({ setActiveSection }) {
    return (
        <>
            <h1 className="text-4xl font-bold mb-5">About Ben-hur</h1>
            <h2 className="text-2xl mb-5 text-(--muted)">More than coding - learning to solve problems well</h2>
            <div className="text-lg flex flex-col gap-5">
                <p>
                    I am motivated by building software that is clear, reliable, and useful in real-world contexts.
                    What draws me to full-stack development is the ability to understand and shape the complete flow of an application —
                    from user experience and interface behavior to backend logic, APIs, and data structure.
                </p>
                <p>I value clean organization, maintainable code, and solutions designed with purpose.
                    Beyond technical execution, I bring consistency, responsibility, and a continuous focus on improvement,
                    always aiming to contribute to products that combine quality, usability, and business value.
                </p>
            </div>
            <div className="flex justify-between">
                <button
                    className="relative px-5 py-2 rounded-lg mt-5 cursor-pointer hover:bg-(--surface-hover)"
                    onClick={() => setActiveSection("introduction")}
                >
                    <span className="ml-5">Introduction</span>
                    <FaChevronLeft className="absolute left-4 top-3 text-sm" />
                </button>
                <button
                    className="relative px-5 py-2 rounded-lg mt-5 cursor-pointer hover:bg-(--surface-hover)"
                    onClick={() => setActiveSection("projects")}
                >
                    <span className="mr-5">Projects</span>
                    <FaChevronRight className="absolute right-4 top-3 text-sm" />
                </button>
            </div>
        </>
    )
}

export default About