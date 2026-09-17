import "./Result.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  TriangleAlert,
  Pill,
} from "lucide-react";
import BottomNavbar from "../../components/BottomNavbar";

export default function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const medicine = state?.medicine;

  if (!medicine) {
    return (
      <div className="empty-result">
        <h2>No Scan Found</h2>
        <button onClick={() => navigate("/scanner")}>
          Scan Medicine
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="result-page">
        <button className="back" onClick={() => navigate("/home")}>
          <ArrowLeft size={20} />
        </button>

        <div className="hero-card">
          <div className="pill-icon">
            <Pill size={34} />
          </div>

          <h1>{medicine.name}</h1>
          <p>{medicine.generic_name}</p>

          <div className="confidence">
            <ShieldCheck size={18} />
            <span>AI Confidence {medicine.confidence}%</span>
          </div>
        </div>

        <div className="section">
          <h3>Uses</h3>
          <ul>
            {(medicine.uses || []).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="grid2">
          <div className="info">
            <h4>Dosage</h4>
            <p>{medicine.dosage || "As directed by physician"}</p>
          </div>

          <div className="info">
            <h4>Best Time</h4>
            <p>{medicine.timing || "After meals"}</p>
          </div>
        </div>

        <div className="section">
          <h3>Side Effects</h3>
          <ul>
            {(medicine.side_effects || []).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="warning-box">
          <div className="warning-title">
            <TriangleAlert size={20} />
            <h3>Warnings</h3>
          </div>

          <ul>
            {(medicine.warnings || []).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {medicine.ocr_text && (
          <div className="section">
            <h3>OCR Text</h3>
            <div className="ocr-box">{medicine.ocr_text}</div>
          </div>
        )}
      </div>

      <BottomNavbar />
    </>
  );
}