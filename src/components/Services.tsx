'use client';
import { motion } from 'framer-motion';
import { FaRegUser } from 'react-icons/fa';
import { TbIroningSteam } from 'react-icons/tb';
import { ImScissors } from 'react-icons/im';
import { GiSewingNeedle, GiSewingMachine, GiAmpleDress } from 'react-icons/gi';
import { BiCloset } from 'react-icons/bi';
import { LiaCheckCircle } from 'react-icons/lia';
import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('Services');

  // Варианты анимации для элементов списка
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Исходное состояние: невидимость и сдвиг вниз
    visible: { opacity: 1, y: 0 }, // Конечное состояние: видимость и нормальное положение
  };

  return (
    <motion.section
      id="Services"
      className="bg-navBg md:py-6 xl:py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Анимация запускается, когда секция попадает в видимость
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto xs:py-2 xs:px-2 md:px-6 lg:px-8 md:pb-2 lg:pb-2">
        <motion.h2
          className="p-2 text-center xs:text-26 md:text-30 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text"
          initial={{ y: -50, opacity: 0 }} // Эффект выезда сверху
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t('servicesTitle')}
        </motion.h2>

        <motion.ul
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }, // Задержка между появлением элементов
            },
          }}
        >
          {[
            {
              icon: (
                <ImScissors className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
              ),
              text: t('customTailoring'),
            },
            {
              icon: (
                <LiaCheckCircle className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
              ),
              text: t('qualityControl'),
            },
            {
              icon: (
                <TbIroningSteam className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
              ),
              text: t('steaming'),
            },
            {
              icon: (
                <FaRegUser className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
              ),
              text: t('stylistConsultation'),
            },
            {
              icon: (
                <BiCloset className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
              ),
              text: t('weddingStorage'),
            },
            {
              icon: (
                <GiSewingMachine className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
              ),
              text: t('dressAlterations'),
            },
            {
              icon: (
                <GiSewingNeedle className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
              ),
              text: t('everydayClothing'),
            },
            {
              icon: (
                <GiAmpleDress className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
              ),
              text: t('eveningDressRental'),
            },
          ].map((service, index) => (
            <motion.li
              key={index}
              className="p-2 max-w-72 mx-auto text-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="m-2 xs:size-10 md:size-12 text-gradientTo mx-auto"
              >
                {service.icon}
              </motion.div>
              <p>{service.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Services;
