import RevealOnScroll from './RevealOnScroll';

const Experience = () => {
    const experiences = [
        {
            company: "Tech Innovators Inc.",
            role: "Senior Full Stack Dev",
            period: "2023 - Present",
            description: "Leading a team of 5 developers in building a scalable SaaS platform. Implemented microservices architecture reducing server costs by 30%."
        },
        {
            company: "WebSolutions Co.",
            role: "Full Stack Developer",
            period: "2021 - 2023",
            description: "Developed and maintained multiple client websites using MERN stack. Improved page load speed by 40% through optimization techniques."
        },
        {
            company: "StartUp Hub",
            role: "Junior Developer",
            period: "2020 - 2021",
            description: "Collaborated with designers to implement responsive UI components. Built RESTful APIs for mobile application integration."
        }
    ];

    return (
        <section id="experience" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Work Experience</span>
                    </h2>
                </RevealOnScroll>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <RevealOnScroll>
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1a1a1a] shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                </div>

                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all duration-300 ml-4 md:ml-0">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <span className="text-sm text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded">{exp.period}</span>
                                    </div>
                                    <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </RevealOnScroll>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
