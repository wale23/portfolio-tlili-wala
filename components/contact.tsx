"use client"
import { Facebook, Instagram, Linkedin, Github } from "lucide-react"

export function Contact() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const menuItems = [
        { label: "Home", id: "hero" },
        { label: "About", id: "about" },
        { label: "Experience", id: "experience" },
        { label: "Projects", id: "projects" },
        { label: "Skills", id: "skills" },
        { label: "Education", id: "education" },
        { label: "Contact", id: "contact" },
    ]

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                    {/* Left side - Profile + Social links */}
                    <div className="flex flex-col items-center lg:items-start gap-6">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border">
                                <img src="/pdp.jpeg" alt="Wala Tlili" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">Wala Tlili</h3>
                                <p className="text-muted-foreground">Front-end Developer ReactJS</p>
                            </div>
                        </div>

                        {/* Social links under profile */}
                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://www.facebook.com/wala.tlili.79"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/wale_tlili/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tlili-wala-073878149/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/Tlili-Wala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right side - Get in touch */}
                    <div className="flex-1 text-center lg:text-right">
                        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Get in touch →</h2>

                        <div className="space-y-4">
                            <div>
                                <span className="text-sm text-muted-foreground font-medium tracking-wider">EMAIL ME:</span>
                                <div className="flex items-center gap-2 mt-1 justify-center lg:justify-end">
                                    <span className="text-lg text-foreground">tliliwala390@gmail.com</span>
                                    <span className="text-primary">→</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-sm text-muted-foreground font-medium tracking-wider">CALL ME:</span>
                                <div className="flex items-center gap-2 mt-1 justify-center lg:justify-end">
                                    <span className="text-lg text-foreground">+216 28470224</span>
                                    <span className="text-primary">→</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer navigation */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-16 pt-8 border-t border-border">
                    <nav className="flex gap-8 mb-4 sm:mb-0">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                    <div className="text-sm text-muted-foreground">
                        Copyright 2025 Tlili Wala | Software Developer. All rights reserved.
                    </div>
                </div>
            </div>
        </section>
    )
}
