const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function retrieveContacts() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}