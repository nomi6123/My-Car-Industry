'use client';

import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="bg-black w-full p-5 text-white sticky top-0 z-50">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between ">
                {/* Hamburger or Close Icon */}
                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 6h18M3 12h18m-6 6h6"
                            />
                        </svg>
                    )}
                </button>

                {/* Website Title */}
                <a href="#" className="flex-grow lg:flex-grow-0 text-center">
                    <h2
                        className={`hover:text-[#4D4CEB] transition max-sm:hidden transform duration-300 ease-in-out text-3xl font-semibold uppercase font-serif ${
                            menuOpen ? 'lg:text-left' : ''
                        }`}
                    >
                        Carvilla
                    </h2>
                </a>
                        
                {/* Navigation Links */}
                <nav
                    className={`absolute lg:static top-16    left-0 w-full lg:w-auto bg-black lg:bg-transparent p-4 lg:p-0 uppercase flex flex-col lg:flex-row lg:items-center lg:justify-end gap-4 lg:gap-8 transition-transform transform ${
                        menuOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 lg:flex lg:flex-row`}
                >
                    <a
                        href="#home"
                        onClick={handleCloseMenu}
                        className="block hover:text-[#4D4CEB] transition transform duration-300 ease-in-out font-semibold text-[17px]"
                    >
                        Home
                    </a>
                    <a
                        href="#services"
                        onClick={handleCloseMenu}
                        className="block hover:text-[#4D4CEB] transition transform duration-300 ease-in-out font-semibold text-[17px]"
                    >
                        Services
                    </a>
                    <a
                        href="#fcars"
                        onClick={handleCloseMenu}
                        className="block hover:text-[#4D4CEB] transition transform duration-300 ease-in-out font-semibold text-[17px]"
                    >
                        Featured Cars
                    </a>
                    <a
                        href="#ncars"
                        onClick={handleCloseMenu}
                        className="block hover:text-[#4D4CEB] transition transform duration-300 ease-in-out font-semibold text-[17px]"
                    >
                        New Cars
                    </a>
                    <a
                        href="#brands"
                        onClick={handleCloseMenu}
                        className="block hover:text-[#4D4CEB] transition transform duration-300 ease-in-out font-semibold text-[17px]"
                    >
                        Brands
                    </a>
                    <a
                        href="#contact"
                        onClick={handleCloseMenu}
                        className="block hover:text-[#4D4CEB] transition transform duration-300 ease-in-out font-semibold text-[17px]"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
