import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE, assetUrl } from "../config";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE}/api/projects`)
      .then((res) => setProjects(res.data))
      .catch((error) => {
        console.error("Failed to fetch projects:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (!projects.length) {
    return <div>No projects added yet. Add some from the admin panel.</div>;
  }

  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <article key={p._id} className="card">
          <img src={assetUrl(p.image)} alt={p.name} />
          <div className="card-content">
            <small>Project</small>
            <h3 style={{ margin: "0" }}>{p.name}</h3>
            <p style={{ margin: "0 0 8px", color: "#475569" }}>
              {p.description}
            </p>
            <button className="primary-btn" style={{ alignSelf: "start" }}>
              Read More
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;
