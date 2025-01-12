import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
const Header = () => {
  return (
    <header className="bg-mainBg shadow-md  w-full xs:pt-4  lg:pt-6">
      <div>
        <div className="container mx-auto   xs:pb-4 lg:pb-6 ">
          <Link href="/" className=" ">
            <Image
              src="/Logo.png"
              alt="Malena Design Atelier"
              width={120}
              height={120}
              className="object-contain mx-auto w-40 cursor-pointer"
            />
          </Link>
        </div>
        <nav className="      bg-navBg xs:py-2 md:py-4 ">
          <div className="flex xs:gap-x-4 md:gap-x-6 justify-center align-items pb-4 ">
            <Link
              href="https://www.facebook.com/profile.php?id=61570230000079"
              className="p-2 self-center transition ease-in-out hover:scale-125 duration-300 
          "
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookCircleLine className=" xs:size-6  md:size-8  text-gradientTo " />
            </Link>
            <Link
              href="https://www.instagram.com/malena_design_atelier?igsh=cjJjMGc5amNmM3Zw"
              className="p-2 self-center transition ease-in-out hover:scale-125 duration-300 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className=" xs:size-6  md:size-8  text-gradientTo  " />
            </Link>

            <Link
              href="tel:+420731863400"
              className="p-2 self-center transition ease-in-out hover:scale-125 duration-300
          "
            >
              <FaWhatsapp className="xs:size-6  md:size-8  text-gradientTo" />
            </Link>
          </div>

          <div className="flex xs:gap-x-2 md:gap-x-6  justify-center align-items  xs:text-18 md:text-20 xl:text-24 ">
            <Link
              href="#"
              className="p-2 transition ease-in-out hover:scale-125 duration-300 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text  "
            >
              About us
            </Link>
            <Link
              href="#"
              className="p-2 transition ease-in-out hover:scale-125 duration-300 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text"
            >
              Collections
            </Link>
            <Link
              href="#"
              className="p-2 transition ease-in-out hover:scale-125 duration-300 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text"
            >
              Services
            </Link>
            <Link
              href="#"
              className="p-2 transition ease-in-out hover:scale-125 duration-300 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text "
            >
              Contact
            </Link>
            <div className="self-center  transition ease-in-out hover:scale-125 duration-300">
              <span className=" xs:text-16 md:text-18 xl:text-24 p-2  cursor-pointer  transition ease-in-out hover:scale-125 duration-300 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text">
                UA
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
