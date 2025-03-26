import React, { useEffect, useState } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollFunction = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="">
      {isVisible && (
        <button
          onClick={backToTop}
          type="button"
          className="relativ fixed Z-100     text-[#6683C2]   leading-tight uppercase scale-95 hover:scale-100  transition  duration-[8000ms]  ease-in-out  bottom-24 right-2 md:right-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5  7.5M12 3v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
