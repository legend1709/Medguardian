import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#10B981,#06B6D4)"
      }}
    >
      <div style={{ textAlign: "center", color: "white" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700" }}>
          MedGuardian
        </h1>
        <p style={{ marginTop: "10px", opacity: 0.9 }}>
          AI Medicine Scanner
        </p>
      </div>
    </div>
  );
}