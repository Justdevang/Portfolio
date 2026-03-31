import RevealOnScroll from './RevealOnScroll';

const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            items: ["React.js", "TypeScript", "Next.js", "Three.js", "Tailwind CSS", "Framer Motion", "Redux"]
        },
        {
            category: "Backend",
            items: ["Node.js", "PostgreSQL", "Express.js", "GraphQL", "Auth & Security (JWT)", "Mongoose"]
        },
        {
            category: "Cloud & Dev",
            items: ["Firebase", "Git & GitHub", "Vercel", "Docker", "Postman", "Figma"]
        }
    ];

    return (
        <section id="skills" className="py-16 md:py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        <span className="text-white">Technical </span>
                        <span className="font-playfair italic text-[#bef264]">Skills</span>
                    </h2>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="flex h-full">
                            <RevealOnScroll>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 hover:-translate-y-2 hover:border-[#bef264]/40 hover:shadow-[0_10px_30px_rgba(190,242,100,0.1)] transition-all duration-500 h-full flex flex-col items-center text-center group">
                                    <div className="w-10 h-10 bg-[#bef264]/10 rounded-xl flex items-center justify-center mb-5 border border-[#bef264]/20 group-hover:bg-[#bef264]/20 transition-colors">
                                       <span className="text-xl font-bold text-[#bef264]">{skillGroup.category[0]}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-5 text-white">{skillGroup.category}</h3>
                                    <div className="flex flex-wrap gap-2.5 justify-center">
                                        {skillGroup.items.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-xl border border-white/5 hover:border-[#bef264]/30 hover:bg-[#bef264]/10 hover:text-white transition-all duration-300 font-medium text-xs"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
