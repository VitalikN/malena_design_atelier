const Hero = () => {
  return (
    <section className=" relative ">
      <div className="bg-[url('/hero.jpg')] bg-cover bg-center   w-full h-[80vh] z-[-1]">
        <div className="container mx-auto h-full flex  xs:py-2 xs:px-2 md:px-6 xl:px-8 md:pb-2 xl:pb-2 text-center">
          <div>
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
