const isLocalhost = window.location.hostname === "localhost";

export const API_BASE = isLocalhost
  ? "http://localhost:5000"
  : "https://landing-page-backend-woad.vercel.app";

export const apiUrl = (path = "") =>
  `${API_BASE}/${path.replace(/^\/+/, "")}`;

export const assetUrl = (path = "") => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_BASE.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
};
