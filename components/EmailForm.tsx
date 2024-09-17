"use client";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { Button } from "./Button";

export const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email.");
    }
  };

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
      <div className="flex items-center justify-between gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border border-solid border-gray-400 rounded-md mb-4"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-solid border-gray-400 rounded-md mb-4"
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full p-2 border border-solid border-gray-400 rounded-md mb-4"
          onChange={handleChange}
        />
      </div>
      <textarea
        name="message"
        placeholder="Message"
        className="w-full h-[200px] p-2 border border-solid border-gray-400 rounded-md mb-4"
        onChange={handleChange}
      />
      {/* Botón que no necesita evento */}
      <Button
        text="Send Message"
        icon={<FiSend />}
        onClick={() =>
          handleSubmit(
            new Event("submit") as unknown as React.FormEvent<HTMLFormElement>
          )
        } // Llama a handleSubmit sin pasar eventos
      />
    </form>
  );
};
