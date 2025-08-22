"use client"

import {useState, useEffect} from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {ArrowLeft, ArrowRight, ExternalLink, Github} from "lucide-react"

export function Projects() {
    const [isVisible, setIsVisible] = useState(false)
    const [visibleCards, setVisibleCards] = useState<number[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const projects = [
        {
            title: "MenuPro Admin Dashboard",
            description: "Developed the central admin dashboard for MenuPro, managing restaurants, users, user moderation, restaurant moderation and analytics. Focused on building responsive, user-centric interfaces that streamline operations for the platform's administration team.",
            technologies: ["ReactJS", "TypeScript", "Vite", "RTK Query", "Bootstrap", "Material UI"],
            category: "Web Application",
            image: "/Menupro-RestoAdmin.png",
        },
        {
            title: "MenuPro Restaurant Admin",
            description: "Built a partner-facing web app allowing restaurant owners to manage their profiles, track reservations, view reviews, and handle tables and floors efficiently. Emphasis on usability and real-time data for a seamless partner experience.",
            technologies: ["ReactJS", "TypeScript", "Vite", "RTK Query", "Bootstrap", "Material UI"],
            category: "Web Application",
            image: "/img4.png",
        },
        {
            title: "Invoice Management System",
            description: "Built an internal application for managing invoices for partners, streamlining billing and tracking processes. Focused on data accuracy, reporting, and administrative efficiency.",
            technologies: ["ReactJS", "TypeScript", "Webpack", "Redux Toolkit", "Bootstap"],
            category: "Web Application",
            image: "/Facture-Admin.png",
        },
        {
            title: "GymPro Desktop App",
            description: "Created a desktop fitness application using React and Electron, designed to work offline with partial synchronization. Integrated with ZKTeco machines for real-time tracking and monitoring, providing a robust solution for gym management.",
            technologies: ["ReactJS", "Electron", "Parcel", "Redux Toolkit", "Ant Design", "ZKTeco SDK", "SQLite"],
            category: "Desktop Application",
            image: "/Dashboard.png",
        },
        {
            title: "Factory Claims App",
            description: "Developed a Flutter mobile app for managing factory claims with a Spring Boot backend. Designed intuitive interfaces for submitting, tracking, and reviewing claims, ensuring smooth workflows for factory employees.",
            technologies: ["Flutter", "Spring Boot", "PostgreSQL", "REST API"],
            category: "Mobile Application",
            image: "/img_3.png",
        },
    ]

    const projectsPerPage = 4
    const totalPages = Math.ceil(projects.length / projectsPerPage)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Animate current projects one by one
                    const currentProjects = getCurrentProjects()
                    currentProjects.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleCards(prev => [...prev, index])
                        }, index * 200)
                    })
                }
            },
            {threshold: 0.1}
        )

        const element = document.getElementById("projects")
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    // Reset card animations when page changes
    useEffect(() => {
        setVisibleCards([])
        const currentProjects = getCurrentProjects()
        currentProjects.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCards(prev => [...prev, index])
            }, index * 150)
        })
    }, [currentIndex])

    const getCurrentProjects = () => {
        const start = currentIndex * projectsPerPage
        return projects.slice(start, start + projectsPerPage)
    }

    const goToPrevious = () => {
        setCurrentIndex(prev => prev === 0 ? totalPages - 1 : prev - 1)
    }

    const goToNext = () => {
        setCurrentIndex(prev => prev === totalPages - 1 ? 0 : prev + 1)
    }

    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse"
                 style={{animationDelay: '3s'}}></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div
                        className={`inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                        }`} style={{transitionDelay: '100ms'}}>
                        <span>/</span>
                        <span>MY PORTFOLIO</span>
                    </div>

                    <h2 className={`text-3xl sm:text-4xl font-serif font-normal mb-4 text-foreground transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{transitionDelay: '200ms'}}>
                        Work
                    </h2>

                    <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{transitionDelay: '300ms'}}>
                        Here are some projects that showcase my ability to build responsive, user-friendly, and visually
                        engaging web interfaces.
                    </p>

                    {/* Decorative line */}
                    <div
                        className={`w-20 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto mt-8 transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                        }`} style={{transitionDelay: '400ms'}}></div>
                </div>

                {/* Navigation arrows */}
                <div className={`flex justify-between mb-8 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{transitionDelay: '500ms'}}>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={goToPrevious}
                        className="rounded-full border-border hover:bg-muted bg-transparent hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300"/>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={goToNext}
                        className="rounded-full border-border hover:bg-muted bg-transparent hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
                    >
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300"/>
                    </Button>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {getCurrentProjects().map((project, index) => (
                        <Card key={index}
                              className="bg-card border border-border hover:shadow-lg transition-all duration-300 overflow-hidden group rounded-xl">
                            <div className="relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-50 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <Badge
                                        className="bg-background/90 backdrop-blur-sm text-foreground border-border text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                        {project.category}
                                    </Badge>
                                </div>

                                {/* Hover overlay with gradient */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            <CardHeader className="pb-3">
                                <CardTitle
                                    className="text-xl font-serif font-normal text-foreground group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <p className="text-muted-foreground leading-relaxed mb-4 text-sm group-hover:text-foreground/80 transition-colors duration-300">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, i) => (
                                        <Badge
                                            key={i}
                                            variant="outline"
                                            className="text-xs border-border text-muted-foreground bg-muted/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                                            style={{transitionDelay: `${i * 50}ms`}}
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Optional: Uncomment if you want project links */}
                                {/*
                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button size="sm" className="flex-1 bg-foreground text-background hover:bg-foreground/90 rounded-full font-medium hover:scale-105 transition-all duration-300">
                                        <ExternalLink className="w-4 h-4 mr-2" /> Voir le projet
                                    </Button>
                                    <Button size="sm" variant="outline" className="border-border hover:bg-muted rounded-full bg-transparent hover:scale-105 transition-all duration-300">
                                        <Github className="w-4 h-4"/>
                                    </Button>
                                </div>
                                */}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {[...Array(totalPages)].map((_, i) => (
                        <button key={i}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === currentIndex ? 'bg-foreground' : 'bg-border hover:bg-foreground/50'}`}
                                onClick={() => setCurrentIndex(i)}/>
                    ))}
                </div>


            </div>
        </section>
    )
}