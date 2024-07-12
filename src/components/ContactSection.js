import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import styles from '../styles/Home.module.css'; // Import the CSS module

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4eb2uqh', 'template_kbf13ot', form.current)
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
      });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Contact Us</h2>
      <div className={styles.contactFormContainer}>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
