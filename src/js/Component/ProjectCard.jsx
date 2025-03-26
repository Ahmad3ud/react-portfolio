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
  SiVite,
  SiFramer,
} from "react-icons/si"
import {FaNodeJs, FaGithub, FaBootstrap, FaFigma, FaSass} from "react-icons/fa"

export default function ProjectCard({project}) {
  const navigateTo = (link) => {
    if (link.length) {
      window.location.href = link
    }
  }
  const skillsData = {
    JavaScript: <SiJavascript size={25} />,
    TypeScript: <SiTypescript size={25} />,
    NextJs: <SiNextdotjs size={25} />,
    Vite: <SiVite size={25} />,
    HTML: <SiHtml5 size={25} />,
    CSS: <SiCss3 size={25} />,
    SASS: <FaSass size={25} />,
    Bootstrap: <FaBootstrap size={25} />,
    Tailwind: <SiTailwindcss size={25} />,
    Figma: <FaFigma size={25} />,
    REACT: <SiReact size={25} />,
    MongoDB: <SiMongodb size={25} />,
    NodeJs: <FaNodeJs size={25} />,
    Express: <SiExpress size={25} />,
    PostMan: <SiPostman size={25} />,

    GitHub: <FaGithub size={25} />,
    FramerMotion: <SiFramer size={25} />,
  }

  return (
    <motion.div
      initial={{y: -20, opacity: 0}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1.5}}
      viewport={{once: true}}
      className="md:h-[37vh] h-[60vh] w-full md:w-[80%] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-25 p-4 flex-shrink-0 shadow-xl rounded-2xl snap-center bg-slate-50 dark:bg-[rgba(36,36,36)] text-[#26282b] dark:text-slate-50"
    >
      <motion.img
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y: 0}}
        className="w-full h-2/4 rounded-2xl   md:w-9/12 md:h-full object-center   md:py-4"
        src={project.img}
        alt=""
      />
      <motion.div
        initial={{
          x: -7,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="md:h-[80%] flex item-center  justify-between  flex-col md:w-3/12 w-full h-2/4 font-light  md:pl-4 p-6  "
      >
        <h4 className="text-3xl xl:text-3xl font-bold text-center">{project.title} </h4>

        <div className=" text-stone-100 text-xl flex flex-wrap justify-center items-start w-full gap-4 py-4">
          {project.skillsUsed.map((skil, index) => (
            <div key={index}>{skillsData[skil]}</div>
          ))}
        </div>

        <div className=" flex   gap-6 justify-center md:justify-start items-center  pt-6">
          <button
            onClick={() => navigateTo(project.src)}
            className="w-36 md:w-24 text-xl flex items-center justify-center duration-500 font-bold py-2 px-1 rounded-md tracking-widest bg-stone-400  hover:bg-stone-500 hover:scale-[95%] text-stone-50"
          >
            Code
          </button>
          <button
            onClick={() => navigateTo(project.live)}
            className="w-36 md:w-24  text-xl flex items-center justify-center duration-500 font-bold py-2 px-1 rounded-md tracking-widest  bg-[#6683C2]  hover:bg-[#5680c3] hover:scale-[95%] text-stone-50"
          >
            {" "}
            live
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
