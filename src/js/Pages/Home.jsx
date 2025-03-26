import React from "react"
import {motion} from "framer-motion"
import {Cursor, useTypewriter} from "react-simple-typewriter"
import {FiGithub, FiInstagram, FiLinkedin} from "react-icons/fi"
function Home() {
  const [text, setText] = useTypewriter({
    words: [
      `Mit Liebe zum Details auf die Entwicklung interaktiver, benutzerfreundlicher und
          funktionsreicher Websites.`,
    ],
    typeSpeed: 24,
  })
  return (
    <section
      className="  min-w-full  min-h-full flex flex-col justify-center items-center pt-24 md:pt-44 text-[rgb(36,36,36)] dark:text-stone-50 dark:bg-[rgb(30,30,30)] 
       bg-stone-100  "
    >
      <div className="  lg:w-9/12 h-full  gap-20 md:gap-8 w-full flex flex-col  lg:flex-row  justify-center items-center  ">
        <div className=" md:w-1/2 w-full h-full flex  gap-10 flex-col items-start  justify-start  md:gap-24 px-10 ">
          <h1 className="text-center md:text-left  tracking-widest text-4xl md:text-8xl w-full ">
            Hello, ich bin <strong>Ahmad</strong>
          </h1>
          <div className="  text-center md:text-left  tracking-wider  text-2xl md:text-4xl    h-32  ">
            {text}
            <Cursor cursorColor="#f7ab0a" />
          </div>
          <a href="#projects">
            <button className=" w-fit  hidden md:flex text-xl  font-bold  items-center justify-center  py-6 px-12 mt-10  rounded-lg tracking-widest  bg-[#688dc9] md:hover:scale-[95%]  duration-500 text-stone-50  shadow-md">
              Portfolio
            </button>
          </a>
        </div>
        {/* Home Image */}
        <div className=" relative bg-contain  bg-center h-fit  flex flex-col gap-8 w-full md:w-1/2 items-center justify-center ">
          <motion.img
            initial={{y: -20, opacity: 0}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
            src="./trier.jpg"
            alt=""
            className="z-10  border-4 border-[#6683C2]  dark:border-none  rounded-full shadow-lg   w-[300px] md:w-[450px]   relative"
          />

          {/* kontakt und social icon for mobil size */}
          <div
            className="gap-16 flex  md:hidden justify-center items-center  py-20  text-[#26282b]
         hover:text-[#5680c3]  dark:text-stone-50"
          >
            <a href="https://www.linkedin.com/in/ahmad-abo-kassem-724383261/">
              <i className="text-[4.4rem] duration-500 hover:scale-[95%] ">
                {" "}
                <FiLinkedin />{" "}
              </i>
            </a>
            <a href="https://github.com/Ahmad3ud/AhmadAboKassem">
              <i className="text-[4.4rem] duration-500 hover:scale-[95%] ">
                <FiGithub />
              </i>
            </a>
            <a href="https://www.instagram.com/ahmadabokassem/">
              <i className="text-[4.4rem] duration-500 hover:scale-[95%] ">
                <FiInstagram />
              </i>
            </a>
          </div>
          <a href="#projects">
            <button className=" w-fit   md:hidden text-xl  items-center justify-center duration-500  font-bold py-4 px-8    rounded-2xl tracking-widest  bg-[#6683C2]  hover:bg-[#072049]   text-stone-50  shadow-md">
              Zur Portfolio
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
