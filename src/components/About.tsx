'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const About = () => {
  const t = useTranslations('About');

  // Общие варианты анимации
  const imageVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  const buttonVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.6 },
    },
  };

  return (
    <section id="About" className="bg-navBg">
      <div className="xl:container mx-auto xs:py-4 xs:px-4 md:px-6 xl:px-8 md:py-6 xl:py-8">
        <motion.h2
          className="md:hidden p-2 text-center xs:text-26 md:text-30 text-gradient font-semibold"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          {t('title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {/* Анимация изображения */}
          <motion.div
            className="flex-1 flex items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariant}
          >
            <Image
              src="/about.jpg"
              alt="about"
              width={1000}
              height={1000}
              className="w-full h-full object-cover mx-auto"
            />
          </motion.div>

          {/* Анимация текста и кнопки */}
          <motion.div
            className="flex flex-col flex-1 bg-navBg p-4 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="max-md:hidden p-2 text-center xs:text-26 md:text-30 text-gradient font-semibold"
              variants={textVariant}
            >
              {t('title')}
            </motion.h2>
            <motion.p
              className="mb-[30px] text-justify font-medium"
              variants={textVariant}
            >
              {t('description')}
            </motion.p>
            <motion.div className="mt-auto" variants={buttonVariant}>
              <Link
                href="#Contact"
                className="bg-backgroundButton mx-auto px-6 py-2 font-semibold rounded-lg border border-borderColor hover:bg-buttonHover hover:text-white hover:border-transparent outline-none shadow-md hover:shadow-lg focus:outline-none focus:ring-offset-2 focus:ring-buttonHover transition-all duration-400 "
              >
                {t('contactLink')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
