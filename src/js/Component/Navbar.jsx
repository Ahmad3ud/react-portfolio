import { Link } from "react-router-dom";

function Navbar({ setShowNavbar }) {
  const items = [
    { title: "Services", url: "#scroll-to-services" },
    { title: "Skills", url: "#scroll-to-skills" },
    { title: "Projects", url: "#scroll-to-projects" },
    { title: "Contact", url: "#scroll-to-contact" },
  ];

  const closeNavbar = () => {
    if (window.innerWidth < 768) {
      setShowNavbar(false);
    }
  };

  return (
    <div className=" md:static top-20  w-full  h-screen md:h-fit  flex md:top-0   flex-col md:flex-row justify-center  items-center md:m-0 z-20   fixed    dark:text-stone-50 md:dark:bg-[rgba(36,36,36,0)] md:bg-stone-100/0 dark:bg-[rgba(36,36,36)] bg-stone-100   dark:border-stone-50     ">
      <ul className="flex flex-col md:flex-row  justify-center items-center   w-fit  md:pt-0  gap-8  md:gap-8 h-screen md:h-full   ">
        {items.map((item) => (
          <li
            onClick={closeNavbar}
            key={item.title}
            className=" text-5xl md:text-4xl font-light  text-[#90b8f8] duration-500  md:hover:scale-[95%]    "
          >
            <a className="relative  " href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
