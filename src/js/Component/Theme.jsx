import React from "react";
import { FiSun } from "react-icons/fi";
import { RxMoon } from "react-icons/rx";
RxMoon;
import Icon from "./Icon";

function Theme({ handleThemeSwitch, isDark }) {
  return (
    <div className=" w-1/3 flex justify-end items-center dark:bg-[rgba(36,36,36,0)]  pr-3 md:pr-0" onClick={handleThemeSwitch}>
      {!isDark ? (
        <Icon>
          <FiSun
            size={26}
            className="cursor-pointer text-stone-50 duration-700 hover:scale-[110%] hover:rotate-90"
          />
        </Icon>
      ) : (
        <Icon>
          <RxMoon
            size={26}
            className=" cursor-pointer text-[#26282b] duration-700 hover:scale-[110%] hover:rotate-[140deg]"
          />
        </Icon>
      )}
    </div>
  );
}

export default Theme;
