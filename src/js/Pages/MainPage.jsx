import React from "react";

import {BsDownload} from "react-icons/bs";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function MainPage() {
  const [text, setText] = useTypewriter({
    words: [
      `In the midst of the pandemic, I unearthed a hidden talent - being a multi-passionate individual. As a musician, I've always been drawn to creativity, but these challenging times inspired me to explore new horizons. That's when I stumbled upon front-end development, and it became a game changer in my life. `,
      
  `Front-end development, much like composing music, allows me to blend artistry with technology. It's a field where I craft interactive web experiences, channeling my creativity into digital solutions. This career shift has offered a fresh canvas for my creativity and a new way to express myself.`,
  `Now, as a front-end developer, I'm applying the dedication and passion I developed as a musician to create captivating digital experiences. It's a journey that mirrors the rhythm of music, filled with continuous learning and the joy of harmonizing design and code.`,
  `
  My story is a testament to the transformative power of pursuing one's passions, even in challenging times.`
    ],
    loop: true,
    delaySpeed: 4000,
  });
  return (
    <section
      id="scroll-to-Home"
      className="  w-full  min-h-full flex flex-col justify-between items-center pt-32 md:pt-44 text-[rgb(36,36,36)] dark:text-stone-50 dark:bg-[rgb(36,36,36)]  bg-stone-100 dark:bg-[rgb(36,36,36)]dark:text-stone-50
         "
    >
      <div className=" md:pt-20 md:w-9/12 h-full w-full flex flex-col  md:flex-row  justify-center items-center ">
        <div 
      className=" md:w-1/2 w-full h-full flex text-center   flex-col items-center  justify-start  md:gap-10 ">
          <h2 className="text-3xl md:text-5xl w-full md:px-20    ">
            Hi<span>&#128075;&#127996;</span>, I'm Ahmad <br />I live in a World
            that is just a Mix <br />from
            <strong className="  text-[#90b8f8]"> Arts &#127926;</strong> and
            <strong className="  text-[#90b8f8]"> Codes &#9749;</strong>{" "}
          </h2>
          <div className="text-4xl px-6  h-96">
            {text}
            <Cursor cursorColor="#f7ab0a" />
          </div>
          <div className=" hidden  gap-16 md:flex   justify-center items-center social-icons">
            <a href="https://www.linkedin.com/in/ahmad-abo-kassem-724383261/">
              <i className="text-[4rem] duration-500  hover:scale-[95%]  fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Ahmad3ud/AhmadAboKassem">
              <i className="text-[4rem] duration-500  hover:scale-[95%] fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/ahmadabokassem/">
              <i className=" text-[4rem] duration-700  hover:scale-[95%] fab fa-instagram"></i>
            </a>
            
          </div>
          <div className="hidden  md:inline-block"><a href="src/assets/Ahmad-Abo-Kassem.pdf" download><button className=' text-3xl flex gap-4 items-center justify-center  py-4 px-8 font-bold  rounded-lg tracking-widest  duration-500 hover:scale-[95%]    ' > <BsDownload size={30} /> <p>Download CV</p></button></a></div>
          
         
        </div>
{/* my img */}
        <div className=" relative bg-contain  bg-center h-fit  flex flex-col gap-4 w-full md:w-1/2    items-center  justify-center ">
          <img src="./onstage.jpg" alt=""  className="z-10"/>
          <div className=" md:hidden  gap-16 flex  justify-center items-center social-icons">
            <a href="https://www.linkedin.com/in/ahmad-abo-kassem-724383261/">
              <i className="text-[4rem] duration-500  hover:scale-[95%]  fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Ahmad3ud/AhmadAboKassem">
              <i className="text-[4rem] duration-500  hover:scale-[95%] fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/ahmadabokassem/">
              <i className=" text-[4rem] duration-700  hover:scale-[95%] fab fa-instagram"></i>
            </a>
            
          </div>
          <div className="md:hidden "> <a href="src/assets/Ahmad-Abo-Kassem.pdf" download><button className=' text-3xl flex gap-4 items-center justify-center  py-4 px-8 font-bold  rounded-lg tracking-widest  duration-500 hover:scale-[95%]    ' > <BsDownload size={30} /> <p>Download CV</p></button></a></div>
          
          
           

        
              
              
            
          </div>
      </div>
      <div className="hidden md:inline-block md:w-7/12 h-fit border mb-24 dark:border-stone-50 border-[#90b8f8] "></div>
      
      
    </section>
  );
}

export default MainPage;
