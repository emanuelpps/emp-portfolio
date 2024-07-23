"use client";
import Modal from "@/components/modal/Modal";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "@/components/SectionTitles/SectionTitles";

function ContactForm() {
  const [buttonText, setButtonText] = useState("Send");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState(false);
  const [errorManagement, setErrorManagement] = useState();
  const form = useRef();

  const errorManager = {
    formError: "Please check the information in the form.",
    formDeliverError: "There was a problem, and the form could not be sent.",
    formDeliverOk:
      "The message has been successfully sent. I will get in touch with you shortly.",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkForm();
  };

  const checkForm = () => {
    const specialChars = /[^a-zA-Z0-9 ]/g;
    if (!fullName || !email || !subject || !message) {
      setFormErrors(true);
      setErrorManagement(errorManager.formError);
      setTimeout(() => {
        setFormErrors(false);
      }, 3000);
    } else {
      setFormErrors(false);
      sendEmail();
      setButtonText("Sending");
      //enviar mail
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_PORTFOLIO_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY
      )
      .then(
        (response) => {
          setErrorManagement(errorManager.formDeliverOk);
          setEmail("");
          setFullName("");
          setSubject("");
          setMessage("");
          setButtonText("Send");
          setFormErrors(true);
          setTimeout(() => {
            setFormErrors(false);
          }, 4000);
        },
        (error) => {
          console.log("Error:", error.status, "description:", error.text);
          setErrorManagement(errorManager.formDeliverError);
          setFormErrors(true);
          setTimeout(() => {
            setFormErrors(false);
          }, 4000);
          setButtonText("Send");
        }
      );
  };

  return (
    <>
    <div className="absolute flex justify-center items-center w-full">
      <span className="text-[16rem] font-[900] opacity-10">Contact</span>
    </div>
      {formErrors && <Modal params={errorManagement} />}
      <div className="flex flex-col justify-center items-center w-[100%]">
        <form
          id="contact-container"
          className="rounded-lg shadow-xl flex flex-col px-4  py-6 w-[80%]  mt-5 md:mt-20"
          ref={form}
          onSubmit={handleSubmit}
        >
          <label htmlFor="fullName" className="mt-8 font-extralight text-xl">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="from_name"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 text-gray-500 text-xl"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            aria-labelledby="fullName"
          />

          <label htmlFor="email" className="mt-4 font-extralight text-xl">
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="reply_to"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 text-gray-500 text-xl"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            aria-labelledby="email"
          />

          <label htmlFor="subject" className="mt-4 font-extralight text-xl">
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 text-gray-500 text-xl"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            aria-labelledby="subject"
          />

          <label htmlFor="message" className="mt-4 font-extralight text-xl">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 text-gray-500 text-xl"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            aria-labelledby="message"
          ></textarea>
          <div className="flex flex-row items-center justify-center md:justify-start">
            <button className="py-3 mt-12 px-10 inline-flex items-center gap-x-2 text-md font-normal rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
              {buttonText === "Sending" ? (
                <>
                  {buttonText}
                  <div className="loadership_UIUWW">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </>
              ) : (
                buttonText
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
