import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import Navbar from "./Navbar"
import {GiHamburgerMenu} from "react-icons/gi"
import Theme from "./Theme"
import {motion} from "framer-motion"

function Header() {
  const [theme, setTheme] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [showNavBar, setShowNavbar] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 768) {
      if (!showNavBar) setShowNavbar(true)
    }
  }, [window.innerWidth])
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    setIsDark(!isDark)
  }

  return (
    <div className="  fixed z-30 md:top-0 h-24 md:h-28 w-screen md:px-24 flex justify-around md:justify-center items-center dark:text-stone-50 dark:bg-[rgba(36,36,36)] bg-stone-100 dark:border-stone-50">
      {/* -----------------------Navbar------------------ */}
      <motion.div
        initial={{
          x: -50,
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className="  relative  md:w-1/3 md:flex   justify-start items-center mr-4 "
      >
        {showNavBar && <Navbar setShowNavbar={setShowNavbar} />}
      </motion.div>

      {/* -----------------------Burger menu------------------ */}
      <div className="w-1/3  relative md:hidden flex items-center justify-start text-4xl  cursor-pointer    text-[#26282b]  dark:text-stone-50 ">
        <GiHamburgerMenu
          size={32}
          className=""
          onClick={() =>
            setShowNavbar((state) => {
              return !state
            })
          }
          name="menu"
        ></GiHamburgerMenu>
      </div>

      {/* -----------------------Logo------------------ */}
      <div className=" relative w-1/3 flex justify-center items-center ">
        <a href="/" title="to home" className=" ">
          <img id="header-logo" className=" w-20 mr-6 " src="/icon/favicon.png" alt="page-logo" />
        </a>
      </div>

      {/* -----------------------Theme------------------ */}
      <div className="relative w-1/3 flex justify-end items-center  ">
        <Theme handleThemeSwitch={handleThemeSwitch} isDark={isDark} />
      </div>
    </div>
  )
}
export default Header
