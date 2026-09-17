const API_URL = "http://127.0.0.1:8000";

// AI Medicine Scan
export const scanMedicine = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetch(`${API_URL}/scan/`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Medicine scan failed");
  }

  return data;
};

// Scan History
export const getScanHistory = async () => {
  try {
    const response = await fetch(`${API_URL}/history/`);

    if (!response.ok) return [];

    const data = await response.json();

    // Backend array ya {history: []} dono support
    if (Array.isArray(data)) return data;
    return data.history || [];
  } catch (error) {
    console.error("History Error:", error);
    return [];
  }
};