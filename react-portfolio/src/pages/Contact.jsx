import React from "react";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#8a8d8c] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/1aK0LGbQ"
        className="flex flex-col max-w-[600px] w-full"
      >
        <Title> Contact Me </Title>
        <br />
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />

        {/* Wrap textarea and button in a relative container */}
        <div className="relative">
          <textarea
            className="bg-[#ccd6f6] p-2 w-full"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>

          {/* Position the button absolutely within the container */}
          <button className="absolute bottom-2 right-2 text-[#3d4357] hover:bg-[#8a8d8c] bg-[#ded9ce] hover:border-[#d9cbb0] px-4 py-2">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
