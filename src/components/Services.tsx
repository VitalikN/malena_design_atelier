import { FaRegUser } from "react-icons/fa";
import { TbIroningSteam } from "react-icons/tb";
import { ImScissors } from "react-icons/im";
import { GiSewingNeedle, GiSewingMachine } from "react-icons/gi";
import { BiCloset } from "react-icons/bi";
import { LiaCheckCircle } from "react-icons/lia";
const Services = () => {
  return (
    <section className=" bg-navBg  md:py-6 xl:py-8">
      <div className="container mx-auto xs:py-2 xs:px-2   md:px-6 lg:px-8 md:pb-2 lg:pb-2 ">
        <h2 className="p-2 text-center xs:text-26 md:text-30  text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text ">
          Наші послуги:
        </h2>
        <ul className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <li className="p-2 max-w-72  mx-auto">
            <ImScissors className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">
              Індивідуальний пошив — створення суконь та іншого одягу під ваше
              замовлення з урахуванням побажань і стилю.
            </p>
          </li>
          <li className="p-2 max-w-72  mx-auto">
            <LiaCheckCircle className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">
              Контроль якості — ретельна перевірка кожної деталі для ідеального
              результату.
            </p>
          </li>
          <li className="p-2 max-w-72  mx-auto">
            <TbIroningSteam className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">
              Відпарювання — професійна підготовка суконь до важливого дня.
            </p>
          </li>
          <li className="p-2 max-w-72  mx-auto">
            <FaRegUser className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">
              Консультація стиліста салону — допомога у виборі фасону та стилю,
              що підкреслить вашу унікальність.
            </p>
          </li>
        </ul>
        <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4  ">
          <li className="p-2 max-w-72  mx-auto">
            <BiCloset className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">
              Зберігання сукні до весілля — безпечне зберігання вашого вбрання у
              нашому салоні.
            </p>
          </li>
          <li className="p-2 max-w-72 mx-auto ">
            <GiSewingMachine className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">
              Ательє — професійний пошив та корекція готових суконь.
            </p>
          </li>
          <li className="p-2 max-w-72 mx-auto ">
            <GiSewingNeedle className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">
              Пошив усіх видів одягу на замовлення — від елегантних суконь до
              повсякденних речей.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Services;
