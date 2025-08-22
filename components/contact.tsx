"use client"
import { useState, useEffect } from "react"
import { Facebook, Instagram, Linkedin, Github, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export function Contact() {
    const [isVisible, setIsVisible] = useState(false)
    const [visibleElements, setVisibleElements] = useState<number[]>([])
    const [hoveredSocial, setHoveredSocial] = useState<number | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Animate elements progressively
                    Array.from({ length: 6 }, (_, index) => {
                        setTimeout(() => {
                            setVisibleElements(prev => [...prev, index])
                        }, index * 200)
                    })
                }
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById("contact")
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const menuItems = [
        { label: "Home", id: "hero" },
        { label: "Experience", id: "experience" },
        { label: "Projects", id: "projects" },
        { label: "Skills", id: "skills" },
        { label: "Education", id: "education" },
        { label: "Contact", id: "contact" },
    ]

    const socialLinks = [
        {
            href: "https://www.facebook.com/wala.tlili.79",
            icon: Facebook,
            label: "Facebook",
            color: "hover:bg-blue-600"
        },
        {
            href: "https://www.instagram.com/wale_tlili/",
            icon: Instagram,
            label: "Instagram",
            color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500"
        },
        {
            href: "https://www.linkedin.com/in/tlili-wala-073878149/",
            icon: Linkedin,
            label: "LinkedIn",
            color: "hover:bg-blue-700"
        },
        {
            href: "https://github.com/Tlili-Wala",
            icon: Github,
            label: "GitHub",
            color: "hover:bg-gray-800"
        }
    ]

    const contactInfo = [
        {
            icon: Mail,
            label: "EMAIL ME:",
            value: "tliliwala390@gmail.com",
            action: "mailto:tliliwala390@gmail.com"
        },
        {
            icon: Phone,
            label: "CALL ME:",
            value: "+216 28470224",
            action: "tel:+21628470224"
        }
    ]

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
                    {/* Left side - Profile + Social links */}
                    <div className={`flex flex-col items-center lg:items-start gap-8 transition-all duration-1000 ease-out ${
                        visibleElements.includes(0) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`} style={{ transitionDelay: '200ms' }}>
                        {/* Profile section */}
                        <div className="flex items-center gap-6 group">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
                                    <img
                                        src="/pdp.jpeg"
                                        alt="Wala Tlili"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                    Wala Tlili
                                </h3>
                                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                    Front-end Developer ReactJS
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <MapPin size={14} className="text-primary" />
                                    <span className="text-sm text-muted-foreground">Sousse, Tunisia</span>
                                </div>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className={`transition-all duration-1000 ease-out ${
                            visibleElements.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '400ms' }}>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`relative w-12 h-12 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 transition-all duration-500 flex items-center justify-center group hover:scale-110 hover:shadow-lg ${social.color} hover:border-transparent`}
                                        onMouseEnter={() => setHoveredSocial(index)}
                                        onMouseLeave={() => setHoveredSocial(null)}
                                        style={{
                                            transitionDelay: `${index * 100}ms`,
                                            transform: `translateY(${hoveredSocial === index ? '-8px' : '0px'})`
                                        }}
                                    >
                                        <social.icon size={18} className="group-hover:text-white transition-colors duration-300" />

                                        {/* Tooltip */}
                                        <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded shadow-lg transition-all duration-300 ${
                                            hoveredSocial === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                                        }`}>
                                            {social.label}
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
                                        </div>

                                        {/* Ripple effect */}
                                        <div className="absolute inset-0 rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 animate-ping"></div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Get in touch */}
                    <div className={`flex-1 text-center lg:text-right transition-all duration-1000 ease-out ${
                        visibleElements.includes(2) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                    }`} style={{ transitionDelay: '600ms' }}>
                        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 group hover:text-primary transition-colors duration-300">
                            Get in touch
                            <span className="inline-block ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </h2>

                        <div className="space-y-6">
                            {contactInfo.map((contact, index) => (
                                <div
                                    key={index}
                                    className={`group transition-all duration-1000 ease-out ${
                                        visibleElements.includes(3 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                    style={{ transitionDelay: `${800 + index * 200}ms` }}
                                >
                                    <div className="flex items-center gap-2 mb-2 justify-center lg:justify-end">
                                        <contact.icon size={14} className="text-primary" />
                                        <span className="text-sm text-muted-foreground font-medium tracking-wider group-hover:text-primary transition-colors duration-300">
                                            {contact.label}
                                        </span>
                                    </div>
                                    <a
                                        href={contact.action}
                                        className="flex items-center gap-3 justify-center lg:justify-end group-hover:scale-105 transition-transform duration-300"
                                    >
                                        <span className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                                            {contact.value}
                                        </span>
                                        <span className="text-primary group-hover:translate-x-1 transition-transform duration-300">→</span>
                                    </a>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>

                {/* Footer navigation */}
                <div className={`flex flex-col sm:flex-row items-center justify-between mt-20 pt-8 border-t border-border/50 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '1400ms' }}>
                    <nav className="flex flex-wrap gap-6 mb-6 sm:mb-0 justify-center sm:justify-start">
                        {menuItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                                style={{ transitionDelay: `${1500 + index * 100}ms` }}
                            >
                                {item.label}
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                            </button>
                        ))}
                    </nav>

                    <div className="text-center sm:text-right">
                        <div className="text-xs text-muted-foreground/70">
                            Copyright 2025 Tlili Wala | Software Developer. All rights reserved.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}