import React from "react";
import ContactForm from "./components/ContactForm";
import SectionTitle from "@/components/SectionTitles/SectionTitles";

function Contact() {
  return (
    <div id="contact" className="w-full overflow-x-hidden">
      <div className="flex flex-col gap-20 relative w-full">
        <SectionTitle text="Get in touch" title="Contact" />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
