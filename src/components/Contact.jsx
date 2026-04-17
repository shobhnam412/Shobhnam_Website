import React from "react";
import './Contact.css';
import emailjs from "emailjs-com";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_n42jxzj",  
      "template_ho7zt3c",  
      e.target,
      "KzVkoqhlQXGsFuJUR"    
    ).then(
      (result) => {
        alert("Message Sent Successfully ✅");
      },
      (error) => {
        alert("Failed ❌ Try again");
      }
    );

    e.target.reset();
  };

  return (
    <div className="contact-container">

      <h1 className="contact-heading">Contact Us</h1>

      <div className="contact-wrapper">

        {/* FORM */}
        <div className="contact-form">
          <h2>Get in Touch</h2>

          <form onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <input type="tel" name="user_phone" placeholder="Your Phone" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* DETAILS */}
        <div className="contact-details">
          <h2>Our Office</h2>

          <p><strong>Company:</strong> SOLITAIRE PREMIUMS</p>
          <p><strong>Owner:</strong> Ram Narayan Mishra</p>
          <p>
            <strong>Address:</strong><br />
            317, Gayatri Puram Gali No. 1,<br />
            Purana Shivli Road, Kalyanpur,<br />
            Kanpur, Uttar Pradesh
          </p>

          <p><strong>Phone:</strong> +91 9559508108</p>
          <p><strong>Email:</strong> shobhnam412@gmail.com</p>

          <iframe
            title="map"
            src="https://www.google.com/maps?q=Kalyanpur%20Kanpur&output=embed"
            width="100%"
            height="200"
            style={{ border: 0, marginTop: "10px" }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Contact;