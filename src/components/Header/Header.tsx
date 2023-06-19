import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar.tsx";
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons.tsx";
import tretaLogo from "../../assets/treta.svg";

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
    <header className="bg-black/80 backdrop-saturate-150 backdrop-blur-sm sticky z-10 top-0 shadow-custom shadow-zinc-600">
      <div className="flex justify-center sm:justify-between items-center py-4 px-8 max-h-14">
        <Link to="/">
          <img className="h-4 xl:h-5" src={tretaLogo} alt="Treta logo" />
        </Link>
        <Navbar links={navbarLinks} />
        <SocialMediaIcons socialMediaInfo={socialMediaNames} />
      </div>
    </header>
  );
};

export default Header;
