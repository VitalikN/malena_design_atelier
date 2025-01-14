const About = () => {
  return (
    <section id="About" className=" bg-mainBg">
      <div className="container mx-auto xs:py-4 xs:px-4   md:px-6 xl:px-8 md:py-6 xl:py-8 ">
        <h2 className="p-2 text-center xs:text-26 md:text-30  text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text ">
          Про нас
        </h2>
        <div className="md:flex md:gap-4">
          {/* Блок для зображення */}
          <div className="flex-1   ">
            <div className="w-full h-auto bg-gray-300">img</div>
          </div>
          <div className="flex-1 bg-navBg p-4 ">
            <p>
              У Malena Design Atelier ви знайдете готові весільні та вечірні
              сукні, а також можливість замовити індивідуальний пошив,
              враховуючи всі ваші побажання. Наш великий досвід дозволяє нам
              глибоко зрозуміти потреби кожної нареченої. Під час спілкування ми
              не лише створюємо сукню, а й вкладаємо частинку нашої душі, щоб
              зробити ваше свято справжнім символом любові, щастя та краси.
              Кожна модель створена з любов’ю нашим дизайнером, щоб ви
              почувалися впевнено, неперевершено та були в центрі уваги у
              найважливіші моменти вашого життя.
            </p>
            <button
              type="button"
              className=" bg-backgroundButton 
              mx-auto  px-6 py-2  text-gray-800  font-semibold  rounded-lg  border border-borderColor  hover:bg-buttonHover  hover:text-white  hover:border-transparent   outline:none   shadow-md hover:shadow-lg   focus:outline-none   focus:ring-offset-2     focus:ring-buttonHover   transition-all   duration-300"
            >
              звязатись
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
