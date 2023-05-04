"use client";
import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  function handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }
  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        header: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });

      //Set status based on response from the API route
    if (response.status === 200) {
      setUser({
        username: "",
        email: "",
        phone: "",
        message: "",
      });
      setStatus("success");
    } else {
      setStatus("error");
    }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name:
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className={mulish.className}
            value={user.username}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter your email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={mulish.className}
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Enter your phone:
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            className={mulish.className}
            value={user.phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message:
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className={mulish.className}
            value={user.message}
            onChange={handleChange}
            required
            autoComplete="off"
            rows={5}
          />
        </label>
      </div>
      <div>
        {status === 'status' && <p className={styles.success_msg}>Appreciated for your message.</p>}
        {status === 'error' && <p className={styles.error_msg}>There is something went wrong while submitting the message.</p>}
        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
