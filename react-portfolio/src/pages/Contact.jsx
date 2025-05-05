// src/sections/Contact.jsx
import React from "react";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-ctp-base flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/1aK0LGbQ"
        className="flex flex-col text-ctp-text max-w-[600px] w-full"
      >
        <Title>Contact Me</Title>

        <input
          className="bg-ctp-overlay2 placeholder-ctp-crust p-2 mt-4"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-ctp-overlay2 placeholder-ctp-crust"
          type="email"
          placeholder="Email"
          name="email"
        />

        <div className="relative">
          <textarea
            className="bg-ctp-overlay2 p-2 w-full placeholder-ctp-crust"
            name="message"
            rows="6"
            placeholder="Message"
          />
          <button className="absolute bottom-2 right-2 bg-ctp-mauve hover:bg-ctp-mauve text-ctp-crust px-4 py-2 rounded">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
