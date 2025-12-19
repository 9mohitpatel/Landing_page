import axios from "axios";
import { useState } from "react";
import { API_BASE } from "../config";

const initialState = {
  fullName: "",
  email: "",
  mobile: "",
  city: ""
};

const ContactForm = ({
  title = "Share your details",
  subtitle = "Tell us about your project and we will craft a tailored plan.",
  variant = "light"
}) => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    try {
      await axios.post(`${API_BASE}/api/contact`, form);
      setStatus("We received your details. Our team will reach out soon.");
      setForm(initialState);
    } catch (error) {
      setStatus("Unable to submit right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`contact-card contact-${variant}`}>
      <div className="contact-card-head">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <form className={`contact-form ${variant === "hero" ? "glass" : "light"}`} onSubmit={handleSubmit}>
        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
        />
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />
        <button className="primary-btn" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </button>
        {status && <div className="status">{status}</div>}
      </form>
    </div>
  );
};

export default ContactForm;
