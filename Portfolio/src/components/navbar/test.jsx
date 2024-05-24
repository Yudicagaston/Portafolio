import { useState } from 'react';
import NavMobile from './NavMobile.jsx'
const Test = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)

    }
    return (
        <nav className="bg-black p-4  ">
            <div className="flex items-center justify-between">
                <img src="/img/keep.jpg" alt="Logo" className="h-16" />
                <button
                    onClick={toggleMenu}
                    className="z-30 mr-4  md:hidden bg-blue-600 hover:bg-blue-400 text-white font-semibold py-2 px-3 rounded "
                >
                    <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 9a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0-4a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 8a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z" clipRule="evenodd" />
                    </svg>
                </button>

                <ul className="  space-x-5 text-base font-semibold text-blue-400 hidden md:flex lg:flex">
                    <li className="">
                        <a className="cursor-pointer transition duration-300 hover:text-white relative">ABOUT ME</a>
                    </li>
                    <li className="">
                        <a className="cursor-pointer transition duration-300 hover:text-white relative before:absolute">SKILLS</a>
                    </li>
                    <li className="">
                        <a className="cursor-pointer transition duration-300 hover:text-white relative">CURRICULUM</a>
                    </li>
                    <li className="">
                        <a className="cursor-pointer transition duration-300 hover:text-white relative">PORTFOLIO</a>
                    </li>
                    <li className="">
                        <a className="cursor-pointer transition duration-300 hover:text-white relative">CONTACT</a>
                    </li>
                </ul>
                <NavMobile isMenuOpen={isMenuOpen} />
            </div>

        </nav>
    )
}
export default Test