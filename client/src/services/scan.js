const API = import.meta.env.VITE_API_URL;

// Medicine Scan
export const scanMedicine = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

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

// Save Scan History
export const saveScanHistory = async (medicine) => {
  await fetch(`${API}/history/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: medicine.brand_name,
      uses: Array.isArray(medicine.uses)
        ? medicine.uses.join(", ")
        : medicine.uses || "",
      confidence: medicine.confidence || 0,
    }),
  });
};

// Get Scan History
export const getScanHistory = async () => {
  const response = await fetch(`${API}/history/`);

  if (!response.ok) {
    throw new Error("Failed to fetch history");
  }

  const data = await response.json();
  return data.history; // <-- important fix
};