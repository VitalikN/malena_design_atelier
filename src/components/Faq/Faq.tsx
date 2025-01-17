import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getFaqItems } from './getFaqItems';
import { getTranslations } from 'next-intl/server';

const Faq = async () => {
  const faqItems = await getFaqItems();
  const t = await getTranslations('Faq');

  // Разделяем вопросы на две группы
  const firstColumnItems = faqItems.slice(0, 5);
  const secondColumnItems = faqItems.slice(5);

  return (
    <section className="relative max-w-full bg-white">
      <div
        className="absolute inset-0 bg-[url('/hero-faq.jpg')] bg-cover bg-center opacity-30 z-0"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-10">
        <h2 className="p-2 text-center xs:text-26 md:text-30 font-semibold text-gradientTo">
          {t('title')}
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-lg overflow-hidden">
          {/* Прозрачный фон */}
          <div
            className="absolute inset-0 bg-navBg opacity-70 rounded-lg"
            aria-hidden="true"
          ></div>
          {/* Первая колонка */}
          <div className="relative  overflow-hidden">
            <Accordion type="single" collapsible>
              {firstColumnItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-xl font-medium text-gradientTo hover:text-buttonHover focus-visible:outline-gradientTo">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-500">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Вторая колонка */}
          <div className="relative overflow-hidden">
            <Accordion type="single" collapsible>
              {secondColumnItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-xl font-medium text-gradientTo hover:text-buttonHover focus-visible:outline-gradientTo">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-500">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
