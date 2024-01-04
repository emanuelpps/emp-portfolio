"use client";
import React, { useState } from "react";
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
        class="rounded-lg shadow-xl flex flex-col px-8 py-8 w-8/12 md:w-[42rem]"
        onSubmit={handleSubmit}
      >
        <h1 class="text-2xl font-bold dark:text-gray-50">Send me a message</h1>

        <label for="fullname" class="text-gray-500 mt-8 dark:text-gray-50">
          Full name<span class="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          name="fullname"
          class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-gray-500"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />

        <label for="email" class="text-gray-500 mt-4 dark:text-gray-50">
          E-mail<span class="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-gray-500"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label for="subject" class="text-gray-500 mt-4 dark:text-gray-50">
          Subject<span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-gray-500"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />

        <label for="message" class="text-gray-500 mt-4 dark:text-gray-50">
          Message<span class="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-gray-500"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <div class="flex flex-row items-center justify-start">
          <button class="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
            Send
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="text-cyan-500 ml-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
