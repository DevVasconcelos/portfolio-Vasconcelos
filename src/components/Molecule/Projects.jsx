import React from 'react'
import { FaChevronLeft, FaChevronRight, FaReact } from 'react-icons/fa';
import CardPortfolio from '../Atoms/CardPortfolio';

function Projects({ setActiveSection }) {
    const EpicGames = {
        img: "/images/epicgames.png",
        name: "Epic Games",
        description:
            "A static front-end project inspired by the Epic Games Store interface, built to practice HTML and CSS by recreating a modern gaming storefront layout.",
        skills: [FaReact],
        url_git: "https://github.com/DevVasconcelos/Epic-Games",
        url_project: "https://epic-games-beige.vercel.app/"
    };
    const Travellion = {
        img: "/images/travellion.png",
        name: "Travellion",
        description:
            "O projeto em questão, é um portfólio e blog especialmente desenvolvido para um talentoso artista 3D. Além de destacar suas criações impressionantes, o site oferece um CMS personalizado que permite ao artista criar e gerenciar suas próprias postagens, garantindo assim uma plataforma dinâmica e atualizada para compartilhar seu trabalho e insights criativos",
        skills: [FaReact],
        url_git: "https://github.com/DevVasconcelos/Epic-Games",
        url_project: "https://epic-games-beige.vercel.app/"
    };

    return (
        <>
            <h1 className="text-4xl font-bold mb-5">Projects</h1>
            <h2 className="text-2xl mb-5 text-(--muted)">More than coding - learning to solve problems well</h2>
            <div className='flex flex-col gap-8 mb-10'>
                <div
                    className='grid grid-cols-3 lg_1:grid-cols-3 lg_3:grid-cols-2 md_2:grid-cols-1 gap-6 justify-between'
                >
                    <CardPortfolio {...EpicGames} />
                    <CardPortfolio {...Travellion} />
                </div>
            </div>
            <div className="flex justify-between">
                <button
                    className="relative px-5 py-2 rounded-lg mt-5 cursor-pointer hover:bg-(--surface-hover)"
                    onClick={() => setActiveSection("about")}
                >
                    <span className="ml-5">About me</span>
                    <FaChevronLeft className="absolute left-4 top-3 text-sm" />
                </button>
                <button
                    className="relative px-5 py-2 rounded-lg mt-5 cursor-pointer hover:bg-(--surface-hover)"
                    onClick={() => setActiveSection("skills")}
                >
                    <span className="mr-5">Skills & Tools</span>
                    <FaChevronRight className="absolute right-4 top-3 text-sm" />
                </button>
            </div>
        </>
    )
}

export default Projects