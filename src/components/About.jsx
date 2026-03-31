import RevealOnScroll from './RevealOnScroll';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                        <span className="text-white">About </span>
                        <span className="font-playfair italic text-[#bef264]">Me</span>
                    </h2>

                    <div className="max-w-3xl mx-auto text-base text-gray-300 leading-relaxed text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-[#bef264]/40 transition-all duration-500 shadow-2xl">
                        <p className="mb-6">
                            I am a passionate <span className="text-white font-semibold underline decoration-[#bef264]/30 decoration-2 underline-offset-4">Full-Stack Developer</span> dedicated to crafting high-performance, scalable web applications that solve real-world problems. With a deep focus on user-centric design and clean, maintainable architecture, I bridge the gap between complex backend logic and intuitive frontend experiences.
                        </p>
                        <p className="mb-6">
                            My expertise lies in the modern JavaScript ecosystem, where I leverage tools like <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">Three.js</span>, and <span className="text-[#bef264] font-medium">Node.js</span> to build immersive, responsive digital products. I believe that great code is not just about functionality—it's about performance, accessibility, and delighting users at every interaction.
                        </p>
                        <p className="text-gray-400 italic font-light">
                            Constantly exploring emerging technologies and design patterns to stay at the forefront of the digital landscape.
                        </p>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default About;
