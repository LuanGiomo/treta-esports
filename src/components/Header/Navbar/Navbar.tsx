import { NavLink } from "react-router-dom";
// import styles from "./Navbar.module.css";
import { Links } from "../Header";

interface Props {
  links: Links[];
}

const Navbar = ({ links }: Props) => {
  return (
    <nav className="hidden xl:gap-6 xl:text-base lg:gap-5 md:text-sm md:gap-4 sm:text-xs sm:gap-3.5 sm:flex">
      {links.map((link) => (
        <li key={link.name} className="list-none uppercase">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-700 outline outline-1 outline-red-700"
                : "text-zinc-600 hover:text-red-900 no-underline"
            }
            to={link.path}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </nav>
  );
};
export default Navbar;
