import Link from "next/link";
import Networks from "./Networks";

type NavProps = {
  closeMenu: () => void;
};

const Nav: React.FC<NavProps> = ({ closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu();
  };
  return (
    <nav className=" h-full flex xs:flex-col  md:flex-col-reverse     bg-navBg xs:py-2 md:py-4 ">
      <div className="mb-auto   flex xs:flex-col md:flex-row text-center xs:gap-y-6 md:gap-x-6  justify-center align-items  xs:text-24 md:text-20 xl:text-24 ">
        <Link
          href="#About"
          onClick={handleLinkClick}
          className="p-2 transition ease-in-out hover:scale-125 duration-300 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text  "
        >
          About
        </Link>
        <Link
          href="#Collections"
          onClick={handleLinkClick}
          className="p-2 transition ease-in-out hover:scale-125 duration-300 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text"
        >
          Collections
        </Link>
        <Link
          href="#Services"
          onClick={handleLinkClick}
          className="p-2 transition ease-in-out hover:scale-125 duration-300 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text"
        >
          Services
        </Link>
        <Link
          href="#Contact"
          onClick={handleLinkClick}
          className="p-2 transition ease-in-out hover:scale-125 duration-300 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text "
        >
          Contact
        </Link>
        <div className="self-center  transition ease-in-out hover:scale-125 duration-300">
          <span className=" xs:text-24 md:text-18 xl:text-24 p-2  cursor-pointer  transition ease-in-out hover:scale-125 duration-300 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text">
            UA
          </span>
        </div>
      </div>
      <div className="xs:pb-24 md:pb-4">
        <Networks />
      </div>
    </nav>
  );
};

export default Nav;
