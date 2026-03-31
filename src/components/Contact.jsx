import RevealOnScroll from './RevealOnScroll';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would integrate EmailJS or similar service
        console.log("Form submitted", formData);
        alert("Message Sent! (Simulation)");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                        <span className="text-white">Get In </span>
                        <span className="font-playfair italic text-[#bef264]">Touch</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        <div className="flex-1 max-w-lg">
                            <h3 className="text-2xl font-bold mb-4 text-white">Let's Connect</h3>
                            <p className="text-gray-400 mb-6 text-base">
                                I'm actively looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="space-y-4">
                                <a href="mailto:devang@example.com" className="flex items-center space-x-3 text-gray-300 group hover:text-[#bef264] transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#bef264] group-hover:bg-[#bef264]/10 transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-base">devangdhakate22@gmail.com</span>
                                </a>

                                <div className="flex items-center space-x-3 text-gray-300">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-base">Pune, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 max-w-lg bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#bef264]/30 transition-all duration-500 shadow-2xl relative overflow-hidden group">
                            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#bef264]/5 rounded-full blur-3xl group-hover:bg-[#bef264]/10 transition-colors"></div>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="block text-xs font-medium text-gray-400 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#bef264]/50 focus:bg-white/10 transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="block text-xs font-medium text-gray-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#bef264]/50 focus:bg-white/10 transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="block text-xs font-medium text-gray-400 ml-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#bef264]/50 focus:bg-white/10 transition-all duration-300 resize-none"
                                        placeholder="How can I help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-4 rounded-xl bg-[#bef264] hover:bg-[#bef264] text-black font-bold text-sm transition-all hover:scale-[1.02] shadow-[0_5px_20px_rgba(190,242,100,0.2)] active:scale-95 flex items-center justify-center gap-2 group"
                                >
                                    <span>Send Message</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Contact;
