"use client"
import {Button} from "@/components/ui/button"
import {ArrowLeft, ArrowRight, Code, Globe, Users} from "lucide-react"
import {useState} from "react";

export function Skills() {
    const technicalSkills = [
        "JavaScript (ES6+)",
        "TypeScript",
        "Java",
        "ReactJS",
        "NextJS",
        "Flutter",
        "Spring Boot",
        "ElectronJS",
        "PostgreSQL",
        "SQL Server",
        "SQLite",
        "Redux Toolkit",
        "API REST",
        "Android Studio",
        "WebStorm"
    ]

    const softSkills = [
        "Project Management",
        "Client Communication",
        "Cross-functional Collaboration",
        "Mentoring & Coaching",
        "Effective Presentation",
        "Time Management",
        "Problem Solving"
    ]

    const languages = [
        "Arabic (Native)",
        "French (Fluent)",
        "English (Intermediate)"
    ]

    const allTools = [
        {
            name: "WebStorm",
            description: "Professional IDE for JavaScript and web development with intelligent code completion and debugging.",
            icon: "💻",
            docUrl: "https://www.jetbrains.com/webstorm/documentation/"
        },
        {
            name: "GitHub",
            description: "Version control and collaboration platform for managing code repositories and tracking changes.",
            icon: "🐙",
            docUrl: "https://docs.github.com/"
        },
        {
            name: "Android Studio",
            description: "Official IDE for Android app development with comprehensive tools for mobile development.",
            icon: "📱",
            docUrl: "https://developer.android.com/studio/intro"
        },
        {
            name: "Figma",
            description: "Collaborative interface design tool for creating user interfaces and prototypes.",
            icon: "🎨",
            docUrl: "https://help.figma.com/"
        },
        {
            name: "Jira",
            description: "Project management tool for agile teams to plan, track, and release software.",
            icon: "📊",
            docUrl: "https://support.atlassian.com/jira-software/"
        },
        {
            name: "Slack",
            description: "Messaging platform for team collaboration, file sharing, and integrations.",
            icon: "💬",
            docUrl: "https://slack.com/help"
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const toolsPerPage = 3
    const totalPages = Math.ceil(allTools.length / toolsPerPage)

    const getCurrentTools = () => {
        const start = currentIndex * toolsPerPage
        return allTools.slice(start, start + toolsPerPage)
    }

    const goToPrevious = () => {
        setCurrentIndex(prev => prev === 0 ? totalPages - 1 : prev - 1)
    }

    const goToNext = () => {
        setCurrentIndex(prev => prev === totalPages - 1 ? 0 : prev + 1)
    }

    const openDocumentation = (url : string) => {
        window.open(url, '_blank')
    }
    const scrollToContact = () => {
        const element = document.getElementById("contact")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-start mb-16">
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                        <span>/</span>
                        <span>MY EXPERIENCE</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                        Over 2 years of experience
                        <br/>
                        building digital solutions
                    </h2>
                    <div className="w-24 h-px bg-border"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-12 mb-20">
                    {/* Technical Skills */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Code className="w-4 h-4 text-muted-foreground" />
                            <h3 className="text-sm font-medium text-muted-foreground tracking-wider">TECHNICAL SKILLS</h3>
                        </div>
                        <div className="space-y-3">
                            {technicalSkills.map((skill, i) => (
                                <div key={i} className="text-foreground hover:text-primary transition-colors duration-200 cursor-default">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <h3 className="text-sm font-medium text-muted-foreground tracking-wider">SOFT SKILLS</h3>
                        </div>
                        <div className="space-y-3">
                            {softSkills.map((skill, i) => (
                                <div key={i} className="text-foreground hover:text-primary transition-colors duration-200 cursor-default">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Globe className="w-4 h-4 text-muted-foreground" />
                            <h3 className="text-sm font-medium text-muted-foreground tracking-wider">LANGUAGES</h3>
                        </div>
                        <div className="space-y-3">
                            {languages.map((language, i) => (
                                <div key={i} className="text-foreground hover:text-primary transition-colors duration-200 cursor-default">
                                    {language}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tools Section */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                                <span>/</span>
                                <span>MY TOOLS</span>
                            </div>
                            <h2 className="text-4xl font-bold text-foreground">
                                Tools I use for
                                <br/>
                                development
                            </h2>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full border-border hover:bg-muted bg-transparent"
                                onClick={goToPrevious}
                            >
                                <ArrowLeft size={20}/>
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                                onClick={goToNext}
                            >
                                <ArrowRight size={20}/>
                            </Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 min-h-[320px]">
                        {getCurrentTools().map((tool, index) => (
                            <div
                                key={`${currentIndex}-${index}`}
                                className="border border-border rounded-lg p-8 hover:border-foreground/20 transition-all duration-300 group bg-transparent animate-in fade-in slide-in-from-bottom-4"
                            >
                                <div className="text-3xl mb-6">
                                    {tool.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-4">{tool.name}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm mb-8">
                                    {tool.description}
                                </p>
                                <button
                                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group-hover:gap-3 duration-300 text-sm"
                                    onClick={() => openDocumentation(tool.docUrl)}
                                >
                                    <span>View documentation</span>
                                    <ArrowRight size={14}/>
                                    <div className="w-8 h-px bg-foreground"></div>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Pagination indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                    i === currentIndex ? 'bg-foreground' : 'bg-border hover:bg-foreground/50'
                                }`}
                                onClick={() => setCurrentIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                {/* Get in touch */}
                <div className="flex justify-end">
                    <button className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group" onClick={scrollToContact} >
                        <span className="font-medium">Get in touch</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                        <div className="w-16 h-px bg-foreground"></div>
                    </button>
                </div>
            </div>
        </section>
    )
}