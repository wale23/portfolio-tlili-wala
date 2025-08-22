"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Code, Globe, Users, ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"

export function Skills() {
    const [isVisible, setIsVisible] = useState(false)
    const [visibleSkills, setVisibleSkills] = useState<number[]>([])
    const [visibleTools, setVisibleTools] = useState<number[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)

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
        {
            name: "Docker",
            description: "Containerization platform for packaging applications and their dependencies.",
            icon: "🐳",
            docUrl: "https://docs.docker.com/"
        },
        {
            name: "VS Code",
            description: "Lightweight source code editor with powerful extensions and debugging capabilities.",
            icon: "⚡",
            docUrl: "https://code.visualstudio.com/docs"
        },
        {
            name: "Postman",
            description: "API development platform for building, testing, and documenting APIs.",
            icon: "🚀",
            docUrl: "https://learning.postman.com/docs/"
        }
    ]

    const toolsPerPage = 6
    const totalPages = Math.ceil(allTools.length / toolsPerPage)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Animate skills progressively
                    const allSkillsCount = technicalSkills.length + softSkills.length + languages.length
                    Array.from({ length: allSkillsCount }, (_, index) => {
                        setTimeout(() => {
                            setVisibleSkills(prev => [...prev, index])
                        }, index * 80)
                    })

                    // Animate tools after skills
                    setTimeout(() => {
                        getCurrentTools().forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleTools(prev => [...prev, index])
                            }, index * 150)
                        })
                    }, allSkillsCount * 80 + 500)
                }
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById("skills")
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    // Reset tool animations when page changes
    useEffect(() => {
        setVisibleTools([])
        setTimeout(() => {
            getCurrentTools().forEach((_, index) => {
                setTimeout(() => {
                    setVisibleTools(prev => [...prev, index])
                }, index * 120)
            })
        }, 100)
    }, [currentIndex])

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

    const openDocumentation = (url: string) => {
        window.open(url, '_blank')
    }

    const scrollToContact = () => {
        const element = document.getElementById("contact")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-32 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-16 w-80 h-80 bg-blue-500/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-start mb-16">
                    <div className={`inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`} style={{ transitionDelay: '100ms' }}>
                        <span>/</span>
                        <span>MY EXPERIENCE</span>
                    </div>

                    <h2 className={`text-4xl sm:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: '200ms' }}>
                        Over 2 years of experience
                        <br/>
                        building digital solutions
                    </h2>

                    <div className={`w-24 h-px bg-gradient-to-r from-primary to-transparent transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`} style={{ transitionDelay: '300ms' }}></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-20">
                    {/* TECHNICAL SKILLS */}
                    <div className={`transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`} style={{ transitionDelay: '400ms' }}>
                        <div className="flex items-center gap-2 mb-6 group">
                           {/* <Code className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />*/}
                            <h3 className="text-sm font-medium text-muted-foreground tracking-wider group-hover:text-primary transition-colors duration-300">
                                TECHNICAL SKILLS
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {technicalSkills.map((skill, i) => (
                                <div
                                    key={i}
                                    className={`text-xl font-medium text-foreground hover:text-primary transition-all duration-500 cursor-pointer hover:translate-x-2 ${
                                        visibleSkills.includes(i)
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-4'
                                    }`}
                                    style={{
                                        transitionDelay: `${500 + i * 80}ms`,
                                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    <span className="relative">
                                        {skill}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full"></div>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SOFT SKILLS */}
                    <div className={`transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`} style={{ transitionDelay: '600ms' }}>
                        <div className="flex items-center gap-2 mb-6 group">
                            {/*<Users className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />*/}
                            <h3 className="text-sm font-medium text-muted-foreground tracking-wider group-hover:text-primary transition-colors duration-300">
                                SOFT SKILLS
                            </h3>
                        </div>
                        <div className="space-y-3">
                            {softSkills.map((skill, i) => (
                                <div
                                    key={i}
                                    className={`text-xl font-medium text-foreground hover:text-primary transition-all duration-500 cursor-pointer hover:translate-x-2 ${
                                        visibleSkills.includes(technicalSkills.length + i)
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-4'
                                    }`}
                                    style={{
                                        transitionDelay: `${500 + (technicalSkills.length + i) * 80}ms`,
                                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    <span className="relative">
                                        {skill}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full"></div>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LANGUAGES */}
                    <div className={`transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`} style={{ transitionDelay: '800ms' }}>
                        <div className="flex items-center gap-2 mb-6 group">
                           {/* <Globe className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />*/}
                            <h3 className="text-sm font-medium text-muted-foreground tracking-wider group-hover:text-primary transition-colors duration-300">
                                LANGUAGES
                            </h3>
                        </div>
                        <div className="space-y-3">
                            {languages.map((language, i) => (
                                <div
                                    key={i}
                                    className={`text-xl font-medium text-foreground hover:text-primary transition-all duration-500 cursor-pointer hover:translate-x-2 ${
                                        visibleSkills.includes(technicalSkills.length + softSkills.length + i)
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-4'
                                    }`}
                                    style={{
                                        transitionDelay: `${500 + (technicalSkills.length + softSkills.length + i) * 80}ms`,
                                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    <span className="relative">
                                        {language}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full"></div>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tools Section */}
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-8">
                        <div className={`transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '1000ms' }}>
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

                        <div className={`flex gap-2 transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                        }`} style={{ transitionDelay: '1100ms' }}>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full border-border hover:bg-muted bg-transparent hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
                                onClick={goToPrevious}
                            >
                                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all duration-300 group"
                                onClick={goToNext}
                            >
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </div>
                    </div>

                    {/* Tools Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] mb-8">
                        {getCurrentTools().map((tool, index) => (
                            <div
                                key={`${currentIndex}-${index}`}
                                className={`border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-700 group bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 ${
                                    visibleTools.includes(index)
                                        ? 'opacity-100 translate-y-0 scale-100'
                                        : 'opacity-0 translate-y-8 scale-95'
                                }`}
                                style={{
                                    transitionDelay: `${index * 120}ms`,
                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                <div className="text-3xl mb-4  transition-transform duration-300">
                                    {tool.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                    {tool.name}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                                    {tool.description}
                                </p>
                                <button
                                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 text-sm group-hover:gap-3 hover:scale-105"
                                    onClick={() => openDocumentation(tool.docUrl)}
                                >
                                    <span>View documentation</span>
                                    <ArrowUpRight size={14} className="transition-transform duration-300 hover:scale-110" />
                                    <div className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300"></div>
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
                <div className={`flex justify-end transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '1300ms' }}>
                    <button
                        className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300 group hover:scale-105"
                        onClick={scrollToContact}
                    >
                        <span className="font-medium">Get in touch</span>
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300"/>
                        <div className="w-16 h-px bg-foreground group-hover:w-20 group-hover:bg-primary transition-all duration-300"></div>
                    </button>
                </div>


            </div>
        </section>
    )
}