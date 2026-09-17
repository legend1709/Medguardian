// Date Formatter
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// Time Formatter
export const formatTime = (time) => {
  if (!time) return "";

  const [hour, minute] = time.split(":");
  const h = Number(hour);

  return `${((h + 11) % 12) + 1}:${minute} ${h >= 12 ? "PM" : "AM"}`;
};

// Capitalize Text
export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// AI Confidence Color
export const confidenceColor = (value) => {
  if (value >= 90) return "#10B981";
  if (value >= 70) return "#F59E0B";
  return "#EF4444";
};