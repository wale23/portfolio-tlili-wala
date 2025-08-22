"use client"
import {useState, useEffect} from "react"
import {GraduationCap, Calendar} from "lucide-react"

export function Education() {
    const [isVisible, setIsVisible] = useState(false)
    const [visibleCards, setVisibleCards] = useState<number[]>([])

    const education = [
        {
            institution: "POLYTECHNIQUE SOUSSE",
            period: "SEP 2023",
            degree: "Engineering Program: Computer Science",
            description: "Ongoing evening program covering advanced computer science and software engineering concepts.",
            status: "Ongoing",
            icon: "🎓",
        },
        {
            institution: "ISSAT SOUSSE",
            period: "JUN 2023",
            degree: "Bachelor's Degree in Computer Systems Engineering",
            description: "Comprehensive training in software development, databases, and computer systems.",
            status: "Completed",
            icon: "📚",
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Animate cards one by one
                    education.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleCards(prev => [...prev, index])
                        }, index * 300)
                    })
                }
            },
            {threshold: 0.1}
        )

        const element = document.getElementById("education")
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-24 right-16 w-72 h-72 bg-primary/4 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 left-12 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl animate-pulse"
                 style={{animationDelay: '2s'}}></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-start mb-16">
                    <div
                        className={`inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                        }`} style={{transitionDelay: '100ms'}}>
                        <span>/</span>
                        <span>MY EXPERIENCE</span>
                    </div>

                    <h2 className={`text-4xl sm:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{transitionDelay: '200ms'}}>
                        Past education &
                        <br/>
                        credentials
                    </h2>

                    <div
                        className={`w-24 h-px bg-gradient-to-r from-primary to-transparent transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                        }`} style={{transitionDelay: '300ms'}}></div>
                </div>

                {/* Education cards */}
                <div className="space-y-8 relative">
                    {/* Connection line between cards */}
                    <div className="absolute left-8 top-16 w-px h-40 bg-border/30 hidden md:block">
                        <div
                            className={`w-px bg-gradient-to-b from-primary to-blue-400 transition-all duration-2000 ease-out ${
                                isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
                            }`}
                            style={{transitionDelay: '600ms'}}
                        ></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className={`group relative transition-all duration-1000 ease-out ${
                                    visibleCards.includes(index)
                                        ? 'opacity-100 translate-y-0 scale-100'
                                        : 'opacity-0 translate-y-12 scale-95'
                                }`}
                                style={{
                                    transitionDelay: `${400 + index * 200}ms`,
                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                {/* Education card */}
                                <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-8
                      hover:border-primary/30 hover:bg-card/60 hover:shadow-xl hover:shadow-primary/5
                      transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">

                                    {/* Status badge and icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="text-sm text-muted-foreground font-medium tracking-wider group-hover:text-primary/80 transition-colors duration-300">
                                                <div className="flex items-center gap-2">
                                                    <GraduationCap size={16} className="text-primary"/>
                                                    <span>{edu.institution}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                            <Calendar size={14}/>
                                            <span className="text-sm font-medium">{edu.period}</span>
                                        </div>
                                    </div>

                                    {/* Degree */}
                                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                                        {edu.degree}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 flex-1">
                                        {edu.description}
                                    </p>

                                    {/* Decorative bottom line */}
                                    <div
                                        className="mt-6 pt-4 border-t border-border/30 group-hover:border-primary/20 transition-colors duration-300">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-2 h-2 rounded-full bg-primary animate-pulse opacity-60"></div>
                                            <div
                                                className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                                        </div>
                                    </div>

                                    {/* Hover gradient overlay */}
                                    <div
                                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}