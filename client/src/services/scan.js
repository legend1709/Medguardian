const API = import.meta.env.VITE_API_URL;

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

  const data = await response.json();

  return {
    data,
  };
};