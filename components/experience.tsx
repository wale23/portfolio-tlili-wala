"use client"
import {Badge} from "@/components/ui/badge"

import {ArrowRight} from "lucide-react"

export function Experience() {
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
        ,
    ]
    const scrollToContact = () => {
        const element = document.getElementById("contact")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-start mb-16">
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                        <span>/</span>
                        <span>MY EXPERIENCE</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                        I've worked with some
                        <br/>
                        amazing companies
                    </h2>
                    <div className="section-divider"></div>
                </div>

                {/* Experience timeline */}
                <div className="space-y-0">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            {/* Timeline line */}
                            {index < experiences.length - 1 &&
                                <div className="absolute left-12 top-24 w-px h-32 bg-border"></div>}

                            <div className="flex items-start gap-8 py-8">
                                {/* Company icon */}
                                <div className="flex items-center gap-4 min-w-0 flex-shrink-0">
                                    <div
                                        className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-xl">
                                        {exp.icon}
                                    </div>
                                    <div className="text-sm text-muted-foreground font-medium">{exp.company}</div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div
                                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                                        <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                                        <div className="text-sm text-muted-foreground font-medium">{exp.period}</div>
                                    </div>

                                    <ul className="list-disc list-inside text-muted-foreground mb-6 max-w-3xl">
                                        {exp.description.split("\n").filter(line => line.trim() !== "").map((line, i) => (
                                            <li key={i}>{line}</li>
                                        ))}
                                    </ul>


                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <Badge
                                                key={i}
                                                variant="secondary"
                                                className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Get in touch button */}
                <div className="flex justify-end mt-16">
                    <button
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                        onClick={scrollToContact}>
                        <span className="text-lg font-medium">Get in touch</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                        <div className="w-16 h-px bg-primary"></div>
                    </button>
                </div>
            </div>
        </section>
    )
}
