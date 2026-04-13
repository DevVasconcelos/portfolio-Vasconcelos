import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='border-t border-border-theme text-center'>
            <div className='max-w-480 mx-auto px-4 md:px-10 xl:px-20'>
                <div className='border-l border-r border-border-theme border-dashed flex justify-center items-center py-10 px-5'>
                    © {currentYear} - Developed by Ben-hur
                </div>
            </div>
        </footer>
    )
}

export default Footer