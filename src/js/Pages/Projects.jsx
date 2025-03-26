import ProjectCard from "../Component/ProjectCard"

function Projects() {
  const items = [
    {
      title: "Green Weehls",
      img: "/Green-Wheels.png",
      skillsUsed: ["Express", "REACT", "NodeJs", "MongoDB", "Vite", "Tailwind"],
      live: "https://peaceful-torrone-3ee56f.netlify.app/",
      src: "https://github.com/orgs/Final-Project-taag/repositories",
    },
    {
      title: "JS Todo App ",
      img: "/myTod.png",
      skillsUsed: ["JavaScript", "CSS", "HTML"],
      live: "https://scintillating-sorbet-66ccb9.netlify.app/",
      src: "https://github.com/Ahmad3ud/todo-app",
    },

    {
      title: "React Claculator ",
      img: "/calc.png",
      skillsUsed: ["HTML", "SASS", "REACT"],
      live: "https://symphonious-dodol-01c4eb.netlify.app/",
      src: "https://github.com/Ahmad3ud/react-calculator",
    },

    {
      title: "Fridge mangement App",
      img: "/fridge-management_screenshot.png",
      skillsUsed: ["JavaScript", "CSS", "HTML"],
      live: "https://euphonious-zuccutto-10d367.netlify.app/",
      src: "https://github.com/Ahmad3ud/fridge-mangement-app",
    },
  ]

  return (
    <div
      id="projects"
      className=" min-h-full  flex  overflow-hidden  flex-col  justify-around items-center mx-auto py-20 px-4 text-left bg-stone-100 dark:bg-[rgb(30,30,30)] snap-center "
    >
      <h2 className=" text-center text-[3rem]   md:py-10 font-medium text-[#26282b] dark:text-stone-50   ">
        Projects
      </h2>

      <div className="relative flex flex-col justify-center items-center w-screen   xl:w-7/12   px-8  py-10 gap-8 md:gap-20    ">
        {items.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </div>
  )
}

export default Projects
