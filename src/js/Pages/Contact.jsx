import React from "react"
import {FiPhone, FiMail, FiGithub, FiInstagram, FiLinkedin} from "react-icons/fi"
import ContactForm from "../Component/ContactForm"

function Contact() {
  return (
    <div
      id="contact"
      className="w-full  min-h-full flex flex-col justify-evenly items-center gap-8  text-stone-100 py-20 bg-stone-100 dark:bg-[rgb(36,36,36)] "
    >
      <h2 className="text-center  text-[3rem] p-5 font-medium text-[#26282b] dark:text-[#fff]">
        Kontakt Daten
      </h2>

      <div className="gap-16 flex flex-col  justify-center items-center   ">
        <div className="gap-16 flex justify-center items-center text-[#26282b]   dark:text-stone-50 ">
          <a href="https://www.linkedin.com/in/ahmad-abo-kassem-724383261/">
            <div className="text-[4.4rem] duration-500 hover:scale-[95%] ">
              {" "}
              <FiLinkedin />{" "}
            </div>
          </a>
          <a href="https://github.com/Ahmad3ud/AhmadAboKassem">
            <div className="text-[4.4rem]  hover:scale-[95%] ">
              <FiGithub />
            </div>
          </a>
          <a href="https://www.instagram.com/ahmadabokassem/">
            <div className="text-[4.4rem] duration-500 hover:scale-[95%] ">
              <FiInstagram />
            </div>
          </a>
        </div>
      </div>

      <div className="md:w-[30%]  text-[#26282b] dark:text-[#fff] flex justify-between items-center font-semibold text-4xl">
        <ul className="w-full flex items-center justify-center text-center flex-col gap-8 ">
          <li className="flex md:items-center md:justify-center lg:justify-start  gap-4 ">
            <FiMail />
            ahmadabokasem@gmail.com
          </li>
          <li className="flex md:items-center md:justify-center lg:justify-start gap-4 ">
            <FiPhone />
            +49 178 2730 262
          </li>
        </ul>
      </div>

      <ContactForm />
    </div>
  )
}

export default Contact
