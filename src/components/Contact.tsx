import Link from "next/link";
import Networks from "./Networks";
import { RiPhoneLine } from "react-icons/ri";
const Contact = () => {
  return (
    <section className="bg-mainBg py-8 px-4">
      <div
        id="Contact"
        className="container mx-auto xs:py-2 xs:px-2 md:px-6 lg:px-8 md:pb-2 lg:pb-2 text-center"
      >
        <h2 className="p-2 text-center xs:text-26 md:text-30 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text ">
          Контакти
        </h2>

        <Networks />

        <div className="flex flex-col gap-2 items-center">
          <Link
            href="https://www.google.com/maps?q=Dlouha+17,+Cheb,+Czech+Republic"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg font-semibold text-gray-700 hover:text-gradientTo transition-colors duration-300 my-4 "
          >
            Dlouha 17, Cheb, Czech Republic
          </Link>
          <Link
            href="tel:+420731863400"
            className="flex items-center gap-2   text-gray-800 hover:text-gradientTo transition-colors duration-300"
          >
            <RiPhoneLine size={20} />
            +420 731 863 400
          </Link>
          <Link
            href="tel:+380505402238"
            className="flex items-center gap-2   text-gray-800 hover:text-gradientTo transition-colors duration-300"
          >
            <RiPhoneLine size={20} /> +380 505 402 238
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
