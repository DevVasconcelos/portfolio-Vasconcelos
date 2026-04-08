import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from 'react-icons/fa';
import { FaChevronRight } from "react-icons/fa6";

function Introduction({ setActiveSection }) {
    return (
        <>
            <h1 className="text-4xl font-bold mb-5">Ben-hur Arteaga Vasconcelos</h1>
            <h2 className="text-2xl mb-5 text-(--muted)">
                Full-Stack Developer focused on building practical, scalable web solutions.
            </h2>
            <p className="text-lg">
                I am a Full-Stack Developer focused on building scalable, user-centered web applications with clean
                architecture and practical business value. My experience includes working with technologies such as
                JavaScript, React, Node.js, Express, PostgreSQL, MongoDB, and Tailwind CSS to develop solutions that
                are efficient, maintainable, and aligned with real-world needs.
            </p>
            <p className="text-lg">
                I approach software development with a strong emphasis on code quality, usability,
                and continuous improvement. My goal is to build digital products that solve real problems,
                support business objectives, and provide reliable experiences for users.
            </p>
            <div className='flex gap-5'>
                <a href="mailto:benhurarteagavasconcelos@gmail.com" className="relative px-5 py-2 rounded-lg bg-[#7f22fe] mt-5 cursor-pointer hover:bg-[#8022fee6] text-white">
                    <CiMail className="absolute top-2.5 text-xl" />
                    <span className="ml-7 font-semibold">Send Mail</span>
                </a>
                <a href="https://wa.me/5512983034481" target='blank' className="relative px-5 py-2 rounded-lg bg-[#60d16d] mt-5 cursor-pointer hover:bg-[#4ca757] text-black">
                    <FaWhatsapp className="absolute top-2.5 text-xl" />
                    <span className="ml-7 font-semibold">Whatsapp</span>
                </a>
            </div>
            <br />
            <div className="flex justify-end">
                <button
                    className="relative px-5 py-2 rounded-lg mt-5 cursor-pointer hover:bg-(--surface-hover)"
                    onClick={() => setActiveSection("about")}
                >
                    <span className="mr-5">About Me</span>
                    <FaChevronRight className="absolute right-4 top-3 text-sm" />
                </button>
            </div>
        </>
    )
}

export default Introduction