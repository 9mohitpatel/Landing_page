import axios from "axios";
import { useState } from "react";
import { API_BASE } from "../config";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    try {
      await axios.post(`${API_BASE}/api/subscribers`, { email });
      setStatus("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      setStatus("Failed to subscribe. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter">
      <div>
        <h3 style={{ margin: "0 0 6px" }}>Stay in the loop</h3>
        <div>Get project updates, design inspo and marketing tips.</div>
      </div>
      <form className="controls" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="primary-btn" type="submit" disabled={loading}>
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status && <div className="status">{status}</div>}
    </div>
  );
};

export default NewsLetter;
