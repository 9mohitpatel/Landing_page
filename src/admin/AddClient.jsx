import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE, assetUrl } from "../config";

/* ---------- RANDOM IMAGE HELPER ---------- */
const randomClientImage = (gender = "men") =>
  `https://randomuser.me/api/portraits/${gender}/${Math.floor(
    Math.random() * 100
  )}.jpg`;

/* ---------- DEMO CLIENTS ---------- */
const demoClients = [
  {
    _id: "demo1",
    name: "Aarav Sharma",
    description: "Excellent service and smooth communication.",
    designation: "CEO, Skyline Group",
    image: randomClientImage("men"),
  },
  {
    _id: "demo2",
    name: "Priya Mehta",
    description: "Creative team with great attention to detail.",
    designation: "Marketing Head, Urban Homes",
    image: randomClientImage("women"),
  },
  {
    _id: "demo3",
    name: "Rohan Verma",
    description: "Highly professional and result-oriented.",
    designation: "Founder, GreenBuild",
    image: randomClientImage("men"),
  },
];

const AddClient = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    designation: "",
  });
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [clients, setClients] = useState([]);
  const [usingDemo, setUsingDemo] = useState(false);

  /* ---------- LOAD CLIENTS ---------- */
  const loadClients = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/clients`);

      if (Array.isArray(res.data) && res.data.length > 0) {
        setClients(res.data);
        setUsingDemo(false);
      } else {
        setClients(demoClients);
        setUsingDemo(true);
      }
    } catch {
      setClients(demoClients);
      setUsingDemo(true);
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  /* ---------- ADD CLIENT ---------- */
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
        headers: { "Content-Type": "multipart/form-data" },
      });

      setStatus("✅ Client saved");
      setForm({ name: "", description: "", designation: "" });
      setImage(null);
      loadClients();
    } catch {
      setStatus("❌ Failed to save client");
    }
  };

  return (
    <div className="admin-grid">
      {/* ---------- ADD CLIENT ---------- */}
      <div className="admin-card">
        <h3>Add Client</h3>
        <form className="admin-form grid" onSubmit={handleSubmit}>
          <input
            placeholder="Client Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Client Description"
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
          <input
            placeholder="Designation (e.g. CEO, Founder)"
            value={form.designation}
            onChange={(e) =>
              setForm({ ...form, designation: e.target.value })
            }
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

      {/* ---------- CLIENT LIST ---------- */}
      <div className="admin-card">
        <h3>Client List</h3>

        {usingDemo && (
          <div style={{ fontSize: 13, color: "#64748b", marginBottom: 8 }}>
            Showing demo clients
          </div>
        )}

        <div className="list">
          {clients.map((c) => (
            <div className="list-item" key={c._id}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img
                  src={assetUrl(c.image)}
                  alt={c.name}
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/72x72")
                  }
                  style={{
                    width: 72,
                    height: 72,
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <div>
                  <strong>{c.name}</strong>
                  <div style={{ color: "#475569" }}>{c.description}</div>
                  <small>{c.designation}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddClient;
