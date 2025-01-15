import { FaRegUser } from 'react-icons/fa';
import { TbIroningSteam } from 'react-icons/tb';
import { ImScissors } from 'react-icons/im';
import { GiSewingNeedle, GiSewingMachine, GiAmpleDress } from 'react-icons/gi';
import { BiCloset } from 'react-icons/bi';
import { LiaCheckCircle } from 'react-icons/lia';
import { getTranslations } from 'next-intl/server';
const Services = async () => {
  const t = await getTranslations('Services');
  return (
    <section id="Services" className=" bg-navBg  md:py-6 xl:py-8">
      <div className="container mx-auto xs:py-2 xs:px-2   md:px-6 lg:px-8 md:pb-2 lg:pb-2 ">
        <h2 className="p-2 text-center xs:text-26 md:text-30  text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text ">
          {t('servicesTitle')}
        </h2>
        <ul className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <li className="p-2 max-w-72  mx-auto">
            <ImScissors className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">{t('customTailoring')}</p>
          </li>
          <li className="p-2 max-w-72  mx-auto">
            <LiaCheckCircle className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">{t('qualityControl')}</p>
          </li>
          <li className="p-2 max-w-72  mx-auto">
            <TbIroningSteam className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">{t('steaming')}</p>
          </li>
          <li className="p-2 max-w-72  mx-auto">
            <FaRegUser className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">{t('stylistConsultation')}</p>
          </li>
          <li className="p-2 max-w-72  mx-auto">
            <BiCloset className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">{t('weddingStorage')}</p>
          </li>
          <li className="p-2 max-w-72 mx-auto ">
            <GiSewingMachine className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">{t('dressAlterations')}</p>
          </li>
          <li className="p-2 max-w-72 mx-auto ">
            <GiSewingNeedle className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">{t('everydayClothing')}</p>
          </li>
          <li className="p-2 max-w-72 mx-auto ">
            <GiAmpleDress className=" m-2 xs:size-10 md:size-12 text-gradientTo mx-auto " />
            <p className="text-center">{t('eveningDressRental')}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Services;
