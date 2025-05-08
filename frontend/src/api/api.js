export const API_URL = "https://serverside-javascript-11.onrender.com/api";

export async function fetchProducts() {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
}

export async function loginUser(email, password) {
  const res = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function signupUser(userData) {
  const res = await fetch(`${API_URL}/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
}