import { navLinks } from "../constants";

const Navlist = () => {
  return (
    <>
    {navLinks.map((nav) => (
          <li key={nav.id}  className="relative w-full flex justify-between">
            <a
              className={`cursor-pointer text-emerald-50 relative`}
            >
              {nav.title}
            </a>
          </li>
      ))}
    </>
  )
}

export default Navlist