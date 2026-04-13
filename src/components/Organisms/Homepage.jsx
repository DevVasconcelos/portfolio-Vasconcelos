'use client'
import React from 'react'
import Header from '../Molecule/Header'
import About from "@/components/Molecule/About";
import Introduction from "@/components/Molecule/Introduction";
import { useState } from "react";
import Projects from '../Molecule/Projects';
import Skills from '../Molecule/Skills';
import Education from '../Molecule/Education';
import Footer from '../Molecule/Footer';

function Homepage() {
    const [activeSection, setActiveSection] = useState("introduction");

    return (
        <div className="min-h-screen flex flex-col">
            <Header onNavigate={setActiveSection} />
            <main className="flex-1 flex">
                <div className="grid grid-cols-1 md:grid-cols-6 w-full max-w-480 mx-auto px-4 md:px-10 xl:px-20 flex-1">
                    <div className="flex flex-col border-l border-r border-dashed border-border-theme py-10 px-5 w-full">
                    <h1 className="text-xl mb-3">Sections</h1>
                    <nav className="flex flex-col gap-3">
                        <button onClick={() => setActiveSection("introduction")} className="cursor-pointer hover:bg-(--surface-hover) p-1 rounded text-left">Introduction</button>
                        <button onClick={() => setActiveSection("about")} className="cursor-pointer hover:bg-(--surface-hover) p-1 rounded text-left">About me</button>
                        <button onClick={() => setActiveSection("projects")} className="cursor-pointer hover:bg-(--surface-hover) p-1 rounded text-left">Projects</button>
                        <button onClick={() => setActiveSection("skills")} className="cursor-pointer hover:bg-(--surface-hover) p-1 rounded text-left">Skills & Tools</button>
                        <button onClick={() => setActiveSection("education")} className="cursor-pointer hover:bg-(--surface-hover) p-1 rounded text-left">Education</button>
                    </nav>
                    </div>
                    <div className="md:col-span-5 py-10 px-4 md:px-10 border-r border-dashed border-border-theme w-full">
                        {activeSection === "introduction" &&
                            <Introduction setActiveSection={setActiveSection} />
                        }
                        {activeSection === "about" &&
                            <About setActiveSection={setActiveSection} />
                        }
                        {activeSection === "projects" &&
                            <Projects setActiveSection={setActiveSection} />
                        }
                        {activeSection === "skills" &&
                            <Skills setActiveSection={setActiveSection} />
                        }
                        {activeSection === "education" &&
                            <Education setActiveSection={setActiveSection} />
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Homepage