"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Download } from "lucide-react"

export function Hero() {
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
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-primary rounded-full animate-slide-up delay-100"></div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-slide-up delay-200">
                Hello,
                <br />
                <span className="text-gradient">I'm Wala Tlili</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-slide-up delay-300">
                  Front-end Developer with expertise in ReactJS, experienced in designing and developing modern, responsive, and high-performing web applications.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-12 animate-slide-up delay-400">
              <div>
                <div className="text-4xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">
                  Years of
                  <br />
                  experience
                </div>
              </div>
             {/* <div>
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Successful
                  <br />
                  projects
                </div>
              </div>*/}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3 text-sm text-muted-foreground animate-slide-up delay-500">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span>tliliwala390@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>+216 28470224</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span>Tunisie</span>
              </div>
            </div>

              <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-3 font-medium animate-slide-up delay-700 group"
              >
                  <a href="/Wala-Tlili-resume.pdf" download>
                      <Download size={18} className="mr-2 group-hover:animate-bounce" />
                      Download CV
                  </a>
              </Button>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-glow">
                <img src="/pdp.jpeg" alt="Wala Tlili" className="w-full h-full object-cover" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
