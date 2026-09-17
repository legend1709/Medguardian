const API = import.meta.env.VITE_API_URL;

// Medicine Scan
export const scanMedicine = async (file) => {
  const formData = new FormData();
  formData.append("image", file); // <-- image field

  const response = await fetch(`${API}/scan/`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(err || "Medicine scan failed");
  }

  return await response.json();
};

// Scan History
export const getScanHistory = async () => {
  const response = await fetch(`${API}/history/`);

  if (!response.ok) {
    throw new Error("Failed to fetch history");
  }

  return await response.json();
};