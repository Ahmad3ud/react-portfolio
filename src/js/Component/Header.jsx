import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import React, {useState, useEffect} from "react"
import Navbar from "./Navbar"
import {GiHamburgerMenu} from "react-icons/gi"
import Theme from "./Theme"
import { motion } from "framer-motion"; 
function Header() {
  const navigate = useNavigate()
  const [theme, setTheme] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const [showNavBar, setShowNavbar] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 768) {
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
    <div className="fixed z-30 top-0   h-20  w-full mx-auto md:p-5 md:px-12  flex  justify-between  items-center md:items-start      dark:text-stone-50  dark:bg-[rgba(36,36,36)] bg-stone-100   dark:border-stone-50     ">
      {/* -----------------------Navbar------------------ */}
        
      <motion.div
    initial={{
      x:-400,
      opacity: 1,
      scale:1
    }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1
    }}
    transition={{
      duration:1.5
        }} 
    className=" "   
        
  >
    {showNavBar && <Navbar setShowNavbar={setShowNavbar} />}
  </motion.div>
  <div className=" relative flex items-start justify-start  w-1/2 text-5xl text-[#fff] cursor-pointer  md:hidden">
          <GiHamburgerMenu
            size={36}
            className=" relative pl-2 w-fit  text-[#26282b]  dark:text-[#fff] "
            onClick={() =>
              setShowNavbar(state => {
                return !state
              })
            }
            name="menu"
          ></GiHamburgerMenu>
        </div>
        
      {/* -----------------------Theme------------------ */}
      
    
  <div className="relative flex items-end justify-end  w-1/2 "><Theme handleThemeSwitch={handleThemeSwitch} isDark={isDark} /></div>
   
        
        
        
      </div>
    
  )
}
export default Header
