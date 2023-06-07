import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar.tsx";
import tretaLogo from "../../assets/treta.svg";
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons.tsx";
import styles from "./Header.module.css";

export type Links = {
  name: string;
  path: string;
};

const Header = () => {
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

  const socialMediaNames = [
    "discord",
    "instagram",
    "tiktok",
    "twitter",
    "youtube",
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to="/">
          <img
            className={styles.header__content__logo}
            src={tretaLogo}
            alt="Treta logo"
          />
        </Link>
        <Navbar links={navbarLinks} />
        <SocialMediaIcons socialMediaInfo={socialMediaNames} />
      </div>
    </header>
  );
};

export default Header;
