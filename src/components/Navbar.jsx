import Logo from '../assets/logo.svg'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


export const Navbar = ({toogleTheme}) => {
    
    return (
        <nav className="bg-white dark:bg-dark">
            <div className='container mx-auto flex justify-between py-11 items-center'>
                <div className='flex items-center gap-2'>
                <div className='flex justify-center items-center w-8 h-8 bg-cinder dark:bg-light rounded-full'>
                    <div className='font-extrabold text-[#FFF] dark:text-dark'>L</div>
                </div>
                <span className='font-extrabold text-cinder dark:text-text-light text-2xl'>Lucas.</span>
                </div>            
                <div>
                    <ul className="flex justify-between gap-14 text-cinder dark:text-text-light text-base font-medium items-center">
                        <li><a className='hover:underline' href="#">Services</a></li>
                        <li><a className='hover:underline' href="#">Portfolio</a></li>
                        <li><a className='hover:underline' href="#">Experiences</a></li>
                        <li><a className='hover:underline' href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="flex justify-between items-center gap-8">
                    <div onClick={() => toogleTheme()} role="button" tabIndex="0" >
                        <MdOutlineDarkMode className='dark-mode' size={'24px'}/>
                        <MdOutlineLightMode className='light-mode hidden' size={'24px'} color='#FFF'/>
                    </div>
                    <button  className='px-6 py-4 transition rounded-lg border border-[#F1F1F1] hover:shadow-lg'>
                        <span className='dark:text-text-light'>Resume</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}