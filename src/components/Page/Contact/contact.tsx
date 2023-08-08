'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Section from '@/components//Common/SectionLayout';
import Heading from '@/components/Common/SectionHeading';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation()
  const form = useRef<HTMLFormElement>(null);
  const currentForm = form.current || "";

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm("service_quien697", "template_quien697", currentForm, "z1oIewy7PtxLBDhk6")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Section id="contact" backgroundColor="bg-neutral-100 dark:bg-neutral-700">
      <Heading name={t("ContactMe")} backgroundName="Contact Me" />
      <div className="flex flex-col items-center g-y-4">
        <h3 className="text-2xl text-bold mb-4 lg:text-3xl">{t("GetInTouch")}</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-wrap justify-center text-white gap-4">
            <input name="name" required placeholder={t("Name")} className="grow bg-neutral-800 outline-blue-600 rounded-md px-3 py-2"></input>
            <input name="email" required placeholder={t("Email")} className="grow bg-neutral-800 outline-blue-600 rounded-md px-3 py-2"></input>
            <textarea name="message" required rows={5} placeholder={t("Message")} className="w-full bg-neutral-800 outline-blue-600 rounded-md px-3 py-2"></textarea>
            <button type="submit" className="bg-blue-600 rounded-full py-3 px-7 shadow-lg hover:bg-blue-800">{t("SendMessage")}</button>
          </div>
        </form>
      </div>
    </Section>
  )
}