'use client';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [dynamicHeight, setDynamicHeight] = useState('80vh');
  const t = useTranslations('Hero');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      let calculatedHeight;

      if (windowWidth <= 768) {
        calculatedHeight = 700;
      } else if (windowWidth <= 1280) {
        calculatedHeight =
          600 + ((windowWidth - 768) * (1000 - 600)) / (1280 - 768);
      } else if (windowWidth <= 1500) {
        calculatedHeight =
          1000 + ((windowWidth - 1280) * (1100 - 1000)) / (1500 - 1280);
      } else if (windowWidth <= 1700) {
        calculatedHeight =
          1100 + ((windowWidth - 1500) * (1200 - 1100)) / (1700 - 1500);
      } else {
        calculatedHeight = 1400;
      }

      setDynamicHeight(`${calculatedHeight}px`);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className=" ">
      <div
        className="bg-[url('/hero.jpg')] bg-cover bg-center  w-full h-[80vh] z-[-1]"
        style={{ height: dynamicHeight }}
      >
        <div className="container mx-auto h-full flex mobile:py-2 mobile:px-2 md:px-6 xl:px-8 md:pb-2 xl:pb-2 text-center">
          <div className="flex flex-col items-center justify-center mobile:mr-[50px] md:mr-0">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-white mobile:text-32 md:text-38 lg:text-40 xl:text-50 font-bold pb-[20px] mobile:max-w-[320px]  md:max-w-[400px] lg:max-w-[500px] xl:ml-[150px] italic"
            >
              {t('title')}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`" text-white mobile:text-26 font-bold md:text-34 lg:text-38 xl:text-46 mobile:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:ml-[150px] italic "
                `}
              //  ${dancingScript.className}
            >
              {t('subtitle')}
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
