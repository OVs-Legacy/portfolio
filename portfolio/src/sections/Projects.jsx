export default function Projects() {
  const projects = [
    {
      title: "Party \n Morph",
      company: "DogFood Studios",
      tech: "Godot, C#, Figma",
      description:
        "Party Morph, a four player (couch) co-op party game set on a distant planet. " +
        "Its inhabitants are holding a presidential election, which is decided by a series of mini-games. " +
        "However, these aliens have the power to transform their planet to their liking, setting the stage for all sorts of wacky scenarios. \n\n" +
        "Party Morph is the result of a 7th semester group project, involving a mix of UX, C# programming, and game design. " +
        "The challenge was to create a product with the actual intention of releasing it.",
    },
    {
      title: "DICE",
      company: "Municipality of Eindhoven",
      tech: "Figma, TailwindCSS, JS, HTML, CSS",
      description:
        "Data Inventory and Classification Eindhoven, or DICE for short, is a web application for companies based in Eindhoven to register and manage the data of their company. " +
        "The web application is made with a PHP framework that generates the web pages, but the look and feel were outdated; it looked like something from the Windows-XP era.\n\n" +
        "My job was to create an entirely new look and feel for the application, making sure I knew what the user wanted to ensure a better experience overall.",
    },
    {
      title: "LiberCraft",
      company: "LiberCraft",
      tech: "SolidJS, TailwindCSS, JS, HTML, CSS, Figma",
      description:
        "LiberCraft is a landing page for a Minecraft server and community. The page contains all the key information about the community and highlights various aspects of what they stand for.\n\n" +
        "The landing page is made in SolidJS and uses several custom scripts and visuals for an entertaining page. Using randomly generated quotes to create card-like effects for staff details.",
    },
    {
      title: "Cat Armor",
      company: "OV's Legacy",
      tech: "Java, Mixin",
      description:
        "Cat Armor is a mod for Minecraft. By using Mixin and new objects, I managed to alter the behavior of cats and gave them armor like their wolf counterpart. " +
        "This armor behaves as you would expect. It absorbs physical damage until it breaks. You can repair it, color it, and remove it again. The armor uses a custom model that I made and textured personally.",
    },
    {
      title: "Grandma's Milk",
      company: "The Milkers",
      tech: "Unity, C#",
      description:
        "Grandma's Milk is a two-player couch co-op platformer with two players. " +
        "Your grandmother wishes to use her milk for a bowl of cereal, but the milk is expired. It is now up to you and your brother to quickly get a fresh bottle before she will try to use water instead. " +
        "But oh-no, the trains are on a strike, you will have to parkour from the city to your Grandmothers home, which is several areas away. Setting the stage for a wide variety of environments and fun challenges.\n\n" +
        "Grandma's Milk is the result of a two-man, 4th semester project involving a mix of game design, C# programming, and level design. It was created within a six-week time period.",
    },
  ];

  const positions = ["right", "bottom", "left", "top"];

  return (
    <section
      id="projects"
      className="font-archivo relative z-10 min-h-screen pt-20"
    >
      {projects.map((project, i) => {
        const position = positions[i % positions.length];
        const baseClasses = "text-white flex absolute";
        const positionClasses = {
          top: "h-[50%] w-full top-0 justify-center",
          bottom: "h-[50%] w-full bottom-0 justify-center",
          left: "w-[50%] h-full top-0 left-0 justify-start items-center",
          right: "w-[50%] h-full top-0 right-0 justify-end items-center",
        };
        const textContainerClasses = {
          top: "!mt-[5%] text-center",
          bottom: "!mt-[10%] text-center",
          left: "!ml-[30%] text-left",
          right: "!mr-[30%] text-right",
        };
        return (
          <div className="relative h-screen">
            <div
              key={i}
              className={`${baseClasses} ${positionClasses[position]}`}
            >
              <div
                className={`max-w-[500px] ${textContainerClasses[position]}`}
              >
                <h3 className="!text-8xl font-semibold whitespace-pre-line text-red-500">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between !py-2 text-red-300">
                  <p className="!text-md">{project.company}</p>
                  <p className="!text-md">{project.tech}</p>
                </div>
                <p className="text-left text-xl whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
