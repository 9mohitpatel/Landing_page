import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE, assetUrl } from "../config";

const demoProjects = [
  {
    _id: "demo1",
    name: "Skyline Residency",
    description: "Luxury apartments with skyline views",
    image: "https://via.placeholder.com/300x200?text=Skyline+Residency",
  },
  {
    _id: "demo2",
    name: "Palm Greens",
    description: "Eco-friendly villas surrounded by greenery",
    image: "https://via.placeholder.com/300x200?text=Palm+Greens",
  },
  {
    _id: "demo3",
    name: "Urban Heights",
    description: "Smart homes for modern living",
    image: "https://via.placeholder.com/300x200?text=Urban+Heights",
  },
];

const AddProject = () => {
  const [form, setForm] = useState({ name: "", description: "" });
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [projects, setProjects] = useState([]);
  const [usingDemo, setUsingDemo] = useState(false);

  const loadProjects = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/projects`);
      if (Array.isArray(res.data) && res.data.length > 0) {
        setProjects(res.data);
        setUsingDemo(false);
      } else {
        setProjects(demoProjects);
        setUsingDemo(true);
      }
    } catch {
      setProjects(demoProjects);
      setUsingDemo(true);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    if (image) data.append("image", image);

    try {
      await axios.post(`${API_BASE}/api/projects`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setStatus("✅ Project saved");
      setForm({ name: "", description: "" });
      setImage(null);
      loadProjects();
    } catch {
      setStatus("❌ Failed to save project");
    }
  };

  return (
    <div className="admin-grid">
      {/* ADD PROJECT */}
      <div className="admin-card">
        <h3>Add Project</h3>
        <form className="admin-form grid" onSubmit={handleSubmit}>
          <input
            placeholder="Project Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Project Description"
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            required
          />
          <button className="primary-btn" type="submit">
            Save Project
          </button>
          {status && <div className="status">{status}</div>}
        </form>
      </div>

      {/* PROJECT LIST */}
      <div className="admin-card">
        <h3>Existing Projects</h3>

        {usingDemo && (
          <div style={{ fontSize: 13, color: "#64748b", marginBottom: 8 }}>
            Showing demo projects
          </div>
        )}

        <div className="list">
          {projects.map((p) => (
            <div className="list-item" key={p._id}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img
                  src={assetUrl(p.image)}
                  alt={p.name}
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/72x60")
                  }
                  style={{
                    width: 72,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
                <div>
                  <strong>{p.name}</strong>
                  <div style={{ color: "#475569" }}>{p.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddProject;
