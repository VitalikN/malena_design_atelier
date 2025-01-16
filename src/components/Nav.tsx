'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Networks from './Networks';
import LocaleSwitcher from './navbar/LocaleSwitcher';
import { motion } from 'framer-motion';

type NavProps = {
  closeMenu: () => void;
};

const Nav: React.FC<NavProps> = ({ closeMenu }) => {
  const t = useTranslations('Navigation');

  const handleLinkClick = () => {
    closeMenu();
  };

  // Анимации для сдвига элементов с разных сторон
  const itemVariants = {
    hidden: { opacity: 0, x: 100 }, // Начинается справа
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 25,
        duration: 0.8,
      },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 }, // Начинается слева
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 25,
        duration: 0.8,
      },
    },
  };

  const itemVariantsTop = {
    hidden: { opacity: 0, y: -100 }, // Начинается сверху
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 25,
        duration: 0.8,
      },
    },
  };

  return (
    <nav className="h-full flex xs:flex-col md:flex-col-reverse bg-navBg xs:py-2 md:py-4">
      <div className="mb-auto flex xs:flex-col md:flex-row text-center xs:gap-y-6 md:gap-x-6 justify-center items-center xs:text-20 md:text-20 xl:text-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariantsLeft} // Элемент появляется с левой стороны
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link
            href="#About"
            onClick={handleLinkClick}
            className="nav-link p-2 transition ease-in-out hover:scale-115 duration-400 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text focus-visible:outline-gradientTo focus-visible:gradientTo"
          >
            {t('About')}
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariantsTop} // Элемент появляется сверху
          transition={{ delay: 0.2, type: 'spring', stiffness: 300 }} // Задержка для эффекта
          whileHover={{ scale: 1.05 }}
        >
          <Link
            href="#Collections"
            onClick={handleLinkClick}
            className="p-2 transition ease-in-out hover:scale-115 duration-400 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text focus-visible:outline-gradientTo focus-visible:gradientTo"
          >
            {t('Collections')}
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants} // Элемент появляется с правой стороны
          transition={{ delay: 0.4, type: 'spring', stiffness: 300 }} // Задержка для эффекта
          whileHover={{ scale: 1.05 }}
        >
          <Link
            href="#Services"
            onClick={handleLinkClick}
            className="p-2 transition ease-in-out hover:scale-115 duration-400 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text focus-visible:outline-gradientTo focus-visible:gradientTo"
          >
            {t('Services')}
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariantsLeft} // Элемент появляется с левой стороны
          transition={{ delay: 0.6, type: 'spring', stiffness: 300 }} // Задержка для эффекта
          whileHover={{ scale: 1.05 }}
        >
          <Link
            href="#Contact"
            onClick={handleLinkClick}
            className="p-2 transition ease-in-out hover:scale-115 duration-400 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text focus-visible:outline-gradientTo focus-visible:gradientTo"
          >
            {t('Contact')}
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariantsTop} // Элемент появляется сверху
          transition={{ delay: 0.8 }} // Задержка для эффекта
        >
          <LocaleSwitcher />
        </motion.div>
      </div>
      <div className="xs:pb-24 md:pb-4">
        <Networks />
      </div>
    </nav>
  );
};

export default Nav;
