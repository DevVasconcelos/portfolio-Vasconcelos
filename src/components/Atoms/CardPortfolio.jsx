import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLaptopCode } from 'react-icons/fa'

function CardPortfolio({ img, name, description, skills, url_git, url_project }) {
    return (
        <>
            <div
                className="card shadow-custom h-112.5 w-[full] group gap-4 rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-1 overflow-hidden space-y-5"
            >
                <div className="absolute top-0 left-0 h-full w-full bg-(--surface-card)">
                    <img src={img} alt="" className='group-hover:opacity-15' />
                </div>
                <div
                    className="container text-(--foreground) z-2 relative flex flex-col gap-[0.5em]"
                >
                    <div className="h-fit w-full">
                        <h1
                            className="font-weight: 900;
                -webkit-text-fill-color: transparent;
                -webkit-text-stroke-width: 1px; card_heading text-xl tracking-[.2em]"
                        >
                            {name}
                        </h1>
                    </div>

                    <div className='flex justify-between items-center mt-3'>
                        <div className='flex gap-3 items-center'>
                            {skills && skills.map((SkillIcon, key) => (
                                <div key={key}>
                                    <SkillIcon size={25} className="text-(--foreground)" />
                                </div>
                            ))}
                        </div>
                        <div className='flex gap-3 items-center'>
                            {url_project ?
                                <Link href={url_project} target='_blank'>
                                    <FaLaptopCode className='text-(--foreground) transition duration-1000 delay-0 hover:text-(--muted)' size={25} alt="Project" />
                                </Link> : ""}
                            <Link href={url_git} target='_blank'>
                                <FaGithub className='text-(--foreground) transition duration-1000 delay-0 hover:text-(--muted)' size={25} alt="GitHub" />
                            </Link>
                        </div>
                    </div>
                </div>
                <p
                    className="block text-(--foreground) text-sm relative h-0 group-hover:h-full leading-[1.2em] duration-500 overflow-hidden"
                >
                    {description}
                </p>
            </div>

        </>
    )
}

export default CardPortfolio;
