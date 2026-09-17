import { useState } from "react";
import {
  Server,
  Brain,
  Database,
  Globe,
  Save
} from "lucide-react";

export default function Settings() {
  const [apiStatus] = useState(true);
  const [aiStatus] = useState(true);
  const [dbStatus] = useState(true);
  const [baseURL, setBaseURL] = useState("http://127.0.0.1:8000");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        padding: 24
      }}
    >
      <h1 style={{ fontSize: 30, fontWeight: 700 }}>Settings</h1>
      <p style={{ color: "#6B7280", marginBottom: 24 }}>
        System configuration & server status
      </p>

      {/* Server Status */}
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: 20,
          marginBottom: 20
        }}
      >
        <h3 style={{ marginBottom: 18 }}>System Status</h3>

        <StatusRow
          icon={<Server color="#10B981" />}
          title="API Server"
          active={apiStatus}
        />

        <StatusRow
          icon={<Brain color="#8B5CF6" />}
          title="AI Model"
          active={aiStatus}
        />

        <StatusRow
          icon={<Database color="#2563EB" />}
          title="Database"
          active={dbStatus}
        />
      </div>

      {/* API Configuration */}
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: 20
        }}
      >
        <h3 style={{ marginBottom: 16 }}>API Configuration</h3>

        <label
          style={{
            display: "block",
            color: "#374151",
            marginBottom: 8
          }}
        >
          Base URL
        </label>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            border: "1px solid #D1D5DB",
            borderRadius: 12,
            padding: "12px 14px"
          }}
        >
          <Globe color="#6B7280" size={18} />

          <input
            value={baseURL}
            onChange={(e) => setBaseURL(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              flex: 1,
              fontSize: 14
            }}
          />
        </div>

        <button
          style={{
            marginTop: 18,
            width: "100%",
            padding: 14,
            borderRadius: 12,
            background: "#10B981",
            color: "#fff",
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            border: "none",
            cursor: "pointer"
          }}
        >
          <Save size={18} />
          Save Settings
        </button>
      </div>
    </div>
  );
}

function StatusRow({ icon, title, active }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 0",
        borderBottom: "1px solid #F3F4F6"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12
        }}
      >
        {icon}
        <span>{title}</span>
      </div>

      <span
        style={{
          background: active ? "#D1FAE5" : "#FEE2E2",
          color: active ? "#047857" : "#B91C1C",
          padding: "6px 12px",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 600
        }}
      >
        {active ? "ONLINE" : "OFFLINE"}
      </span>
    </div>
  );
}