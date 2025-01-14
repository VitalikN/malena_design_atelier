import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="About" className=" bg-navBg ">
      <div className="xl:container mx-auto xs:py-4 xs:px-4   md:px-6 xl:px-8 md:py-6 xl:py-8 ">
        <h2 className=" md:hidden p-2 text-center xs:text-26 md:text-30  text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text ">
          Про нас
        </h2>{" "}
        <div
          className="
        grid grid-cols-1 md:grid-cols-2   gap-4  mx-auto 
        "
        >
          <div className="flex-1 flex items-stretch">
            <Image
              src="/about.jpg"
              alt="about"
              width={1000}
              height={1000}
              className="w-full h-full object-cover mx-auto"
            />
          </div>
          <div
            className="
          flex flex-col 
          flex-1 bg-navBg p-4  items-stretch"
          >
            <h2 className=" max-md:hidden  p-2 text-center xs:text-26 md:text-30  text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text ">
              Про нас
            </h2>
            <p className="mb-[30px] text-justify">
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
            <Link
              href="#Contact"
              className=" bg-backgroundButton mt-auto 
              mx-auto  px-6 py-2    font-semibold  rounded-lg  border border-borderColor  hover:bg-buttonHover  hover:text-white  hover:border-transparent   outline:none   shadow-md hover:shadow-lg   focus:outline-none   focus:ring-offset-2     focus:ring-buttonHover   transition-all   duration-300"
            >
              звязатись
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
