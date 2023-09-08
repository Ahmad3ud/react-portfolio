import React, { useState } from "react";

import ProjectCard from "../Component/ProjectCard";


function Projects() {
  const items = [
    {
      text: "Green Weehls (final Projects)",
      img: "/Green-Wheels.png",
      skillsUsed:["Express","REACT","NodeJs","MongoDB","Vite","Tailwind"],
      live:"https://peaceful-torrone-3ee56f.netlify.app/",
      src: "https://github.com/orgs/Final-Project-taag/repositories",
    },
    { text: "Todo App", img: "/myTod.png",skillsUsed:["JavaScript","CSS","HTML"], live: "https://scintillating-sorbet-66ccb9.netlify.app/", src: "asd" },
    { text: "Portfolio ", img: "/PORTFOLIO.png",skillsUsed:["REACT","Tailwind","FramerMotion","Vite"], live: "www.google.com", src: "asd" },

    {
      text: "claculator ",
      img: "/calc.png",
      skillsUsed:["HTML","SASS","REACT"],
      live: "https://symphonious-dodol-01c4eb.netlify.app/", 
      src: "https://github.com/Ahmad3ud/react-calculator",
     
    },

    { text: "Fridge App", img: "/fridge-management_screenshot.png",skillsUsed:["JavaScript","CSS","HTML"],live:"https://euphonious-zuccutto-10d367.netlify.app/", src: "https://github.com/Ahmad3ud/fridge-mangement-app" },
  ];

  
  return (
    <div
      id="scroll-to-projects"
      className=" min-h-full  flex  overflow-hidden  flex-col max-width-full justify-around items-center mx-auto py-10 px-4 text-left bg-stone-100 dark:bg-[rgb(36,36,36)] snap-center "
    >
      <h2 className=" text-center text-[3rem]  pt-20 md:py-20 font-medium text-[#26282b] dark:text-stone-50   ">
        Projects
      </h2>
      
        <div
  
          className="relative flex md:flex-col w-screen md:w-7/12   px-8 gap-8 md:gap-20 pb-10 snap-center overflow-x-scroll  scrollbar-thumb-[#90b8f8] dark:scrollbar-track-stone-50 scrollbar-track-stone-50 scrollbar-thin  md:scrollbar-none "
        >
          {items.map((item ,index) =>
          
          <ProjectCard  key={index} project={item}/>
          
         )}
      
        </div>
          {/* <button 
        className=" hidden md:inline absolute  left-[16%] text-[#90b8f8] rounded-full p-2   "
        onClick={prevCarouselItem}
      >
        <BiLeftArrowAlt size={50} />
      </button>
      <button
        className=" hidden md:inline absolute  md:right-[16%] text-[#90b8f8] rounded-3xl p-2  "
        onClick={nextCarouselItem}
      >
        <BiRightArrowAlt size={50} />
      </button> */}
     

      
    </div>
  );
}

export default Projects;
/* snap-mandatory  scrollbar-thumb-[#90b8f8] dark:scrollbar-track-stone-50 scrollbar-track-stone-50 scrollbar cursor-pointer */
