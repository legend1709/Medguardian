const API = import.meta.env.VITE_API_URL;

// Medicine Scan
export const scanMedicine = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API}/scan`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Medicine scan failed");
  }

  return await response.json();
};

// Scan History
export const getScanHistory = async () => {
  const response = await fetch(`${API}/history`);

  if (!response.ok) {
    throw new Error("Failed to fetch history");
  }

  return await response.json();
};