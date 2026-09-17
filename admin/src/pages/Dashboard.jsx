import { Users, Pill, Bell, Activity } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      icon: <Users size={28} color="#2563EB" />,
      color: "#DBEAFE"
    },
    {
      title: "Medicines",
      value: "532",
      icon: <Pill size={28} color="#10B981" />,
      color: "#D1FAE5"
    },
    {
      title: "Active Reminders",
      value: "894",
      icon: <Bell size={28} color="#F59E0B" />,
      color: "#FEF3C7"
    },
    {
      title: "Today's Scans",
      value: "321",
      icon: <Activity size={28} color="#8B5CF6" />,
      color: "#E9D5FF"
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        padding: 24
      }}
    >
      <h1 style={{ fontSize: 30, fontWeight: 700 }}>Admin Dashboard</h1>
      <p style={{ color: "#6B7280", marginBottom: 28 }}>
        MedGuardian Analytics
      </p>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 18
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: 20,
              boxShadow: "0 8px 20px rgba(0,0,0,.05)"
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 16,
                background: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16
              }}
            >
              {item.icon}
            </div>

            <h2 style={{ fontSize: 28 }}>{item.value}</h2>
            <p style={{ color: "#6B7280" }}>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div
        style={{
          marginTop: 28,
          background: "#fff",
          borderRadius: 20,
          padding: 20
        }}
      >
        <h3 style={{ marginBottom: 16 }}>Recent Activity</h3>

        {[
          "New user registered",
          "Paracetamol scanned",
          "Reminder created",
          "Medicine database updated"
        ].map((activity, i) => (
          <div
            key={i}
            style={{
              padding: "14px 0",
              borderBottom:
                i !== 3 ? "1px solid #F3F4F6" : "none",
              color: "#374151"
            }}
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}