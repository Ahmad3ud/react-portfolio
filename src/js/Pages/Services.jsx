import React from "react";
import { motion } from 'framer-motion'

import {  BsArrowsFullscreen} from "react-icons/bs";
import { MdBuild, MdTouchApp } from "react-icons/md";
import { BsMagic, BsRocketTakeoff } from "react-icons/bs";

export default function Services() {
  const items = [
    {
      title:
        "Speed matters. I optimize web page performance through techniques like image optimization, lazy loading, and code splitting to ensure quick page load times.",
      text: "Performance Optimization",
      icon: <BsRocketTakeoff size={60} />,
    },
    {
      title:
        "I specialize in creating visually stunning and intuitive web designs that resonate with your brand identity and user preferences. I can turn your ideas into polished mockups and prototypes.",
      text: "Web Design and Mockups",
      icon: <BsMagic size={60} />,
    },
    {
      title:
        "Ensuring your website looks exceptional and functions seamlessly on desktops, tablets, and smartphones is my priority. I implement responsive design principles to optimize user experiences across all screen sizes.",
      text: "Responsive Design",
      icon: <BsArrowsFullscreen size={60} />,
    },

    {
      title:
        "Leveraging the power of JavaScript, I develop interactive features and functionalities that engage your users. From dynamic forms to smooth animations, I enhance user interaction.",
      text: "Interactive Website",
      icon: <MdTouchApp size={60} /> ,
    },
    {
      title:
        "Rigorous testing and debugging are integral parts of my process. I ensure that your website is error-free and functions smoothly, providing a flawless user experience.",
      text: "Testing and Debugging",
      icon: <MdBuild size={60} />,
    },
  ];
  return (
    <section
      id="scroll-to-services"
      className="min-h-full w-full flex flex-col py-10 bg-stone-100 dark:bg-[rgb(36,36,36)]  dark:text-stone-50 text-[rgb(36,36,36)] "
    >
      <h2 className="text-center text-[3rem]  py-20 font-medium   ">
        Services
      </h2>
      <div className="  md:w-7/12  m-auto h-full flex  flex-wrap justify-center items-center px-4 pb-10 gap-8 md:gap-24   ">
        {items.map((item, index) => (
          <motion.div
          initial ={{y:-50, opacity:0}}
         whileInView={{opacity:1 ,y:0}}
         transition={{duration:1.2}}
         viewport={{once:true}}
            key={index}
            className=" dark:bg-slate-50 text-[#5f85db] px-8 relative h-[200px]  md:h-[300px] w-full md:w-[250px] text-center border rounded-md     flex flex-col  justify-around items-center shadow-md"
          >
            {item.icon}
            <motion.div 
            initial={{
              x:-30,
              opacity: 1,
              scale:1
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration:1.3
                }}>
              
              <h2 className="text-2xl text-[#3F72A] text-left font-bold">{item.text}</h2>
            <p className=" text-[rgb(36,36,36)] text-left text-lg">{item.title}</p>
            </motion.div>
            
          </motion.div>
        ))}
      </div>
      <div className="  hidden md:inline-block md:w-7/12 h-fit m-auto border dark:border-stone-50 border-[#90b8f8] "></div>
    </section>
  );
}
