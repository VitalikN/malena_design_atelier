import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

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
      <div className=" flex  xs:gap-x-4 md:gap-x-6 justify-center align-items xs:pb-24 md:pb-4 ">
        <Link
          href="https://www.facebook.com/profile.php?id=61570230000079"
          className="p-2 self-center transition ease-in-out hover:scale-125 duration-300 
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookCircleLine className=" size-8  text-gradientTo " />
        </Link>
        <Link
          href="https://www.instagram.com/malena_design_atelier?igsh=cjJjMGc5amNmM3Zw"
          className="p-2 self-center transition ease-in-out hover:scale-125 duration-300 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className=" size-8  text-gradientTo  " />
        </Link>

        <Link
          href="tel:+420731863400"
          className="p-2 self-center transition ease-in-out hover:scale-125 duration-300
          "
        >
          <FaWhatsapp className="size-8  text-gradientTo" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
