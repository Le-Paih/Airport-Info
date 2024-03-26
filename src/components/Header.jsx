import {
  Bars3BottomRightIcon,
  GlobeAltIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);

  function goTop() {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  }

  const Links = [
    { name: "Home", link: "#home" },
    { name: "Search", link: "#search" },
  ];

  return (
    <div className="fixed left-0 top-0 z-50 w-full shadow-md transition duration-300">
      <div className=" dark:bg-brown items-center justify-between bg-white py-4 transition duration-500 md:flex md:px-10 ">
        <div
          className="ml-4 flex cursor-pointer items-center gap-1 text-2xl font-bold transition duration-300"
          onClick={goTop}
        >
          <GlobeAltIcon className="dark:fill-dPurple h-7 w-7 fill-blue-600 transition duration-300" />
          <span className="dark:text-dWhite">Airport Info</span>
        </div>
        <div className=" hidden md:ml-auto md:inline-block">
          <button
            onClick={toggleDarkMode}
            className="transition duration-300 md:pt-2"
          >
            {darkMode ? (
              <SunIcon className="fill h-7 w-7 fill-neutral-400" />
            ) : (
              <MoonIcon className="h-7 w-7 fill-neutral-600" />
            )}
          </button>
        </div>

        <div className="h7 w-18 space-between absolute right-8 top-6 flex flex-row md:hidden">
          <button
            onClick={toggleDarkMode}
            className="transition duration-300 md:pt-2"
          >
            {darkMode ? (
              <SunIcon className="fill h-7 w-7 fill-neutral-400" />
            ) : (
              <MoonIcon className="h-7 w-7 fill-neutral-600" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-3 cursor-pointer"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7 dark:fill-white" />
            ) : (
              <Bars3BottomRightIcon className="h-7 w-7 dark:fill-white" />
            )}
          </button>
        </div>

        {/* Link Items */}
        <ul
          className={`dark:bg-brown absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-300 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:bg-transparent md:pb-0 md:pl-0 md:dark:bg-transparent ${isOpen ? "top-12" : "top-[-200px]"}`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="text-l mt-4 font-semibold md:my-0 md:mr-10 md:px-10"
            >
              <a
                href={link.link}
                className=" dark:hover:text-dPurple dark:text-dWhite text-black duration-300 hover:text-blue-500"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.link)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
