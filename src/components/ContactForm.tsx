"use client";
import { Formik, Form, Field, FormikValues, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Notification from "./ui/CustomNotification";
import sendEmail from "@/utils/sendEmail";
import { ReloadIcon } from "@radix-ui/react-icons";
import ErrorMessage, { ErrorMessageProps } from "./ErrorMessage/ErrorMessage";
import { motion } from "framer-motion";

export interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

const ContactForm = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorMessageProps | null>(null);
  const t = useTranslations("ContactForm");

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, t("nameMinLength"))
      .max(50, t("nameMaxLength"))
      .required(t("nameRequired")),
    email: Yup.string().email(t("emailInvalid")).required(t("emailRequired")),
    phone: Yup.string()
      .matches(/^\+?[0-9]{10,15}$/, t("phoneInvalid"))
      .required(t("phoneRequired")),
  });

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      setLoading(true);
      await sendEmail(process.env.NEXT_PUBLIC_UKR_NET_EMAIL_USER!, values);

      resetForm();
      setNotificationVisible(true);
      setError(null);
    } catch (err) {
      console.error("Error submitting form:", err);
      if (err instanceof Error) {
        setError({
          status: 500,
          message: err.message,
        });
      }
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <section
      id="Contact"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/about.jpg)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto py-12 md:py-16 px-4 relative z-10">
        <h2 className="text-white text-3xl md:text-4xl text-center mb-6 font-semibold">
          {t("heading")}
        </h2>
        {/* Анимированная форма */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Formik
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}
          >
            {({ touched, errors, handleChange, handleBlur, values }) => (
              <Form className="max-w-md mx-auto bg-navBg p-8 rounded-lg shadow-xl opacity-90 backdrop-blur-md">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold text-gradientTo"
                  >
                    {t("name")}
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:outline-gradientFrom"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name ? (
                    <div className="text-red-500 text-sm absolute">
                      {errors.name}
                    </div>
                  ) : null}
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold text-gradientTo"
                  >
                    {t("email")}
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full  p-2 border border-gray-300 rounded-md mt-1 focus:outline-gradientFrom"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-500 text-sm absolute">
                      {errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="mb-7">
                  <label
                    htmlFor="phone"
                    className="block text-lg font-semibold text-gradientTo"
                  >
                    {t("phone")}
                  </label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full  p-2 border border-gray-300 rounded-md mt-1 focus:outline-gradientFrom"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.phone && errors.phone ? (
                    <div className="text-red-500 text-sm absolute">
                      {errors.phone}
                    </div>
                  ) : null}
                </div>
                <div className="w-full flex mx-auto">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full max-w-[200px] flex items-center justify-center bg-backgroundButton mt-auto mx-auto px-6 py-2 font-semibold rounded-lg border border-borderColor hover:bg-buttonHover hover:text-white hover:border-transparent outline:none shadow-md hover:shadow-lg focus:outline-none focus:ring-offset-2 focus:ring-buttonHover transition-all duration-400"
                  >
                    {loading ? (
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      t("submit")
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
      {error && <ErrorMessage status={error.status} message={error.message} />}
      <div className="absolute bottom-3 left-3 z-[50]">
        {notificationVisible && (
          <Notification onHide={() => setNotificationVisible(false)} />
        )}
      </div>
    </section>
  );
};

export default ContactForm;
