"use client";

import React, { useState, useEffect } from "react";

const Hero = () => {
  const [dynamicHeight, setDynamicHeight] = useState("80vh");

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className=" ">
      <div
        className="  bg-[url('/hero.jpg')] bg-cover bg-center   w-full h-[80vh] z-[-1]"
        style={{ height: dynamicHeight }}
      >
        <div className="container mx-auto h-full flex  xs:py-2 xs:px-2 md:px-6 xl:px-8 md:pb-2 xl:pb-2 text-center">
          <div className=" ">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Мистецтво бути неперевершеною
            </h1>
            <h2 className=" text-white text-3xl md:text-4xl font-normal ">
              Тільки ви — ідеальний крій, бездоганний стиль
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
