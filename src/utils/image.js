const API_URL = (
  import.meta.env.VITE_API_URL ||
  "https://api.shreekamalnayanfrozenfood.com"
).replace(/\/api$/, "");

export const getImageUrl = (url) => {
  if (!url) return "";

  if (url.startsWith("http")) {
    return url;
  }

  return `${API_URL}${url}`;
};