import React from "react";
export default function Loader() {
  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <div style={styles.spinner}></div>

        <h3 style={styles.title}>Scanning Medicine...</h3>

        <p style={styles.subtitle}>
          Please wait while AI analyzes your medicine
        </p>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(248,250,252,0.95)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  },

  container: {
    background: "#fff",
    padding: "32px 28px",
    borderRadius: 24,
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,.08)"
  },

  spinner: {
    width: 64,
    height: 64,
    border: "6px solid #D1FAE5",
    borderTop: "6px solid #10B981",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "0 auto 20px"
  },

  title: {
    margin: 0,
    color: "#111827"
  },

  subtitle: {
    marginTop: 8,
    color: "#6B7280",
    fontSize: 14
  }
};