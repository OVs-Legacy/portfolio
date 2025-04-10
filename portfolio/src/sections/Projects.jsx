export default function Projects() {
    const projects = [
        { title: "E-Commerce App", tech: "React, Node.js" },
        { title: "AI Chatbot", tech: "Python, TensorFlow" },
    ]

    return (
        <section id="projects" className="min-h-screen pt-20 bg-linear-to-br from-teal-950 to-teal-900">
            {projects.map((project, i) => (
                <div key={i} className="!p-6 h-screen">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-400">{project.tech}</p>
                </div>
            ))}
        </section>
    )
}