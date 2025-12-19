import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE } from "../config";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const load = () => {
    axios.get(`${API_BASE}/api/contact`).then((res) => setContacts(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="admin-card">
      <h3>Contact Form Responses</h3>
      <div className="list">
        {contacts.map((c) => (
          <div key={c._id} className="list-item">
            <strong>{c.fullName}</strong>
            <div style={{ color: "#475569" }}>{c.city}</div>
            <small>{c.email} • {c.mobile}</small>
          </div>
        ))}
        {!contacts.length && <div>No contact submissions yet.</div>}
      </div>
    </div>
  );
};

export default ContactList;
