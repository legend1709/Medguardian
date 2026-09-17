import React from "react";
import { Chrome } from "lucide-react";

export default function GoogleButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "14px",
        borderRadius: "12px",
        border: "1px solid #E5E7EB",
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        fontSize: "15px",
        fontWeight: "600",
        color: "#374151",
        cursor: "pointer",
        transition: "all .2s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#F9FAFB";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#FFFFFF";
      }}
    >
      <Chrome size={20} color="#EA4335" />
      Continue with Google
    </button>
  );
}