export function Clients() {
  const clients = [
    { name: "Visto", icon: "🏢" },
    { name: "GPRO", icon: "🔄" },
    { name: "COFICAB", icon: "🏭" },
    { name: "Startup", icon: "🚀" },
    { name: "Enterprise", icon: "🏢" },
    { name: "Agency", icon: "🎨" },
    { name: "Studio", icon: "🎬" },
    { name: "Institute", icon: "🎓" },
    { name: "Organization", icon: "🌐" },
    { name: "Application", icon: "📱" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card border border-border rounded-3xl p-12 text-center">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6">
            <span>/</span>
            <span>MY PAST CLIENTS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">
            Brand & companies I have
            <br />
            collaborated with
          </h2>

          {/* Clients grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
              >
                <div className="text-2xl group-hover:scale-110 transition-transform">{client.icon}</div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
            <span className="text-lg font-medium">Get in touch</span>
            <div className="w-16 h-px bg-primary"></div>
          </button>
        </div>
      </div>
    </section>
  )
}
