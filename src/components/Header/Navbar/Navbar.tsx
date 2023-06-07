import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

interface Links {
  name: string;
  path: string;
}

const Navbar = () => {
  const navbarLinks: Links[] = [
    {
      name: "home",
      path: `/`,
    },
    {
      name: "teams",
      path: `/teams`,
    },
    {
      name: "shop",
      path: `/shop`,
    },
    {
      name: "about",
      path: `/about`,
    },
    {
      name: "contact",
      path: `/contact`,
    },
  ];

  return (
    <nav className={styles.navbar}>
      {navbarLinks.map((link) => (
        <li className={styles.navbar__list}>
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
