import {Outlet} from "react-router-dom"

function Navbar({setShowNavbar}) {
  const items = [
    {title: "Über", url: "#about"},
    {title: "Fähigkeiten ", url: "#skills"},
    {title: "Projekte", url: "#projects"},
    {title: "Kontakt", url: "#contact"},
  ]

  const closeNavbar = () => {
    if (window.innerWidth < 768) {
      setShowNavbar(false)
    }
  
  }

  return (
    <div className="z-20  w-screen md:w-full fixed md:static  h-screen md:h-full flex md:flex-row justify-start  items-center md:top-0 top-24 flex-col dark:text-stone-50 dark:bg-[rgba(36,36,36)] bg-stone-100">
      <ul className=" md:h-full flex  flex-col md:flex-row  justify-center items-center pt-40 md:pt-0  gap-20 md:gap-8 ">
        {items.map((item) => (
          <li
            onClick={closeNavbar}
            key={item.title}
            className="   text-4xl md:text-3xl  font-medium text-center md:text-[#6683C2] duration-500 md:hover:scale-[95%]"
          >
            <a className="relative   " href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  )
}

export default Navbar
