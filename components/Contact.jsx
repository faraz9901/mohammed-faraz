"use client"
import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import toast from 'react-hot-toast';

const contactInfo = [
    {
        icon: <Mail className="h-6 w-6" />,
        title: "Email",
        value: "mdfaraz9901@gmail.com",
        link: "mailto:mdfaraz9901@gmail.com"
    },
    {
        icon: <Phone className="h-6 w-6" />,
        title: "Phone",
        value: "+91 9533232256",
        link: "tel:+919533232256"
    },
    {
        icon: <MapPin className="h-6 w-6" />,
        title: "Location",
        value: "Hyderabad, India",
        link: null
    }
];

const socialLinks = [
    {
        icon: <Github className="h-5 w-5" />,
        name: "GitHub",
        url: "https://github.com/faraz9901",
        color: "hover:text-gray-800"
    },
    {
        icon: <Linkedin className="h-5 w-5" />,
        name: "LinkedIn",
        url: "https://linkedin.com/in/mohammed-faraz",
        color: "hover:text-blue-600"
    },
    {
        icon: <Twitter className="h-5 w-5" />,
        name: "Twitter",
        url: "https://x.com/Mohammedfaraz91",
        color: "hover:text-blue-400"
    }
];


const validateForm = (formData) => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
        return false;
    }
    return true;
}

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        const isValid = validateForm(formData);

        if (!isValid) {
            toast.error("Please fill all the fields");
            return;
        }

        try {
            setLoading(true);
            const response = await fetch("https://formsubmit.co/ajax/mdfaraz9901@gmail.com", {
                method: "POST",
                data: JSON.stringify(formData),
                dataType: "json"
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            toast.success("Form submitted successfully");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            toast.error("Failed to submit form. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section-padding relative scroll-mt-24 !pb-2">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 section-heading">
                        Let&apos;s <span className="">Connect</span>
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto section-subheading">
                        Ready to start a conversation? I&apos;d love to hear from you!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <div className="animate-slide-in-left">
                        <div className="card">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">
                                Get In Touch
                            </h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center space-x-4 group">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <div className="text-white">
                                                    {info.icon}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-800">{info.title}</h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-600">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:scale-110 ${social.color}`}
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-slide-in-right">
                        <div className="card">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">
                                Send a Message
                            </h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Your name" value={formData.name} onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                            placeholder="your@email.com" value={formData.email} onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                        placeholder="What's this about?" value={formData.subject} onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Tell me about your project..." value={formData.message} onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-primary w-full inline-flex items-center justify-center disabled:opacity-50"
                                >
                                    <Send className="mr-2 h-4 w-4" />
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center w-11/12 mx-auto mt-16 animate-fade-in-up">
                    <div className="glass rounded-lg p-8">
                        <p className="text-white text-lg">
                            Thanks for visiting my portfolio!
                        </p>
                        <p className="text-white">
                            © 2024 Mohammed Faraz. Built with ❤️ using Next.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact