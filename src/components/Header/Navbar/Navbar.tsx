import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Links } from "../Header";

interface Props {
  links: Links[];
}

const Navbar = ({ links }: Props) => {
  return (
    <nav className={styles.navbar}>
      {links.map((link) => (
        <li key={link.name} className={styles.navbar__list}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? [styles.navbar__list__item, styles.active].join(" ")
                : styles.navbar__list__item
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
