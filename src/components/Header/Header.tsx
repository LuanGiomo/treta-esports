import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar.tsx";
import tretaLogo from "../../assets/treta.svg";
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons.tsx";
import styles from "./Header.module.css";

const Header = () => {
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
        <Navbar />
        <SocialMediaIcons socialMediaInfo={socialMediaNames} />
      </div>
    </header>
  );
};

export default Header;
