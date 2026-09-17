import "./BottomNavbar.css";
import { House, ScanLine, History, Bell, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function BottomNavbar() {
  const tabs = [
    { to: "/home", icon: House, label: "Home" },
    { to: "/scanner", icon: ScanLine, label: "Scan" },
    { to: "/history", icon: History, label: "History" },
    { to: "/reminder", icon: Bell, label: "Reminder" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <Icon size={22} />
            <span>{tab.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}