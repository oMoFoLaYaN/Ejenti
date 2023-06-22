import { BsXLg, BsList } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";

import { navLinks } from "../constants";
import Button from "../ui/Button";
import Theme from "../ui/Theme";

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 1, scale: 0.5 },
};

const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg- w-full flex py-6 justify-between items-center navbar">
      <h1 className="w-[124px] h-[32px] text-teal-700">Framer </h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal capitalize cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-stone-300"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <Button href="#" bgColor={false}>
        Learn More
      </Button>
      <Theme/>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9}}
          className="p-2 rounded-full bg-amber-400"
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
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`capitalize font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-stone-300"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
