import { useState } from "react";
import { Search, User, Phone, Calendar } from "lucide-react";

export default function Users() {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "Santosh Yadav",
      phone: "+91 9876543210",
      scans: 28,
      joined: "17 Sep 2026",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      phone: "+91 9123456780",
      scans: 15,
      joined: "15 Sep 2026",
    },
    {
      id: 3,
      name: "Priya Singh",
      phone: "+91 9988776655",
      scans: 42,
      joined: "10 Sep 2026",
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        padding: 24,
      }}
    >
      <h1 style={{ fontSize: 30, fontWeight: 700 }}>Users</h1>
      <p style={{ color: "#6B7280", marginBottom: 24 }}>
        Registered MedGuardian users
      </p>

      {/* Search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "#fff",
          borderRadius: 14,
          padding: "14px 16px",
          marginBottom: 24,
        }}
      >
        <Search size={18} color="#6B7280" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users..."
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            fontSize: 15,
          }}
        />
      </div>

      {/* User Cards */}
      {filteredUsers.map((user) => (
        <div
          key={user.id}
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: 18,
            marginBottom: 16,
            boxShadow: "0 8px 20px rgba(0,0,0,.05)",
          }}
        >
          <div style={{ display: "flex", gap: 14 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#DBEAFE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <User color="#2563EB" size={28} />
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: 4 }}>{user.name}</h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#6B7280",
                  fontSize: 14,
                }}
              >
                <Phone size={14} />
                {user.phone}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#6B7280",
                  fontSize: 14,
                  marginTop: 6,
                }}
              >
                <Calendar size={14} />
                Joined {user.joined}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 16,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                background: "#ECFDF5",
                color: "#047857",
                padding: "6px 12px",
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {user.scans} Scans
            </span>

            <button
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                border: "none",
                background: "#2563EB",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              View History
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}