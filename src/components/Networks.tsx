import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

const Networks = () => {
  return (
    <div className=" flex xs:gap-x-4 md:gap-x-6 justify-center align-items   ">
      <Link
        href="https://www.facebook.com/profile.php?id=61570230000079"
        className="p-2 self-center transition ease-in-out hover:scale-115 duration-400 focus-visible:outline-gradientTo focus-visible:gradientTo focus-visible:gradientTo
          "
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiFacebookCircleLine className=" size-8  text-gradientTo " />
      </Link>
      <Link
        href="https://www.instagram.com/malena_design_atelier?igsh=cjJjMGc5amNmM3Zw"
        className="p-2 self-center transition ease-in-out hover:scale-115 duration-400 focus-visible:outline-gradientTo focus-visible:gradientTo focus-visible:gradientTo "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className=" size-8 text-gradientTo  " />
      </Link>

      <Link
        href="tel:+420731863400"
        className="p-2 self-center transition ease-in-out hover:scale-115 duration-400 focus-visible:outline-gradientTo focus-visible:gradientTo focus-visible:gradientTo 
          "
      >
        <FaWhatsapp className="size-8 text-gradientTo" />
      </Link>
    </div>
  );
};

export default Networks;
