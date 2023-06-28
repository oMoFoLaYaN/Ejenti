import { BsXLg, BsList } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";


import Button from "../utils/Button";
import Theme from "../utils/Theme";
import Navlist from "./Navlist";
import { logo } from "../assets";

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 1, scale: 0.5 },
};

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header
      id="header"
      className={`w-full my-5 flex flex-row items-center justify-between px-0 py-2 fixed z-50`}
    >
        <a href="index.html">
          <img src={logo} alt="heststate" className="w-36" />
        </a>

        <nav
          id="navbar"
          className="relative flex items-center justify-between py-2"
        >
          <ul className="hidden lg:flex justify-between">
          <Navlist/>
          </ul>
          <Button>Book</Button>
        </nav>

        <div className="mx-auto">
          <Theme />
        </div>

        <div className="md:hidden flex justify-end items-center">
          <motion.div

            onClick={() => setToggle((toggle) => !toggle)}
          >
            {toggle ? (
              <BsXLg className="w-5 h-5" />
            ) : (
              <BsList className="w-6 h-6" />
            )}
          </motion.div>
          
          <motion.div
            animate={toggle ? "open" : "closed"}
            variants={variants}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-neutral-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >


          </motion.div>
        </div>

    </header>
  );
};

export default Header;
