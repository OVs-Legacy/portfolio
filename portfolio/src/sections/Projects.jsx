export default function Projects() {
    const projects = [
        { title: "E-Commerce App", tech: "React, Node.js" },
        { title: "AI Chatbot", tech: "Python, TensorFlow" },
    ]

    return (
        <section id="projects" className="min-h-screen pt-20 bg-teal-950">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl mb-8 text-white">Track List</h2>
                <div className="space-y-6">
                    {projects.map((project, i) => (
                        <div key={i} className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all cursor-pointer">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-400">{project.tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}