import React from 'react'

function CardSkill({ icon, text }) {
    return (
        <div className='flex items-center gap-2 rounded-lg bg-(--surface-card) px-5 py-2 text-foreground'>
            {icon}
            <p className='text-foreground font-semibold'>{text}</p>
        </div>
    )
}

export default CardSkill