const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-2xl font-bold font-playfair italic text-[#bef264]">
                        Devang.
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-[#bef264] transition-colors">
                        GitHub
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#bef264] transition-colors">
                        LinkedIn
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#bef264] transition-colors">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
