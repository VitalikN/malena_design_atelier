'use client';
import { Formik, Form, Field, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useTranslations } from 'next-intl';
import sendMessageToTelegram from '@/utils/sendMessageToTelegram';
import { useState } from 'react';
import Notification from './ui/CustomNotification';

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const initialValues = {
  name: '',
  email: '',
  phone: '',
};

const ContactForm = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const t = useTranslations('ContactForm');

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, t('nameMinLength'))
      .max(50, t('nameMaxLength'))
      .required(t('nameRequired')),
    email: Yup.string().email(t('emailInvalid')).required(t('emailRequired')),
    phone: Yup.string()
      .matches(/^\+?[0-9]{10,15}$/, t('phoneInvalid'))
      .required(t('phoneRequired')),
  });

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>,
  ) => {
    try {
      const message = `
    Заявка на подбор платья: имя:${values.name}, телефон:${values.phone}, электронный адрес:${values.email}
  `;
      await sendMessageToTelegram(message);
      resetForm();
      setNotificationVisible(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="ContactForm"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/about.jpg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto py-12 md:py-16 px-4 relative z-10">
        <h2 className="text-white text-3xl md:text-4xl text-center font-bold mb-6">
          {t('heading')}
        </h2>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          {({ touched, errors, handleChange, handleBlur, values }) => (
            <Form className="max-w-md mx-auto bg-navBg p-8 rounded-lg shadow-xl opacity-90 backdrop-blur-md">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gradientTo"
                >
                  {t('name')}
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-gradientFrom"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name ? (
                  <div className="text-red-500 text-sm">{errors.name}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gradientTo"
                >
                  {t('email')}
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-gradientFrom"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email ? (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                ) : null}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold text-gradientTo"
                >
                  {t('phone')}
                </label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-gradientFrom"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.phone && errors.phone ? (
                  <div className="text-red-500 text-sm">{errors.phone}</div>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo text-white text-lg font-semibold rounded-md hover:bg-gradientTo transition duration-300 transform hover:scale-105 focus:outline-gradientFrom"
              >
                {t('submit')}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="absolute bottom-3 left-3 z-[50]">
        {notificationVisible && (
          <Notification onHide={() => setNotificationVisible(false)} />
        )}
      </div>
    </section>
  );
};

export default ContactForm;
