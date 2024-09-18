import React from 'react'
import { IoIosMailOpen } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { EmailForm } from "@/components/EmailForm";

const Contact = () => {
  return (
    <div className="dark:text-white relative flex flex-col items-center justify-center text-center px-20 mt-10">
      <h2 className="dark:text-white text-8xl text-gray-700 font-bold">
        Get In <span className="text-8xl text-primary font-bold">Touch</span>
      </h2>
      <div className="flex items-center justify-center gap-8 mt-10">
        <div className="flex flex-col w-3/12 items-start justify-start text-left">
          <h3 className="dark:text-white text-4xl text-gray-700 font-bold">
            Don&apos;t be shy!
          </h3>
          <p className="dark:text-white text-gray-600 mt-4">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
          <div className="flex items-center mt-4">
            <IoIosMailOpen className="text-4xl text-primary" />
            <div>
              <p className="dark:text-white text-gray-600 ml-4">Mail me</p>
              <a href="mailto:fjbl2788@gmail.com" className="text-primary ml-4">
                fjbl2788@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FaSquarePhone className="text-4xl text-primary" />
            <div>
              <p className="dark:text-white text-gray-600 ml-4">Call me</p>
              <a href="tel:+573143322288" className="text-primary ml-4">
                +593 96 184 2276
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-9/12">
          <EmailForm />
        </div>
      </div>
    </div>
  );
}

export default Contact
