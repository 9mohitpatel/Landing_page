import { useState } from "react";
import AddClient from "../admin/AddClient";
import AddProject from "../admin/AddProject";
import ContactList from "../admin/ContactList";
import Subscriber from "../admin/Subscriber";

const AdminPanel = () => {
  const [tab, setTab] = useState("projects");

  return (
    <div className="admin-shell">
      <h2 style={{ marginTop: 0 }}>Admin Panel</h2>
      <p style={{ marginBottom: 18, color: "#475569" }}>
        Manage projects, clients, contact submissions and newsletter
        subscribers.
      </p>

      <div className="admin-nav">
        {[
          ["projects", "Projects"],
          ["clients", "Clients"],
          ["contacts", "Contact Forms"],
          ["subscribers", "Subscribers"]
        ].map(([key, label]) => (
          <button
            key={key}
            className={`tab-btn ${tab === key ? "active" : ""}`}
            onClick={() => setTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "projects" && <AddProject />}
      {tab === "clients" && <AddClient />}
      {tab === "contacts" && <ContactList />}
      {tab === "subscribers" && <Subscriber />}
    </div>
  );
};

export default AdminPanel;
