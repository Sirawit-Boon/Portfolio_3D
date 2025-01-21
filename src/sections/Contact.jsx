import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_2j8xtef",
        "template_u8c0bmr",
        {
          from_name: form.name,
          to_name: "Sirawit",
          from_email: form.email,
          to_email: "sirawit.boonthon@gmail.con",
          message: form.message,
          reply_to: form.email,
        },
        "RRMyl1wu_NA9FzLaH"
      );

      // Google Analytics Event for Successful Submission
    window.gtag("event", "submit_contact_form", {
      event_category: "interaction",
      event_label: "Contact Form",
      value: 1,
    });

      setLoading(false);
      toast(
        <div className="w-[300px] h-10">
          <strong>Your message has been sent!</strong>
        </div>,
        {
          position: "bottom-right",
          style: {
            borderRadius: "4px",
            color: "white",
            backgroundColor: "#00A37299",
            display: "block",
          },
        }
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast(
        <div className="w-[300px] h-10">
          <strong>Something went wrong</strong>
          <p>Please try again</p>
        </div>,
        {
          position: "bottom-center",
          style: {
            borderRadius: "4px",
            color: "white",
            backgroundColor: "#E5364B99",
            display: "block",
          },
        }
      );
    }
  };
  return (
    <section className="c-space my-20" id="contact" >
      <div className="relative md:min-h-[1024px] h-[800px] flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute h-full md:max-h-[1024px]"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Wheter you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="md:mt-12 mt-5 flex flex-col md:space-y-7 gap-4"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your name"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="exmample@gamil.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
