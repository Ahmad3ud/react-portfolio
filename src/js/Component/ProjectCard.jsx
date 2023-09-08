import React from "react";
import { motion } from "framer-motion";

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
} from "react-icons/si";
import {
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaFigma,
  FaSass,
} from "react-icons/fa";
import Projects from "../Pages/Projects";

export default function ProjectCard({ project} ) {
  const navigateTo = (link) => {
    if (link.length){
      window.location.href = link;
    }
  };
  const skillsData = {
    JavaScript: <SiJavascript size={30} />,
    TypeScript: <SiTypescript size={30} />,
    NextJs: <SiNextdotjs size={30} />,
    Vite: <SiVite size={30} />,
    HTML: <SiHtml5 size={30} />,
    CSS: <SiCss3 size={30} />,
    SASS: <FaSass size={30} />,
    Bootstrap: <FaBootstrap size={30} />,
    Tailwind: <SiTailwindcss size={30} />,
    Figma: <FaFigma size={30} />,
    REACT: <SiReact size={30} />,
    MongoDB: <SiMongodb size={30} />,
    NodeJs: <FaNodeJs size={30} />,
    Express: <SiExpress size={30} />,
    PostMan: <SiPostman size={30} />,

    GitHub: <FaGithub size={30} />,
    FramerMotion: <SiFramer size={30} />,
  };
  
  return (
    <article className="    md:h-[45vh]  h-[70vh] :w-full flex flex-col md:flex-row items-center   justify-between  md:justify-start gap-8 md:gap-20 p-4 flex-shrink-0  shadow-lg rounded-lg snap-center bg-slate-50  dark:bg-[#26282b] text-[#26282b] dark:text-slate-50 ">
     
     
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className=" w-[40vh] h-2/4 rounded-2xl   md:w-2/3 md:h-full object-cover object-center snap-center md:py-4"
        src={project.img}
        alt=""
      />
      <motion.div
        initial={{
          x: -30,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className=" md:h-[80%] flex item-center justify-between flex-col md:w-1/3 w-full h-2/4 font-light px-8"
      >
        <h4 className="text-4xl font-bold">{project.text} </h4>
        <div className="text-2xl" >Technology i have used:
        <div className="   text-[#90b8f8] flex w-full gap-4  py-4 ">
          {project.skillsUsed.map((skil ) => skillsData[skil])}
        </div>
        </div>
       

        <div className=" flex   gap-4 justify-start items-center  pt-6">
          <button onClick={()=>navigateTo(project.src)} className=" w-fit  text-2xl flex items-center justify-center duration-500  font-bold py-2 px-4 border-red-400 border rounded-md tracking-widest bg-red-500 hover:scale-[95%] text-stone-50">
            src code
          </button>
          <button onClick={()=>navigateTo(project.live)} className=" w-fit  text-2xl flex items-center justify-center duration-500  font-bold py-2 px-4 border-green-400 border rounded-md tracking-widest bg-green-500 hover:scale-[95%] text-stone-50">
            {" "}
            live
          </button>
        </div>
      </motion.div>
    </article>
  );
}


