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

  function handleChange(e) {
      e.preventDefault();
      const name = e.target.name;
      const value = e.target.value;
  }
  function handleSubmit() {}

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
            value={user.username}
            onChange={handleChange}
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
            value={user.username}
            onChange={handleChange}
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
            value={user.username}
            onChange={handleChange}
            rows={5}
          />
        </label>
      </div>
      <div>
        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
