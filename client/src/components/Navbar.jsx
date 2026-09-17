import "./Navbar.css";
import { Home, History, Bell, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: History, label: "History", path: "/history" },
    { icon: Bell, label: "Reminder", path: "/reminder" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <Icon size={22} />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}