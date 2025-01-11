import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
const Header = () => {
  return (
    <header className="bg-mainBg shadow-md  w-full sm:py-4 lg:py-6">
      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 sm:pb-2 lg:pb-2 ">
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
        <nav className="  flex gap-x-2 justify-center align-items bg-navBg py-3 ">
          <Link href="#" className="p-2">
            About us
          </Link>
          <Link href="#" className="p-2">
            Collections
          </Link>
          <Link href="#" className="p-2">
            Services
          </Link>
          <Link href="#" className="p-2">
            Contact
          </Link>
          <Link href="#" className="p-2 self-center  ">
            <FaInstagram className="size-5 hover:size-6 " />
          </Link>
        </nav>
        <div>
          <span>A</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
