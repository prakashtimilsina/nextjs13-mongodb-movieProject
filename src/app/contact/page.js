import React from "react";
import ContactCard from "../component/ContactCard";
import styles from "@/app/contact/contact.module.css";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We would like to hear <span> from you.</span>{" "}
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.516627004311!2d-95.68997422472727!3d29.646779337303037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e08a86fe0f43%3A0xc5adfdd47b18468a!2s11522%20Jonstone%20Paisley%20Ct%2C%20Richmond%2C%20TX%2077407!5e0!3m2!1sen!2sus!4v1683143319855!5m2!1sen!2sus"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
    </>
  );
};

export default Contact;
