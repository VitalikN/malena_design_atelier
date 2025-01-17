'use client';
import { Button } from '../button';
import { motion } from 'framer-motion';

interface SliderNavigationProps {
  prevClass: string; // Класс для кнопки "предыдущий"
  nextClass: string; // Класс для кнопки "следующий"
  prevIcon: React.ReactNode; // React-компонент иконки для кнопки "предыдущий"
  nextIcon: React.ReactNode; // React-компонент иконки для кнопки "следующий"
}

const SliderNavigation = ({
  prevClass,
  nextClass,
  prevIcon,
  nextIcon,
}: SliderNavigationProps) => {
  // Анимация для кнопки "предыдущий" (выезжает слева)
  const prevNavAnimation = {
    hidden: { opacity: 0, x: -50 }, // Начальная позиция слева
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Анимация для кнопки "следующий" (выезжает справа)
  const nextNavAnimation = {
    hidden: { opacity: 0, x: 50 }, // Начальная позиция справа
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="flex justify-center mt-[42px] lg:mt-[50px]">
      <motion.div
        className={`${prevClass} mx-2 flex items-center justify-center bg-transparent hover:bg-navBg focus-visible:outline-gradientTo`}
        initial="hidden"
        whileInView="visible"
        variants={prevNavAnimation}
      >
        <Button className="bg-transparent hover:bg-navBg focus-visible:outline-gradientTo">
          {prevIcon}
        </Button>
      </motion.div>
      <motion.div
        className={`${nextClass} mx-2 flex items-center justify-center bg-transparent hover:bg-navBg focus-visible:outline-gradientTo`}
        initial="hidden"
        whileInView="visible"
        variants={nextNavAnimation}
      >
        <Button className="bg-transparent hover:bg-navBg focus-visible:outline-gradientTo">
          {nextIcon}
        </Button>
      </motion.div>
    </div>
  );
};

export default SliderNavigation;
