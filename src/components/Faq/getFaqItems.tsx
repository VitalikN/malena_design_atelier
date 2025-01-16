import { getTranslations } from 'next-intl/server';

export const getFaqItems = async () => {
  const t = await getTranslations('Faq');

  return [
    { id: 'item-1', question: t('item1.question'), answer: t('item1.answer') },
    { id: 'item-2', question: t('item2.question'), answer: t('item2.answer') },
    { id: 'item-3', question: t('item3.question'), answer: t('item3.answer') },
    { id: 'item-4', question: t('item4.question'), answer: t('item4.answer') },
    { id: 'item-5', question: t('item5.question'), answer: t('item5.answer') },
    { id: 'item-6', question: t('item6.question'), answer: t('item6.answer') },
    { id: 'item-7', question: t('item7.question'), answer: t('item7.answer') },
    { id: 'item-8', question: t('item8.question'), answer: t('item8.answer') },
    { id: 'item-9', question: t('item9.question'), answer: t('item9.answer') },
    {
      id: 'item-10',
      question: t('item10.question'),
      answer: t('item10.answer'),
    },
  ];
};
