export default function Projects() {
    const projects = [
        { title: "Party Morph", company: "DogFood Studios", tech: "Godot, C#, Figma", description: "" },
        { title: "DICE", company: "Municipality of Eindhoven", tech: "Figma, TailwindCSS, JS, HTML, CSS", description: "" },
        { title: "LiberCraft", company: "LiberCraft", tech: "SolidJS, TailwindCSS, JS, HTML, CSS, Figma", description: "" },
        { title: "Cat Armor", company: "OV's Legacy", tech: "Java, Mixin", description: "" },
        { title: "Grandma's Milk", company: "The Milkers", tech: "Unity, C#", description: "" },
    ]

    return (
        <section id="projects" className="min-h-screen pt-20 bg-linear-to-br from-teal-950 to-teal-900">
            {projects.map((project, i) => (
                <div key={i} className="!p-6  text-white">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex flex-col">
                        <p className="text-sm !px-1">{project.company}</p>
                        <p className="text-sm !px-1">{project.tech}</p>
                    </div>
                    <p className="">{project.description}</p>
                </div>
            ))}
        </section>
    )
}