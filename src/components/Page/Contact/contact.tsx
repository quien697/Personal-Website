import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Section from "@/components//Common/SectionLayout";
import Heading from "@/components/Common/SectionHeading";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const currentForm = form.current;
  // if (currentForm == null) return;

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
    <Section id="contact" backgroundColor="bg-black-4">
      <Heading name="Contact" />
      <div className="flex flex-col items-center g-y-4">
        <h3 className="text-2xl text-bold mb-4 lg:text-3xl">Get In Touch</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            <input name="name" required placeholder="name" className="grow bg-black-1 border-black-4 border-2 rounded-md px-3 py-2"></input>
            <input name="email" required placeholder="email" className="grow bg-black-1 border-black-4 border-2 rounded-md px-3 py-2"></input>
            <textarea name="message" required rows={5} placeholder="message" className="w-full bg-black-1 border-black-4 border-2 rounded-md px-3 py-2"></textarea>
            <button type="submit" className="bg-blue rounded-full py-3 px-7">Send Message</button>
          </div>
        </form>
      </div>
    </Section>
  )
}