import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <>
      <Link
        href="/"
        className="focus-visible:outline-gradientTo focus-visible:gradientTo focus-visible:gradientTo "
      >
        <Image
          src="/Logo.png"
          alt="Malena Design Atelier"
          width={400}
          height={400}
          className="object-contain md:mx-auto mobile:w-32 md:w-40 xl:w-48 cursor-pointer"
          priority
        />
      </Link>
    </>
  );
};
export default Logo;
