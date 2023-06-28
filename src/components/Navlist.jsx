import { useState } from "react";

import { navLinks } from "../constants";
import fontStyle from "../style";

const Navlist = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`cursor-pointer ${fontStyle.label} capitalize ${
            active === nav.title ? "text-white" : "text-red-500"
          }`}
          onClick={() => {
            setToggle(!toggle);
            setActive(nav.title);
          }}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </>
  );
};

export default Navlist;
