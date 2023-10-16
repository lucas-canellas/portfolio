import { useState } from 'react';
import Logo from '../assets/logo.svg'
import { MdOutlineDarkMode, MdOutlineLightMode, MdMenu, MdClose } from "react-icons/md";



export const Navbar = ({ toogleTheme }) => {

    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(true)
        document.body.style.overflow = "hidden";
        document.querySelector('#site-content').classList.add('blur-sm')
    }

    const closeMenu = () => {
        setOpen(false)
        document.body.style.overflow = "auto";
        document.querySelector('#site-content').classList.remove('blur-sm')
    }

    return (
        <nav className="bg-white dark:bg-dark">
            <div className='container mx-auto flex justify-between py-5  xl:py-11 items-center px-2'>
                <div className='flex items-center gap-2'>
                    <div className='flex justify-center items-center w-8 h-8 bg-cinder dark:bg-light rounded-full'>
                        <div className='font-extrabold text-[#FFF] dark:text-dark'>L</div>
                    </div>
                    <span className='font-extrabold text-cinder dark:text-text-light text-2xl'>Lucas.</span>
                </div>
                <div className='hidden md:flex'>
                    <ul className="flex justify-between gap-14 text-cinder dark:text-text-light text-base font-medium items-center">
                        <li><a className='hover:underline' href="#">Projetos</a></li>
                        <li><a className='hover:underline' href="#">Experiência</a></li>
                    </ul>
                </div>
                <div className="flex justify-between items-center gap-4 md:gap-8">
                    <div onClick={() => toogleTheme()} role="button" tabIndex="0" >
                        <MdOutlineDarkMode className='dark-mode' size={'24px'} />
                        <MdOutlineLightMode className='light-mode hidden' size={'24px'} color='#FFF' />
                    </div>
                    <button className='px-6 py-4 transition rounded-lg border border-[#F1F1F1] hover:shadow-lg hidden md:block'>
                        <span className='dark:text-text-light'>Resume</span>
                    </button>
                    {open ? (
                        <button className='md:hidden' onClick={closeMenu}>
                            <MdClose size={'24px'} className='dark:text-[#FFF]' />
                        </button>
                    ) : (
                        <button className='md:hidden' onClick={openMenu}>
                            <MdMenu size={'24px'} className='dark:text-[#FFF]' />
                        </button>
                    )}

                </div>
            </div>
            {/* <div className='w-full h-[1px] bg-text-light dark:bg-cinder-light'></div> */}
            {open && (
                <div id='menu-navbar' className='w-full dark:bg-dark bg-text-light animate-spin-slow fixed z-10'>
                    <ul className='divide-y dark:divide-cinder-light divide-[#FFF]'>
                        <li className='text-center py-2 font-bold dark:text-text-light dark:border-t dark:border-t-cinder-light '>Projetos</li>
                        <li className='text-center py-2 font-bold dark:text-text-light '>Experiência</li>
                        <li className='text-center py-2 font-bold dark:text-text-light '>Download CV</li>
                    </ul>
                </div>
            )}

        </nav>
    )
}