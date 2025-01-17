"use client";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Networks = () => {
  return (
    <div className="flex xs:gap-x-4 md:gap-x-6 justify-center align-items ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 120,
          damping: 20,
          duration: 0.8,
        }}
      >
        <Link
          href="https://www.facebook.com/profile.php?id=61570230000079"
          className="p-2 flex  focus-visible:outline-gradientTo focus-visible:gradientTo focus-visible:gradientTo "
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookCircleLine className="size-8 text-gradientTo transition ease-in-out hover:scale-115 duration-400 " />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.4,
          type: "spring",
          stiffness: 120,
          damping: 20,
          duration: 0.8,
        }}
      >
        <Link
          href="https://www.instagram.com/malena_design_atelier?igsh=cjJjMGc5amNmM3Zw"
          className="p-2 flex  focus-visible:outline-gradientTo focus-visible:gradientTo focus-visible:gradientTo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="size-8  text-gradientTo transition ease-in-out hover:scale-115 duration-400 " />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.6,
          type: "spring",
          stiffness: 120,
          damping: 20,
          duration: 0.8,
        }}
      >
        <Link
          href="tel:+420731863400"
          className="p-2 flex  focus-visible:outline-gradientTo focus-visible:gradientTo focus-visible:gradientTo"
        >
          <FaWhatsapp className="size-8 text-gradientTo transition ease-in-out hover:scale-115 duration-400 " />
        </Link>
      </motion.div>
    </div>
  );
};

export default Networks;
