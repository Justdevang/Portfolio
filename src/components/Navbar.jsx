import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
                            Devang<span className="text-[#bef264]">.</span>
                        </a>
                    </div>
 
                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-400 hover:text-[#bef264] transition-all duration-300 text-xs font-bold tracking-wider uppercase group relative"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#bef264] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#bef264] focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 absolute w-full left-0 top-16 shadow-xl">
                    <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                        <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#bef264] hover:bg-white/5 w-full text-center py-3 rounded-lg text-lg font-medium transition-all">Home</a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#bef264] hover:bg-white/5 w-full text-center py-3 rounded-lg text-lg font-medium transition-all">About</a>
                        <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#bef264] hover:bg-white/5 w-full text-center py-3 rounded-lg text-lg font-medium transition-all">Skills</a>
                        <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#bef264] hover:bg-white/5 w-full text-center py-3 rounded-lg text-lg font-medium transition-all">Projects</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#bef264] hover:bg-white/5 w-full text-center py-3 rounded-lg text-lg font-medium transition-all">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
