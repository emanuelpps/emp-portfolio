"use client";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import handleValidation from "@/api/handleValidation";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const [showFailureMessage, setFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullName.length <= 0) {
      tempErrors["fullName"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: fullName,
        subject: subject,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(fullName, email, subject, message);
  };

  return (
    <div id="contact-container">
      <form
        className="rounded-lg shadow-xl flex flex-col px-8 py-8 w-8/12 md:w-[42rem] mt-20"
        onSubmit={handleSubmit}
      >
        <h1 className="font-semibold text-md">Send me a message</h1>

        <label for="fullname" className="mt-8 font-extralight text-sm">
          Full name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullname"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 text-gray-500"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />

        <label for="email" className="mt-4 font-extralight text-sm">
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 text-gray-500"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label for="subject" className="mt-4 font-extralight text-sm">
          Subject<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 text-gray-500"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />

        <label for="message" class="mt-4 font-extralight text-sm">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 text-gray-500"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <div className="flex flex-row items-center justify-start">
          <button className=" py-3 mt-12 px-10 inline-flex items-center gap-x-2 text-sm font-normal rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
