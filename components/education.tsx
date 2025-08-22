export function Education() {
    const education = [
        {
            institution: "POLYTECHNIQUE SOUSSE",
            period: "SEP 2023",
            degree: "Engineering Program: Computer Science",
            description: "Ongoing evening program covering advanced computer science and software engineering concepts.",
        },
        {
            institution: "ISSAT SOUSSE",
            period: "JUN 2023",
            degree: "Bachelor's Degree in Computer Systems Engineering",
            description: "Comprehensive training in software development, databases, and computer systems.",
        },
    ]

    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-start mb-16">
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                        <span>/</span>
                        <span>MY EXPERIENCE</span>
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">
                        Past education &
                        <br/>
                        credentials
                    </h2>
                    <div className="section-divider"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <div key={index} className="space-y-4">
                            <div className="text-sm text-muted-foreground font-medium tracking-wider">
                                {edu.institution} / {edu.period}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                            <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
