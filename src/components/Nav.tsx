'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Networks from './Networks';
import LocaleSwitcher from './navbar/LocaleSwitcher';

type NavProps = {
  closeMenu: () => void;
};

const Nav: React.FC<NavProps> = ({ closeMenu }) => {
  const t = useTranslations('Navigation');

  const handleLinkClick = () => {
    closeMenu();
  };
  return (
    <nav className=" h-full flex xs:flex-col md:flex-col-reverse bg-navBg xs:py-2 md:py-4 ">
      <div className="mb-auto flex xs:flex-col md:flex-row text-center xs:gap-y-6 md:gap-x-6 justify-center items-center xs:text-20 md:text-20 xl:text-24 ">
        <Link
          href="#About"
          onClick={handleLinkClick}
          className="p-2 transition ease-in-out hover:scale-115 duration-400 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text  "
        >
          {t('About')}
        </Link>
        <Link
          href="#Collections"
          onClick={handleLinkClick}
          className="p-2 transition ease-in-out hover:scale-115 duration-400 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text"
        >
          {t('Collections')}
        </Link>
        <Link
          href="#Services"
          onClick={handleLinkClick}
          className="p-2 transition ease-in-out hover:scale-115 duration-400 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text"
        >
          {t('Services')}
        </Link>
        <Link
          href="#Contact"
          onClick={handleLinkClick}
          className="p-2 transition ease-in-out hover:scale-115 duration-400 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text "
        >
          {t('Contact')}
        </Link>
        <LocaleSwitcher />
      </div>
      <div className="xs:pb-24 md:pb-4">
        <Networks />
      </div>
    </nav>
  );
};

export default Nav;
