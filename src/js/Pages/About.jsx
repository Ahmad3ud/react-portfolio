import React from "react"
import {motion} from "framer-motion"
function About() {
  const img = {}
  return (
    <section id="about" className="min-h-full w-full flex flex-col py-10 bg-stone-100 dark:bg-[rgb(30,30,30)]  dark:text-stone-50 text-[rgb(36,36,36)] ">
      <h2 className="text-center text-[3rem]  py-20 font-medium   ">Lebenlauf / Zertifikat </h2>
      <div className="  md:w-9/12 lg:w-9/12   m-auto h-full flex  flex-wrap  justify-center items-center px-4 pb-10 gap-8 md:gap-32   ">
        <motion.img
          src="cv.png"
          alt=""
          initial={{y: -20, opacity: 0}}
          whileInView={{opacity: 100, y: 0}}
          transition={{duration: 1.5}}
          viewport={{once: true}}
        />
        <motion.img
          src="zertafikat.png"
          alt=""
          initial={{y: -20, opacity: 0}}
          whileInView={{opacity: 100, y: 0}}
          transition={{duration: 1.5}}
          viewport={{once: true}}
        />
      </div>
    </section>
  )
}

export default About
