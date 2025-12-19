import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE, assetUrl } from "../config";

const AddClient = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    designation: ""
  });
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [clients, setClients] = useState([]);

  const loadClients = () => {
    axios.get(`${API_BASE}/api/clients`).then((res) => setClients(res.data));
  };

  useEffect(() => {
    loadClients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("designation", form.designation);
    if (image) data.append("image", image);

    try {
      await axios.post(`${API_BASE}/api/clients`, data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setStatus("Client saved.");
      setForm({ name: "", description: "", designation: "" });
      setImage(null);
      loadClients();
    } catch (error) {
      setStatus("Failed to save client.");
    }
  };

  return (
    <div className="admin-grid">
      <div className="admin-card">
        <h3>Add Client</h3>
        <form className="admin-form grid" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Client Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <textarea
            name="description"
            placeholder="Client Description"
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
          <input
            name="designation"
            placeholder="Designation (e.g. CEO, Designer)"
            value={form.designation}
            onChange={(e) => setForm({ ...form, designation: e.target.value })}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            required
          />
          <button className="primary-btn" type="submit">
            Save Client
          </button>
          {status && <div className="status">{status}</div>}
        </form>
      </div>

      <div className="admin-card">
        <h3>Client List</h3>
        <div className="list">
          {clients.map((c) => (
            <div className="list-item" key={c._id}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img src={assetUrl(c.image)} alt={c.name} className="avatar" />
                <div>
                  <strong>{c.name}</strong>
                  <div style={{ color: "#475569" }}>{c.description}</div>
                  <small>{c.designation}</small>
                </div>
              </div>
            </div>
          ))}
          {!clients.length && <div>No clients yet.</div>}
        </div>
      </div>
    </div>
  );
};

export default AddClient;
