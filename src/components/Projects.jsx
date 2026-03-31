import RevealOnScroll from './RevealOnScroll';

const Projects = () => {
    const projects = [
        {
            title: "Soundabode",
            description: "A fully responsive, interactive web application built to showcase a vibrant digital experience. Features smooth navigation, dynamic state management, and a highly polished UI.",
            techStack: ["React.js", "JavaScript", "HTML", "CSS"],
            liveLink: "https://soundabode.com/",
            githubLink: ""
        },
        {
            title: "LearnPath",
            description: "AI-driven platform that generates personalized, professional learning roadmaps to help users bridge skill gaps and achieve career milestones with curated free resources.",
            techStack: ["React.js", "Vite", "Tailwind CSS", "AI Agents"],
            liveLink: "https://learnpath.qzz.io/",
            githubLink: "https://github.com/Justdevang/learnpath"
        }
    ];

    return (
        <section id="projects" className="py-16 md:py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        <span className="text-white">Featured </span>
                        <span className="font-playfair italic text-[#bef264]">Projects</span>
                    </h2>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="flex h-full">
                            <RevealOnScroll>
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:-translate-y-3 hover:border-[#bef264]/40 hover:shadow-[0_20px_50px_rgba(190,242,100,0.15)] transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#bef264] transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="text-[10px] px-2.5 py-1 bg-white/5 text-gray-300 rounded-full border border-white/5 group-hover:border-[#bef264]/20 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 items-center">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center px-5 py-2.5 bg-[#bef264] hover:bg-[#bef264] text-black rounded-xl text-xs font-bold transition-all hover:shadow-[0_0_15px_rgba(190,242,100,0.3)] hover:scale-[1.02] active:scale-95"
                                        >
                                            Live Demo
                                        </a>
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#bef264]/50 rounded-xl transition-all active:scale-95"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                                            </a>
                                        )}
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

export default Projects;
