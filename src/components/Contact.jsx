import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { IoLocation } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [state, handleSubmit] = useForm('xnqendlp');

  if (state.succeeded) {
    return <p className="text-black text-4xl animate-pulse">Thanks for your message! I'll get back to you soon ❤️</p>;
  }

  return (
    <div className="contact-section h-screen">
        <div className="text-4xl font-bold text-center my-8 uppercase">Contact</div>
        <div className="flex m-[10rem]">
            <div className="contact-info basis-1/2 flex flex-col m-6 space-y-4">
                <p className="text-left">If you would like to work together or just want to say hi, my inbox is always open!</p>
                <div className="flex flex-row items-center space-x-3">
                    <IoLocation />
                    <p>Sydney</p>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <MdMarkEmailUnread />
                    <p>phuongmous@gmail.com</p>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <BsGithub />
                    <p>github.com/phuongmous</p>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <BsLinkedin />
                    <p>linkedin.com/in/phuongvu1911/</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form basis-1/2 m-6">
            <div className="mb-4">
                <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                className="mt-1 p-2 w-full border rounded-md"
                />
                <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-500"
                />
            </div>
            <div className="mb-4">
                <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                className="mt-1 p-2 w-full border rounded-md"
                />
                <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500"
                />
            </div>
            <div className="mb-4">
                <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                className="mt-1 p-2 w-full border rounded-md"
                />
                <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
                className="text-red-500"
                />
            </div>
            <div className="mb-4">
                <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="mt-1 p-2 w-full border rounded-md"
                />
                <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500"
                />
            </div>
            <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-100 text-black px-4 py-2 rounded-md hover:bg-black hover:text-white"
            >
                Send Message
            </button>
            </form>
        </div>
    </div>
  );
};

export default Contact;