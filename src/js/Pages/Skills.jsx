import React from "react"
import {motion} from "framer-motion"

import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostman,
  SiTailwindcss,
  SiCss3,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiVisualstudio,
  SiVite,
  SiFramer,
  SiVuedotjs,
  SiNodedotjs,
  SiCanva,
  SiJest,
  SiUbuntu,
  SiWindows,
  SiJsonwebtokens,
  SiGnometerminal,
} from "react-icons/si"
import {FaGithub, FaBootstrap, FaFigma, FaSass} from "react-icons/fa"

function Skills() {
  const SkillsList = [
    {text: "Ubuntu", icon: <SiUbuntu size={30} />},
    {text: "Windows", icon: <SiWindows size={30} />},
    {text: "Git Hub", icon: <FaGithub size={30} />},
    {text: "Canva", icon: <SiCanva size={30} />},
    {text: "VS Code", icon: <SiVisualstudio size={30} />},
    {text: "JWT", icon: <SiJsonwebtokens size={30} />},
    {text: "Terminal", icon: <SiGnometerminal size={30} />},
    {text: "JavaScript", icon: <SiJavascript size={30} />},
    {text: "TypeScript", icon: <SiTypescript size={30} />},
    {text: "Node.js", icon: <SiNodedotjs size={30} />},
    {text: "Next.js", icon: <SiNextdotjs size={30} />},
    {text: "Framer", icon: <SiFramer size={30} />},
    {text: "Vite", icon: <SiVite size={30} />},
    {text: "vue", icon: <SiVuedotjs size={30} />},
    {text: "HTML 5", icon: <SiHtml5 size={30} />},
    {text: "CSS", icon: <SiCss3 size={30} />},
    {text: "SASS", icon: <FaSass size={30} />},
    {text: "Bootstrap", icon: <FaBootstrap size={30} />},
    {text: "Tailwind", icon: <SiTailwindcss size={30} />},
    {text: "Figma", icon: <FaFigma size={30} />},
    {text: "REACT", icon: <SiReact size={30} />},
    {text: "Mongo DB", icon: <SiMongodb size={30} />},
    {text: "Express", icon: <SiExpress size={30} />},
    {text: "Post Man", icon: <SiPostman size={30} />},
  ]
  return (
    <section
      id="skills"
      className="  min-h-full  flex  overflow-hidden  flex-col max-width-full justify-around items-center mx-auto py-10 px-4 text-left bg-stone-100 dark:bg-[rgb(36,36,36)] snap-center  "
    >
      <h2 className="text-center text-5xl  py-20 font-medium text-[#26282b] dark:text-red-50 ">
        Fähigkeiten{" "}
      </h2>
      <div className="w-full m-auto  md:w-7/12 p-10 md:px-20 h-full grid grid-cols-3 md:grid md:grid-cols-5 gap-8 md:gap-24     ">
        {SkillsList.map((item, index) => (
          <motion.div
            initial={{y: -20, opacity: 0}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
            viewport={{once: true}}
            key={index}
            className=" w-32  lg:w-40  h-32 lg:h-40  flex flex-col  gap-6 justify-center items-center rounded-full   text-[#6683C2]    m-auto "
          >
            <div>{item.icon}</div>
            <p className=" text-sm md:text-xl ">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
