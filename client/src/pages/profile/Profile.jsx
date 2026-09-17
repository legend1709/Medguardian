import { useEffect, useState } from "react";
import { LogOut, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../../services/auth";
import BottomNavbar from "../../components/BottomNavbar";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const data = await getCurrentUser();
      setUser(data);
    };

    loadUser();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <>
      <div className="profile-page">
        <h1>Profile</h1>
        <p>Your MedGuardian account</p>

        <div className="profile-card">
          <img
            src={
              user?.user_metadata?.avatar_url ||
              "https://i.pravatar.cc/150?img=12"
            }
            alt="profile"
          />

          <h2>{user?.user_metadata?.full_name || "Guest User"}</h2>

          <span>{user?.email}</span>
        </div>

        <div className="info-card">
          <div className="row">
            <User size={20} />
            <div>
              <label>Name</label>
              <p>{user?.user_metadata?.full_name || "Guest"}</p>
            </div>
          </div>

          <div className="row">
            <Mail size={20} />
            <div>
              <label>Email</label>
              <p>{user?.email}</p>
            </div>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={20} />
          Logout
        </button>
      </div>

      <BottomNavbar />
    </>
  );
}