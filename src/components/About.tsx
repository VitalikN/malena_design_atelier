const About = () => {
  return (
    <section className=" bg-mainBg">
      <div className="container mx-auto xs:py-4 xs:px-4   md:px-6 xl:px-8 md:py-6 xl:py-8 ">
        <h2 className="text-center md:pb-4 xl:pb-8">Про нас</h2>
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
              className=" bg-backgroundButton px-3 py-1  
            
            rounded-xl hover:bg-buttonHover transition duration-300 hover:text-white
            
            "
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
