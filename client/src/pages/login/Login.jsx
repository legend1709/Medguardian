import "./Login.css";
import { Shield, Heart, ScanLine } from "lucide-react";
import { googleLogin } from "../../services/auth";

export default function Login() {
  const handleLogin = async () => {
    try {
      await googleLogin();
    } catch (err) {
      alert("Google Login Failed");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <div className="logo-circle">
          <Shield size={42} color="white" />
        </div>

        <h1>MedGuardian</h1>

        <p className="subtitle">
          AI Powered Medicine Scanner
        </p>

        <div className="feature">
          <ScanLine size={20} />
          <span>Scan any medicine instantly</span>
        </div>

        <div className="feature">
          <Heart size={20} />
          <span>Uses, dosage & side effects</span>
        </div>

        <button className="google-btn" onClick={handleLogin}>
          Continue with Google
        </button>

        <p className="footer">
          Secure • Private • AI Assisted
        </p>
      </div>
    </div>
  );
}