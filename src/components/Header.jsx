import { useEffect, useState } from "react";
import { BsXLg, BsList } from "react-icons/bs";
import { motion } from "framer-motion";

import Button from "../utils/Button";
import Theme from "../utils/Theme";
import { styles } from "../style";
import Navlist from "./Navlist";
import { logo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-accent" : "bg-transparent"
      }`}
    >
      <nav className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          href="index.html"
        >
          <img src={logo} alt="heststate" className="w-24 md:w-36" />
        </a>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          <Navlist />
        </ul>

        <div className="flex flex-row space-x-5">
          <Button>Subcribe</Button>
          <Theme />
        </div>
      </nav>
      <div className="ml-5 sm:hidden flex justify-end items-center">
        <motion.div onClick={() => setToggle((toggle) => !toggle)}>
          {toggle ? (
            <BsXLg className="w-5 h-5 text-red-400" />
          ) : (
            <BsList className="w-6 h-6 text-red-400" />
          )}
        </motion.div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute bg-amber-300 top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            <Navlist />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
