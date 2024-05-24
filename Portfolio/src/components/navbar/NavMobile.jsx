const NavMobile = ({ isMenuOpen, scrollToSection }) => {
    return (
        <div className={`z-20 absolute top-0 left-0   py-2 px-0 my-0 w-9/12 bg-black md:hidden lg:hidden rounded-br-[40px] ${isMenuOpen ? 'translate-x-0 ' : '-translate-x-full '} transition-transform transform duration-500 ease-in`}>
            <img src="/img/keep.jpg" alt="Logo" className="h-16 ml-5" />
            <ul className={`gap-2 list-none text-base font-semibold text-blue-400 `}>
                <li className="my-2 md:my-0 mx-6 p-4">
                    <a onClick={() => scrollToSection('about')} className=" cursor-pointer transition duration-300 hover:text-white relative">ABOUT ME</a>
                </li>
                <li className="my-2 md:my-0 mx-6 p-4">
                    <a onClick={() => scrollToSection('skills')} className=" cursor-pointer transition duration-300 hover:text-white relative">SKILLS</a>
                </li>
                <li className="my-2 md:my-0 mx-6 p-4">
                    <a onClick={() => scrollToSection('curriculum')} className=" cursor-pointer transition duration-300 hover:text-white relative">CURRICULUM</a>
                </li>
                <li className="my-2 md:my-0 mx-6 p-4">
                    <a onClick={() => scrollToSection('portfolio')} className=" cursor-pointer transition duration-300 hover:text-white relative">PORTFOLIO</a>
                </li>
                <li className="my-2 md:my-0 mx-6 p-4">
                    <a onClick={() => scrollToSection('contact')} className=" cursor-pointer transition duration-300 hover:text-white relative">CONTACT</a>
                </li>
            </ul>
        </div>
    )
}
export default NavMobile