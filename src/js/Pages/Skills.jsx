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
  SiFramer
} from "react-icons/si";
import {
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaFigma,
  FaSass,
} from "react-icons/fa";

function Skills() {
  const items = [
    /*  { text: 'Ubuntu', icon:<FontAwesomeIcon icon="fa-brands fa-github" /> }, */
    { text: "Java Script", icon: <SiJavascript size={50}  /> },
    { text: "Type Script", icon: <SiTypescript size={50}  /> },
    { text: "Next.js", icon: <SiNextdotjs size={50}  /> },
    
    { text: "Vite", icon: <SiVite size={50}  /> },
    { text: "HTML 5", icon: <SiHtml5 size={50}   /> },
    { text: "CSS", icon: <SiCss3 size={50}  /> },
    { text: "SASS", icon: <FaSass size={50}  /> },
    { text: "Bootstrap", icon: <FaBootstrap size={50}  /> },
    { text: "Tailwind", icon: <SiTailwindcss size={50}  /> },

    { text: "Figma", icon: <FaFigma size={50} /> },
    { text: "REACT", icon: <SiReact size={50} /> },
    { text: "Mongo DB", icon: <SiMongodb size={50} /> },
    { text: "Node-Js", icon: <FaNodeJs size={50}    />  },
    { text: "Express", icon: <SiExpress size={50} /> },

    { text: "Post Man", icon: <SiPostman size={50}  /> },

    { text: "Git Hub", icon: <FaGithub size={50} /> },
  ];
  return (
    <section
   
      id="scroll-to-skills"
      className="min-h-full  w-full flex flex-col justify-between items-center  py-10  md:px-92 bg-stone-100 dark:bg-[rgb(36,36,36)]  snap-start "
    >
      <h2 className="text-center text-[3rem]  py-20 font-medium text-[#26282b] dark:text-stone-50">
        Meine Skills
      </h2>
      <div className="w-full m-auto  md:w-7/12 p-10 md:px-20 h-full grid grid-cols-3 md:grid md:grid-cols-5 gap-8 md:gap-24     ">
        {items.map((item, index) => (
          <motion.div
          initial ={{y:-50, opacity:0}}
         whileInView={{opacity:1 ,y:0}}
         transition={{duration:1.2}}
         viewport={{once:true}}
            key={index}
            className=" w-36  md:w-44  h-36 md:h-44  flex flex-col  justify-center items-center rounded-3xl border-t dark:border dark:bg-slate-50 text-[#5f85db]   shadow-md m-auto "
          >
            <div>{item.icon}</div>
            <p className=" text-xl pt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="   hidden md:flex md:w-7/12 h-fit m-auto border dark:border-stone-50 border-[#90b8f8] "></div>
    </section>
  );
}

export default Skills;


