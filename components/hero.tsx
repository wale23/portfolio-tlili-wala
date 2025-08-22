"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Download } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const scrollToContact = () => {
        const element = document.getElementById("contact")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8 pt-20"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className={`w-16 h-1 bg-primary rounded-full transition-all duration-1000 ease-out ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`} style={{ transitionDelay: '100ms' }}></div>

                            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight transition-all duration-1000 ease-out ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`} style={{ transitionDelay: '200ms' }}>
                                Hello,
                                <br />
                                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">I'm Wala Tlili</span>
                            </h1>

                            <p className={`text-lg text-muted-foreground max-w-lg leading-relaxed transition-all duration-1000 ease-out ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`} style={{ transitionDelay: '300ms' }}>
                                Front-end Developer with expertise in ReactJS, experienced in designing and developing modern, responsive, and high-performing web applications.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className={`flex gap-12 transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '400ms' }}>
                            <div>
                                <div className="text-4xl font-bold text-primary">2+</div>
                                <div className="text-sm text-muted-foreground">
                                    Years of
                                    <br />
                                    experience
                                </div>
                            </div>
                        </div>

                        {/* Contact info */}
                        <div className={`flex flex-col gap-3 text-sm text-muted-foreground transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '500ms' }}>
                            <div className="flex items-center gap-3 group">
                                <Mail size={16} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                                <span>tliliwala390@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <Phone size={16} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                                <span>+216 28470224</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <MapPin size={16} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                                <span>Tunisie</span>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '700ms' }}>
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-3 font-medium group hover:scale-105 transition-all duration-300"
                            >
                                <a href="/Wala-Tlili-resume.pdf" download>
                                    <Download size={18} className="mr-2 group-hover:animate-bounce" />
                                    Download CV
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right side - Profile image */}
                    <div className={`flex justify-center lg:justify-end transition-all duration-1200 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: '200ms' }}>
                        <div className="relative">
                            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-500 group">
                                <img
                                    src="/pdp.jpeg"
                                    alt="Wala Tlili"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                {/* Animated glow effect */}
                                {/*<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}