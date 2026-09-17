import React from "react";
import { Pill, ChevronRight, ShieldCheck } from "lucide-react";

export default function MedicineCard({ medicine, onClick }) {
  const data = medicine || {
    name: "Paracetamol 650",
    uses: "Fever & Pain Relief",
    confidence: 96,
  };

  return (
    <div
      onClick={onClick}
      style={{
        background: "#FFFFFF",
        borderRadius: "18px",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 8px 20px rgba(0,0,0,.06)",
        cursor: "pointer",
        transition: "0.2s"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 14,
            background: "#ECFDF5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pill size={28} color="#10B981" />
        </div>

        <div>
          <h3
            style={{
              margin: 0,
              fontSize: 16,
              color: "#111827",
            }}
          >
            {data.name}
          </h3>

          <p
            style={{
              margin: "6px 0",
              color: "#6B7280",
              fontSize: 13,
            }}
          >
            {data.uses}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <ShieldCheck size={14} color="#10B981" />

            <span
              style={{
                color: "#047857",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {data.confidence}% AI Confidence
            </span>
          </div>
        </div>
      </div>

      <ChevronRight color="#9CA3AF" />
    </div>
  );
}