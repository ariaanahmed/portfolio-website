import { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import resume from '../../../assets/resume/resume of  arian ahmed.pdf'

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleToggle = () => {
        if (event.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const navOptions = <>
        <div className='flex flex-col md:flex-row items-start md:items-center  gap-4'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'bg-gray-700 text-white block px-3 py-2 rounded-md font-semibold capitalize' : 'fw-bold text-decoration-none font-semibold capitalize px-3 py-2'}>Home</NavLink>

            <NavLink to="/skills" className={({ isActive }) => isActive ? 'bg-gray-700 text-white block px-3 py-2 rounded-md font-semibold capitalize' : 'fw-bold text-decoration-none font-semibold capitalize px-3 py-2'}>skills</NavLink>

            <NavLink to="/projects" className={({ isActive }) => isActive ? 'bg-gray-700 text-white block px-3 py-2 rounded-md font-semibold capitalize' : 'fw-bold text-decoration-none font-semibold capitalize px-3 py-2'}>projects</NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? 'bg-gray-700 text-white block px-3 py-2 rounded-md font-semibold capitalize' : 'fw-bold text-decoration-none font-semibold capitalize px-3 py-2'}>about</NavLink>

            <a href={resume} download={resume}>
                <button className="btn bg-warning btn-outline  border-0 text-black font-thin font-concertOne mt-3 mb-1 md:mb-0 md:mt-0">Hire me</button>
            </a>

            <label className="swap swap-rotate">
                <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true} />
                {/* sun icon */}
                <FaSun className="swap-on fill-current w-6 h-6 text-white" />
                {/* moon icon */}
                <FaMoon className="swap-off fill-current w-6 h-6" />
            </label>
        </div>
    </>

    return (
        <nav className=' bg-red-50 bg-opacity-20 backdrop-blur-sm shadow-lg sticky top-0 z-10 px-5' style={{borderBottom: '1px solid rgba(0,0,0,0.0)'}}>
            <div className="mx-auto text-center">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0">
                            <Link to="/" className="font-bold lowercase text-3xl">
                                {'<Aria'}<span className="text-sky-500 font-bold">a</span>n{'/>'}
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex space-x-4 justify-center items-center">
                                {navOptions}

                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="border inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false">

                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <FaBars className="block h-6 w-6"></FaBars>
                            ) : (
                                <FaBars className="block h-6 w-6 "></FaBars>

                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                        {navOptions}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;