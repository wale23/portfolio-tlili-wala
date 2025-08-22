"use client"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function Experience() {
    const [isVisible, setIsVisible] = useState(false)
    const [visibleCards, setVisibleCards] = useState<number[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Animate cards one by one
                    experiences.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleCards(prev => [...prev, index])
                        }, index * 300)
                    })
                }
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById("experience")
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    const experiences = [
        {
            title: "Frontend Developer",
            company: "Visto Consulting",
            period: "JUN 2023 / PRESENT",
            location: "Sousse, Tunisia",
            description:
                "Developed multi-domain SaaS applications (restaurant, fitness, financial management) using ReactJS, TypeScript, and UI libraries (Bootstrap, Ant Design, MUI).\n\n" +
                "Designed complex interfaces, including admin dashboards, billing systems, and desktop solutions using ElectronJS.\n\n" +
                "Implemented advanced state management with Redux Toolkit and RTK Query for workflows involving invoice creation, payment tracking, and biometric management.\n\n" +
                "Integrated REST APIs and connected to hardware devices (ZKTeco SDK) for real-time data collection.\n\n" +
                "Optimized user experience with reusable components, responsive design, and performant offline workflows using Sequelize ORM with SQLite (20+ tables).\n\n" +
                "Collaborated closely with product and backend teams (NestJS/Odoo) to ensure technical consistency across web, desktop, and mobile platforms.\n\n" +
                "Developed modular and scalable solutions tailored to the specific needs of each business domain.",
            technologies: ["ReactJS", "TypeScript", "Redux Toolkit", "ElectronJS", "Ant Design", "Bootstrap", "Sequelize ORM", "SQLite", "NestJS", "Odoo"],
            icon: "🚀",
        },
        {
            title: "Mobile Development Intern",
            company: "GPRO Consulting",
            period: "FEB 2023 / JUN 2023",
            location: "Sousse, Tunisia",
            description:
                "Developed a mobile application for factory claims management using Flutter and Spring Boot.\n\n" +
                "Built the front-end in Flutter, creating simple and efficient interfaces for reporting, tracking, and reviewing claims.\n\n" +
                "Designed and implemented the back-end with Spring Boot, including REST APIs, user management, and claim status workflows.\n\n" +
                "Set up and modeled the PostgreSQL database to support business entities.\n\n" +
                "Integrated automated notifications based on claim status updates.\n\n" +
                "Participated in testing, bug fixes, and continuous improvement.\n\n" +
                "Prepared technical documentation and provided user support.",
            technologies: ["Flutter", "Spring Boot", "PostgreSQL", "REST API", "Notifications"],
            icon: "📱",
        },
        {
            title: "Android Development Intern",
            company: "COFICAB Tunisia",
            period: "AUG 2022 / SEP 2022",
            location: "Tunis, Tunisia",
            description:
                "Designed and developed an Android application to manage coil transactions across production areas following FIFO logic.\n\n" +
                "Implemented key functionalities including assignment, consultation, and deletion of transactions via barcode scanning.\n\n" +
                "Developed using Java and Android Studio, connecting to a SQL Server database for secure data storage and traceability.\n\n" +
                "Ensured compliance with industrial requirements: reliability, speed, and user-friendly operation in field conditions.",
            technologies: ["Java", "Android Studio", "SQL Server", "Barcode Scanning"],
            icon: "🔧",
        }
    ]

    const scrollToContact = () => {
        const element = document.getElementById("contact")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-start mb-16">
                    <div className={`inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`} style={{ transitionDelay: '100ms' }}>
                        <span>/</span>
                        <span>MY EXPERIENCE</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                        Companies and projects
                    </h2>
                    <div className={`w-24 h-px bg-gradient-to-r from-primary to-transparent transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`} style={{ transitionDelay: '300ms' }}></div>
                </div>

                {/* Experience timeline */}
                <div className="space-y-0 relative">
                    {/* Main timeline line - animated progressively */}
                    <div className="absolute left-12 top-24 w-px bg-border/30">
                        <div
                            className={`w-px bg-gradient-to-b from-primary via-blue-400 to-transparent transition-all duration-2000 ease-out ${
                                isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
                            }`}
                            style={{ transitionDelay: '500ms' }}
                        ></div>
                    </div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            <div className={`flex items-start gap-8 py-8 transition-all duration-1000 ease-out ${
                                visibleCards.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                            }`}>
                                {/* Company icon with pulse effect */}
                                <div className="flex items-center gap-4 min-w-0 flex-shrink-0">
                                    <div className={`w-12 h-12 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center text-xl relative hover:border-primary/60 transition-all duration-500 group ${
                                        visibleCards.includes(index) ? 'animate-pulse' : ''
                                    }`}>
                                        {exp.icon}
                                        {/* Ripple effect */}
                                        <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-0 group-hover:opacity-100"></div>
                                    </div>
                                    <div className="text-sm text-muted-foreground font-medium hover:text-primary transition-colors duration-300">
                                        {exp.company}
                                    </div>
                                </div>

                                {/* Content card */}
                                <div className="flex-1 min-w-0 group">
                                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                                {exp.title}
                                            </h3>
                                            <div className="text-sm text-muted-foreground font-medium bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                                {exp.period}
                                            </div>
                                        </div>

                                        <ul className="list-disc list-inside text-muted-foreground mb-6 max-w-3xl space-y-1">
                                            {exp.description.split("\n").filter(line => line.trim() !== "").map((line, i) => (
                                                <li key={i} className="hover:text-foreground transition-colors duration-300">
                                                    {line}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, i) => (
                                                <Badge
                                                    key={i}
                                                    variant="secondary"
                                                    className="bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-pointer"
                                                    style={{ transitionDelay: `${i * 50}ms` }}
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Get in touch button */}
                <div className={`flex justify-end mt-16 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '1200ms' }}>
                    <button
                        className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-all duration-300 group hover:scale-105"
                        onClick={scrollToContact}
                    >
                        <span className="text-lg font-medium">Get in touch</span>
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300"/>
                        <div className="w-16 h-px bg-primary group-hover:w-20 transition-all duration-300"></div>
                    </button>
                </div>
            </div>
        </section>
    )
}