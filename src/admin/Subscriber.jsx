import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE } from "../config";

const Subscriber = () => {
  const [subscribers, setSubscribers] = useState([]);

  const load = () => {
    axios.get(`${API_BASE}/api/subscribers`).then((res) => setSubscribers(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="admin-card">
      <h3>Subscribed Emails</h3>
      <div className="list">
        {subscribers.map((s) => (
          <div key={s._id} className="list-item">
            <strong>{s.email}</strong>
            <div style={{ color: "#475569" }}>
              Subscribed on {new Date(s.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
        {!subscribers.length && <div>No subscribers yet.</div>}
      </div>
    </div>
  );
};

export default Subscriber;
