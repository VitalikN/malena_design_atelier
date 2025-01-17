'use client';
import 'swiper/swiper-bundle.css';
import SliderNavigation from '../ui/SliderNavigation/SliderNavigation';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr';
import { useTranslations } from 'next-intl';
import { feedbackList } from './feedbackList';

const Feedback = () => {
  const sliderRef = useRef(null);
  const t = useTranslations('Feedback');

  // Анимация для появления блока с отзывами
  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 }, // Изначально скрыто с небольшой подвижкой вниз
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    }, // Плавное появление
  };

  // Анимация для элементов внутри карточки
  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const starAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <section className="py-10">
      <h2 className="text-center mb-[15px] xs:text-26 md:text-30 text-gradient font-semibold capitalize">
        {t('title')}
      </h2>
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Когда 30% блока появится в области видимости
        variants={scrollAnimation}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: '.custom-next-feedback',
            prevEl: '.custom-prev-feedback',
          }}
          ref={sliderRef}
          loop
          breakpoints={{
            900: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {feedbackList.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <motion.div
                className="py-[28px] px-[32px] bg-white shadow rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardAnimation}
              >
                <motion.h3 className="text-[22px] font-bold mb-[15px]">
                  {feedback.name}
                </motion.h3>

                <motion.div
                  className="flex items-center justify-between mb-[15px]"
                  variants={starAnimation}
                >
                  <div className="flex items-center">
                    {[...Array(feedback.rating)].map((_, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src="/star-1.png"
                          alt="Star"
                          width={24}
                          height={24}
                          className="mr-1"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      key={feedback.id}
                      src={feedback.photo}
                      alt={feedback.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </motion.div>
                  <p className="text-[14px] text-gray-500 font-medium">
                    {feedback.time}
                  </p>
                </motion.div>

                <motion.p
                  className="text-black text-[16px] h-[146px] overflow-y-auto scrollbar-hide"
                  variants={cardAnimation}
                >
                  {feedback.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <SliderNavigation
        prevClass="custom-prev-feedback"
        nextClass="custom-next-feedback"
        prevIcon={<GrCaretPrevious color="#d4b5a0" />}
        nextIcon={<GrCaretNext color="#d4b5a0" />}
      />
    </section>
  );
};

export default Feedback;
