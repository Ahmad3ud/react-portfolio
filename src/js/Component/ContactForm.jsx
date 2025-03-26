import React from "react";

function ContactForm() {
  return (
    <form
      className="md:w-9/12 lg:w-7/12 xl:w-5/12 w-full flex flex-col justify-center gap-8 px-4 md:px-4 md:mt-20 text-[#26282b]  "
      action="https://formsubmit.co/ahmadabokasem@gmail.com"
      method="POST"    
    >
      <input
        type="email"
        id="email"
        name="email"
        className="shadow-sm   bg-stone-50 px-2 py-4 text-md rounded-sm block w-full cursor-pointer"
        placeholder="Ihre E-Mail "
        required
      />
      <input
        type="text"
        id="subject"
        name="subject"
        className="shadow-sm bg-stone-50 px-2 py-4 text-md rounded-sm block w-full cursor-pointer"
        placeholder="Betriff"
        required
      />

      <textarea
        id="message"
        rows="6"
        name="message"
        className="resize-none shadow-sm bg-stone-50 px-2 py-4 text-md rounded-sm block w-full cursor-pointer"
        placeholder="Nachricht inhalt..."
      ></textarea>

        <div className="flex justify-center pb-6 ">
        <button
        type="submit"
        className=" w-fit text-xl items-center justify-center duration-500 font-bold py-4 px-8 md:py-6 md:px-10 rounded-2xl tracking-widest bg-[#6683C2] hover:scale-95  text-stone-50  shadow-md"
      >
        Senden
      </button>
        </div>
      
    </form>
  );
}

export default ContactForm;
