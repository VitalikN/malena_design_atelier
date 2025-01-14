import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

const About = async () => {
  const t = await getTranslations('About');
  return (
    <section id="About" className=" bg-navBg ">
      <div className="xl:container mx-auto xs:py-4 xs:px-4   md:px-6 xl:px-8 md:py-6 xl:py-8 ">
        <h2 className=" md:hidden p-2 text-center xs:text-26 md:text-30  text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text ">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mx-auto">
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
              {t('title')}
            </h2>
            <p className="mb-[30px] text-justify">{t('description')}</p>
            <Link
              href="#ContactForm"
              className=" bg-backgroundButton mt-auto 
              mx-auto  px-6 py-2    font-semibold  rounded-lg  border border-borderColor  hover:bg-buttonHover  hover:text-white  hover:border-transparent   outline:none   shadow-md hover:shadow-lg   focus:outline-none   focus:ring-offset-2     focus:ring-buttonHover   transition-all   duration-300"
            >
              {t('contactLink')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
