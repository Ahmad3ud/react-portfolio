import React from "react"
import { FiMoon, FiSun } from "react-icons/fi"
import { RxMoon} from "react-icons/rx"
RxMoon
import Icon from "./Icon"

function Theme({handleThemeSwitch, isDark}) {
  return (
    <div className=" pr-2 w-fit   dark:bg-[rgba(36,36,36,0)]" onClick={handleThemeSwitch}>
      {isDark ? (
        <Icon>
          <FiSun size={36} className= "cursor-pointer text-orange-300 duration-700  hover:scale-[110%] hover:rotate-90" />
        </Icon>
      ) : (
        <Icon>
          <RxMoon size={36} className=" cursor-pointer duration-700  hover:scale-[110%] hover:rotate-[-270deg]" />
        </Icon>
      )}
      
    </div>
  )
}

export default Theme
