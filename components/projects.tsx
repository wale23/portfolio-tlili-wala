"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"

export function Projects() {
    const projects = [
        {
            title: "MenuPro Admin Dashboard",
            description: "Developed the central admin dashboard for MenuPro, managing restaurants, users, user moderation, restaurant moderation and analytics. Focused on building responsive, user-centric interfaces that streamline operations for the platform's administration team.",
            technologies: ["ReactJS", "TypeScript", "RTK Query", "Bootstrap", "Material UI"],
            category: "Web Application",
            image: "/Menupro-RestoAdmin.png",

        },
        {
            title: "MenuPro Restaurant Admin",
            description: "Built a partner-facing web app allowing restaurant owners to manage their profiles, track reservations, view reviews, and handle tables and floors efficiently. Emphasis on usability and real-time data for a seamless partner experience.",
            technologies: ["ReactJS", "TypeScript", "RTK Query", "Bootstrap", "Material UI"],
            category: "Web Application",
            image: "/img4.png",
        },
        {
            title: "Invoice Management System",
            description: "Built an internal application for managing invoices for partners, streamlining billing and tracking processes. Focused on data accuracy, reporting, and administrative efficiency.",
            technologies: ["ReactJS", "TypeScript", "Redux Toolkit", "Bootstap"],
            category: "Web Application",
            image: "/Facture-Admin.png",
        },
        {
            title: "GymPro Desktop App",
            description: "Created a desktop fitness application using React and Electron, designed to work offline with partial synchronization. Integrated with ZKTeco machines for real-time tracking and monitoring, providing a robust solution for gym management.",
            technologies: ["ReactJS", "Electron", "Redux Toolkit", "Ant Design", "ZKTeco SDK", "SQLite"],
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

    const [currentIndex, setCurrentIndex] = useState(0)
    const projectsPerPage = 4
    const totalPages = Math.ceil(projects.length / projectsPerPage)

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
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-center mb-4 text-foreground">
                    Work
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                    Here are some projects that showcase my ability to build responsive, user-friendly, and visually engaging web interfaces.
                </p>

                {/* Arrows */}
                <div className="flex justify-between mb-6">
                    <Button variant="outline" size="icon" onClick={goToPrevious} className="rounded-full border-border hover:bg-muted bg-transparent">
                        <ArrowLeft size={20} />
                    </Button>
                    <Button variant="outline" size="icon" onClick={goToNext} className="rounded-full border-border hover:bg-muted bg-transparent">
                        <ArrowRight size={20} />
                    </Button>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {getCurrentProjects().map((project, index) => (
                        <Card key={index} className="bg-card border border-border hover:shadow-lg transition-all duration-300 overflow-hidden group rounded-xl">
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-background/90 text-foreground border-border text-xs font-medium">{project.category}</Badge>
                                </div>
                            </div>

                            <CardHeader className="pb-3">
                                <CardTitle className="text-xl font-serif font-normal text-foreground">{project.title}</CardTitle>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, i) => (
                                        <Badge key={i} variant="outline" className="text-xs border-border text-muted-foreground bg-muted/50 hover:bg-muted transition-colors duration-300">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                               {/* <div className="flex gap-3">
                                    <Button size="sm" className="flex-1 bg-foreground text-background hover:bg-foreground/90 rounded-full font-medium">
                                        <ExternalLink className="w-4 h-4 mr-2" /> Voir le projet
                                    </Button>
                                    <Button size="sm" variant="outline" className="border-border hover:bg-muted rounded-full bg-transparent">
                                        <Github className="w-4 h-4"/>
                                    </Button>
                                </div>*/}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {[...Array(totalPages)].map((_, i) => (
                        <button key={i} className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === currentIndex ? 'bg-foreground' : 'bg-border hover:bg-foreground/50'}`} onClick={() => setCurrentIndex(i)}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
