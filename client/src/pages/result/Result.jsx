
import "./Result.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  TriangleAlert,
  Pill,
  CircleCheck,
  CircleX,
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

          <h1>{medicine.brand_name}</h1>
          <p>{medicine.composition}</p>

          <div className="confidence">
            <ShieldCheck size={18} />
            <span>AI Confidence {medicine.confidence}%</span>
          </div>
        </div>

        <div className="grid2">
          <div className="info">
            <h4>Form</h4>
            <p>{medicine.dosage_form}</p>
          </div>

          <div className="info">
            <h4>Manufacturer</h4>
            <p>{medicine.manufacturer}</p>
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

        <div className="section">
          <div className="warning-title">
            <CircleCheck size={20} color="#16a34a" />
            <h3>Advantages</h3>
          </div>
          <ul>
            {(medicine.advantages || []).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <div className="warning-title">
            <CircleX size={20} color="#dc2626" />
            <h3>Disadvantages</h3>
          </div>
          <ul>
            {(medicine.disadvantages || []).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>Good or Not</h3>
          <div className="info">
            <h4>{medicine.good_or_not?.rating}</h4>
            <p>{medicine.good_or_not?.reason}</p>
          </div>
        </div>

        <div className="grid2">
          <div className="info">
            <h4>Dosage</h4>
            <p>{medicine.dosage}</p>
          </div>

          <div className="info">
            <h4>Best Time</h4>
            <p>{medicine.timing}</p>
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
      </div>

      <BottomNavbar />
    </>
  );
}