export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server-1.herokuapp.com"
    : "http://localhost:8080";
