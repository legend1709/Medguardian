import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Search, ScanLine, History, Bell } from "lucide-react";
import BottomNavbar from "../../components/BottomNavbar";

export default function Home() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const openCamera = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    navigate("/scanner", {
      state: { image: file },
    });
  };

  const actions = [
    {
      title: "Scan Medicine",
      icon: <ScanLine size={28} />,
      color: "#2563EB",
      action: openCamera,
    },
    {
      title: "History",
      icon: <History size={28} />,
      color: "#7C3AED",
      path: "/history",
    },
    {
      title: "Reminder",
      icon: <Bell size={28} />,
      color: "#F59E0B",
      path: "/reminder",
    },
  ];

  return (
    <>
      <div className="home-page">
        <div className="header">
          <p>Welcome Back 👋</p>
          <h1>MedGuardian</h1>
        </div>

        <div className="search-box">
          <Search size={18} />
          <input placeholder="Search medicine..." />
        </div>

        <div className="banner" onClick={openCamera}>
          <ScanLine size={36} />
          <h2>AI Medicine Scanner</h2>
          <p>Scan any medicine strip instantly</p>
        </div>

        {/* Hidden Camera Input */}
        <input
          ref={fileInputRef}
          className="camera-input"
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
        />

        <h3>Quick Actions</h3>

        <div className="action-grid">
          {actions.map((item) => (
            <div
              key={item.title}
              className="action-card"
              onClick={() =>
                item.action ? item.action() : navigate(item.path)
              }
            >
              <div style={{ color: item.color }}>{item.icon}</div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <BottomNavbar />
    </>
  );
}