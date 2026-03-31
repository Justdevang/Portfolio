import { TextAnimate } from './magicui/TextAnimate';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-32">
            <div className="max-w-7xl w-full flex flex-col items-center justify-center">

                <div className="w-full flex flex-col items-center justify-center text-center z-10">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <div className="relative">
                            <div className="w-2.5 h-2.5 bg-[#bef264] rounded-full animate-pulse shadow-[0_0_8px_#bef264]"></div>
                            <div className="absolute inset-0 w-2.5 h-2.5 bg-[#bef264] rounded-full animate-ping opacity-75"></div>
                        </div>
                        <span className="text-gray-400 text-lg font-medium tracking-wide">Hi, I'm Devang. 👋</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[1.1] text-white font-inter tracking-tighter drop-shadow-[0_0_15px_rgba(190,242,100,0.2)]">
                        <TextAnimate 
                            animation="blurIn" 
                            by="character"
                            as="span"
                            once={true}
                            startOnView={false}
                            delay={2.6}
                        >
                            WEB
                        </TextAnimate>
                        <br />
                        <TextAnimate 
                            animation="blurIn" 
                            by="character"
                            as="span"
                            delay={3.0}
                            once={true}
                            startOnView={false}
                            className="font-playfair italic text-[#bef264] font-normal tracking-tight"
                        >
                            DEVELOPER
                        </TextAnimate>
                    </h1>

                    <p className="max-w-xl mx-auto text-base md:text-lg text-white/90 leading-relaxed mb-10">
                        I build modern, interactive web experiences. Specialized in <span className="text-white font-semibold">React.js</span> and <span className="text-white font-semibold">Three.js</span>, I transform complex ideas into fast, responsive, and visually stunning digital products.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a
                            href="#projects"
                            className="group relative px-6 py-3.5 rounded-full bg-[#bef264] text-black font-bold text-sm transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(190,242,100,0.4)] active:scale-95 overflow-hidden"
                        >
                            <span className="relative z-10">View My Work</span>
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:border-[#bef264]/50 hover:text-[#bef264] font-semibold text-sm transition-all hover:bg-white/10 active:scale-95 shadow-lg"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
