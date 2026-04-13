"use client";

import React from 'react'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from '../ThemeProvider';


function Header({ onNavigate }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className='border-b border-border-theme'>
            <div className='max-w-480 mx-auto px-4 md:px-10 xl:px-20'>
                <div className='border-l border-r border-border-theme border-dashed flex justify-between items-center py-3'>
                    <nav className='flex gap-6 items-center text-muted pl-4'>
                        <button type='button' className='cursor-pointer hover:text-foreground' onClick={() => onNavigate?.("introduction")}>Home</button>
                        <a className='cursor-pointer hover:text-foreground px-6 relative group' href='https://www.linkedin.com/in/benvasconcelos/' target="_blank" rel="noopener noreferrer">
                            Linkedin
                            <FaExternalLinkAlt className='absolute right-0 top-1 text-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1' />
                        </a>
                        <a className='cursor-pointer hover:text-foreground px-6 relative group'
                            href="Benhur_Resume.pdf"
                            target="blank"
                        >
                            Resume
                            <FaExternalLinkAlt className='absolute right-0 top-1 text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1' />
                        </a>
                    </nav>
                    <div className='flex gap-6 pr-4'>
                        <button
                            type='button'
                            onClick={toggleTheme}
                            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
                            className='text-xl cursor-pointer p-3 group hover:bg-surface-highlight rounded-xl'
                        >
                            {theme === 'dark'
                                ? <IoSunnyOutline className='transition-transform group-hover:scale-110' />
                                : <IoMoonOutline className='transition-transform group-hover:scale-110' />}
                        </button>

                        <a href='https://github.com/DevVasconcelos' target='blank' className='text-xl cursor-pointer p-3 group hover:bg-surface-highlight hover:rounded-full'>
                            <FaGithub className='transition-transform group-hover:scale-110' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header