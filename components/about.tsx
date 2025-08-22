export function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Story content */}
                    <div>
                        <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                            <span>/</span>
                            <span>MY STORY</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                            From Mobile Apps
                            <br />
                            to Web Development
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            My journey in development began with mobile applications during my internships, where I gained hands-on experience and learned the fundamentals of building functional and reliable software. Over time, I specialized in ReactJS, transitioning to modern, responsive web interfaces. Today, I focus on creating user-centric designs that are both functional and visually engaging, combining clean code with a strong eye for detail.
                        </p>

                    </div>


                    {/* Right side - Image */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/web&mobile.png"
                                alt="Developer workspace with code"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating elements */}
                        {/*<div className="absolute -top-4 -left-4 w-40 h-50 rounded-2xl overflow-hidden shadow-lg">
                            <img src="" alt="Coffee cup" className="w-full h-full object-cover"/>
                        </div>*/}
                       {/* <div className="absolute -top-4 -right-4 w-40 h-50 rounded-2xl overflow-hidden shadow-lg">
                            <img src="/mobile.jpg" alt="Design mockups"
                                 className="w-full h-full object-cover"/>
                        </div>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}
