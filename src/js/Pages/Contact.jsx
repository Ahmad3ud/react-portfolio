import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

function Contact() {
  return (
    <div
      id="scroll-to-contact"
      className=" w-full  min-h-full  flex flex-col justify-between items-center  gap-8 text-stone-100   py-10 bg-stone-100 dark:bg-[rgb(36,36,36)]  "
    >
      <h2 className="text-center  text-[3rem]  p-5 md:py-20  font-medium text-[#26282b]  dark:text-[#fff]">
      interested to work together?
      </h2>
      
     

      <form
        className=" md:w-7/12 w-full flex flex-col  justify-center gap-8 px-4 md:px-44 md:mt-44 text-[#26282b]  "
        action="https://formsubmit.co/ahmadabokasem@gmail.com"
        method="POST"
      >
       
        <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm dark:shadow-none bg-stone-50  px-3 py-5  text-xl  rounded-sm  block w-full  cursor-pointer  "
            placeholder="Write your E-Mail "
            required
          />
        <input
            type="text"
            id="subject"
            name="subject"
            className="shadow-sm dark:shadow-none bg-stone-50  px-3 py-5  text-xl   rounded-sm  block w-full cursor-pointer"
            placeholder="Let us know how we can help you"
            required
        />
        

        <textarea
            id="message"
            rows="6"
            name="message"
            className="resize-none shadow-sm dark:shadow-none bg-stone-50  px-3 py-5  text-xl   rounded-sm  block w-full cursor-pointer"
            placeholder="Leave a comment..."
          ></textarea>

        
       
        
        <button
          type="submit"
          className="w-fit  text-2xl flex items-center justify-center duration-500  font-bold py-2 px-4 border-red-400 border rounded-lg tracking-widest bg-red-500 hover:scale-[95%]  "
        >
          Send message
        </button>
      </form>

      {/* Footer */}
      <div className="w-full md:inline-block md:w-7/12 h-fit border mb-24 dark:border-stone-50 border-[#90b8f8] "></div>
      <div className="flex md:w-7/12  flex-col md:flex-row justify-center item-center  text-[#26282b]  dark:text-stone-50  ">
        <div className="  md:w-[30%]   flex justify-center items-center text-3xl">
          <ul className=" w-full flex items-center justify-center text-center    flex-col gap-6 ">
            <li className=" flex md:items-center md:justify-center lg:justify-start  gap-2 ">
              <FiPhone />
              +49 178 2730 262
            </li>

            <li className="  flex md:items-center md:justify-center lg:justify-start  gap-2 ">
              <FiMail />
              ahmadabokasem@gmail.com
            </li>

            <li className=" flex md:items-center md:justify-center lg:justify-start  gap-2 ">
              <FiMapPin />
              68199 Mannheim
            </li>
          </ul>
        </div>
        <div className="  md:w-[30%] flex justify-center items-center  py-10 md:p-0">
          <a
            className="w-36 md:w-64"
            href="#scroll-to-Home"
            title="Zurück zur Startseite"
          >
            <img id="header-logo" src="/icon/favicon.png" alt="page-logo" />
          </a>
        </div>

        <div className=" hidden md:w-[30%]   md:flex justify-center items-center text-3xl">
          <ul className=" w-full flex items-center justify-center text-center    flex-col gap-6 ">
            <li className=" flex md:items-center md:justify-center lg:justify-start   ">
              <a href="https://github.com/Ahmad3ud/AhmadAboKassem">
                <i className="text-[2.7rem]  fab fa-github"> </i> Github
              </a>
            </li>

            <li className=" flex md:items-center md:justify-center lg:justify-start   ">
              <a href="https://www.linkedin.com/in/ahmad-abo-kassem-724383261/">
                <i className="text-[2.7rem]   fab fa-linkedin"> </i> Linkedin
              </a>
            </li>

            <li className=" flex md:items-center md:justify-center lg:justify-start  ">
              <a href="https://www.instagram.com/ahmadabokassem/">
                <i className="  text-[2.7rem] fab fa-instagram"> </i> Instagram
              </a>
            </li>
          </ul>
          
        </div>
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

      </div>
      
      <span className="text-xl  text-[#26282b]  dark:text-[#fff] ">
        Copyright © 2023{" "}
        <strong className="text-bold  ">Ahmad Abo Kassem</strong>
      </span>
    </div>
  );
}

export default Contact;
