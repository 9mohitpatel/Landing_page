import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE, assetUrl } from "../config";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE}/api/clients`)
      .then((res) => setClients(res.data))
      .catch((error) => {
        console.error("Failed to fetch clients:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading clients...</div>;
  }

  if (!clients.length) {
    return <div>No clients added yet. Add some from the admin panel.</div>;
  }

  return (
    <div className="clients-grid testimonials">
      {clients.map((c) => (
        <article key={c._id} className="testimonial-card">
          <div className="stars" aria-label="5 star rating">
            {"★★★★★"}
          </div>
          <p className="testimonial-quote">“{c.description}”</p>
          <div className="testimonial-footer">
            <img src={assetUrl(c.image)} alt={c.name} className="avatar small" />
            <div>
              <div className="testimonial-name">{c.name}</div>
              <div className="testimonial-role">{c.designation}</div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Clients;
