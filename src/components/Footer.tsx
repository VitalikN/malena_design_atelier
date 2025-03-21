import Link from 'next/link';
import Networks from './Networks';
import { RiPhoneLine } from 'react-icons/ri';
import { getTranslations } from 'next-intl/server';
import Logo from './Logo';
const Footer = async () => {
  const t = await getTranslations('Contacts');
  return (
    <footer className="bg-mainBg py-8 px-4">
      <div className="container mx-auto mobile:py-2 mobile:px-2 md:px-6 lg:px-8 md:pb-2 lg:pb-2 text-center mobile:justify-center mobile:flex mobile:flex-col md:flex-row mobile:items-center gap-2 md:justify-around md:items-center ">
        <Logo />
        <div>
          <Networks />

          <div className="flex flex-col gap-2 items-center font-semibold">
            <Link
              href="https://www.google.com/maps?q=Dlouha+17,+Cheb,+Czech+Republic"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg font-semibold text-gray-700 hover:text-gradientTo transition-colors duration-400 my-4  focus-visible:outline-gradientTo focus-visible:gradientTo focus-visible:gradientTo"
            >
              {t('address')}
            </Link>
            <Link
              href="tel:+420731863400"
              className="flex items-center gap-2 text-gray-800 hover:text-gradientTo transition-colors duration-400 focus-visible:outline-gradientTo focus-visible:gradientTo focus-visible:gradientTo  "
            >
              <RiPhoneLine size={20} />
              {t('phone1')}
            </Link>
            <Link
              href="tel:+380505402238"
              className="flex items-center gap-2 text-gray-800 hover:text-gradientTo transition-colors duration-400 focus-visible:outline-gradientTo focus-visible:gradientTo focus-visible:gradientTo  "
            >
              <RiPhoneLine size={20} /> {t('phone2')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
