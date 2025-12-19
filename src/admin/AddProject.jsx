import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE, assetUrl } from "../config";

const AddProject = () => {
  const [form, setForm] = useState({ name: "", description: "" });
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    axios.get(`${API_BASE}/api/projects`).then((res) => setProjects(res.data));
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
        headers: { "Content-Type": "multipart/form-data" }
      });
      setStatus("Project saved.");
      setForm({ name: "", description: "" });
      setImage(null);
      loadProjects();
    } catch (error) {
      setStatus("Failed to save project.");
    }
  };

  return (
    <div className="admin-grid">
      <div className="admin-card">
        <h3>Add Project</h3>
        <form className="admin-form grid" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Project Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <textarea
            name="description"
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

      <div className="admin-card">
        <h3>Existing Projects</h3>
        <div className="list">
          {projects.map((p) => (
            <div className="list-item" key={p._id}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img
                  src={assetUrl(p.image)}
                  alt={p.name}
                  style={{ width: 72, height: 60, objectFit: "cover", borderRadius: 10 }}
                />
                <div>
                  <strong>{p.name}</strong>
                  <div style={{ color: "#475569" }}>{p.description}</div>
                </div>
              </div>
            </div>
          ))}
          {!projects.length && <div>No projects yet.</div>}
        </div>
      </div>
    </div>
  );
};

export default AddProject;
