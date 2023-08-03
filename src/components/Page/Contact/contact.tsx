import React from "react";
import Section from "@/components//Common/SectionLayout";
import Heading from "@/components/Common/SectionHeading";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai"
import { HiEnvelope } from "react-icons/hi"




export default function ContactSection() {
  return (
    <Section id="contact" backgroundColor="bg-black-4">
      <Heading name="Contact" />
      <div className="flex flex-row gy-5">
        <div className="flex flex-col">
          <div>
            <h3>Get in Touch</h3>
            <p className="flex flex-row">
              <FaMapMarkerAlt size={20} />
              <span className="pl-4">V6P 2G8 Vancouver, Canada</span>
            </p>
          </div>
          <div>
            <h3>Follow Me</h3>
            <p className="flex flex-row">
              <FaMapMarkerAlt size={20} />
              <span className="pl-4">V6P 2G8 Vancouver, Canada</span>
            </p>
          </div>
        </div>

        <div>

        </div>
      </div>
    </Section>
  )
}