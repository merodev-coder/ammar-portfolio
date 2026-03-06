import React from "react";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();


  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  //service_9xqf0bn
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send("service_9xqf0bn", "template_mf459bq", { from_name: form.name, from_email: form.email, to_email: `merodev1310@gmail.com`, message: form.message }, "wRtBfOz7h0WpzOfgj")


      setLoading(false);
      alert("Message sent successfully");

    } catch (error) {
      setLoading(false);
      alert("Message sent successfully");
    }


  };
  return (
    <section className="c-space my-20 max-w-7xl mx-auto" id="contact">

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen" />
        <div className="contact-container">
          <h3 className="head-text">Contact Me</h3>
          <p className="text-lg text-white-600 mt-3">
            I'm here to help! Whether you have questions, need support, or want to collaborate on a project, feel free to reach out. Let's connect and make something amazing together!
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Anakin Skywalker" className="field-input" />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="AnakinSkywalker@StarWars.com" className="field-input" />
            </label>
            <label className="space-y-3">
              <span className="field-label ">Your message</span>
              <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Reach out. Together, we can bring balance to this project. I promise, no Sith business." className="field-input" />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>


      </div>




    </section>
  );
};

export default Contact;