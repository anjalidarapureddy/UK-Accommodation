export const API_BASE = "http://localhost:5000/api";

export const api = {
  register: (data: any) =>
    fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json()),

  login: (data: any) =>
    fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json()),

  getHouses: () =>
    fetch(`${API_BASE}/houses`).then((res) => res.json()),

  getHouse: (id: string) =>
    fetch(`${API_BASE}/houses/${id}`).then((res) => res.json()),

  getHousesByCity: (city: string) =>
    fetch(`${API_BASE}/houses/city/${city}`).then((res) => res.json()),

  addHouse: (token: string, formData: FormData) =>
    fetch(`${API_BASE}/houses`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    }).then((res) => res.json()),
};
