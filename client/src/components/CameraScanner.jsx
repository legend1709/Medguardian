import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { scanMedicine } from "../services/scan";

export default function CameraScanner() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleScan = async () => {
    if (!imageFile) {
      alert("Please select a medicine image.");
      return;
    }

    try {
      setLoading(true);

      const result = await scanMedicine(imageFile);

      navigate("/result", {
        state: {
          medicine: result.data,
        },
      });
    } catch (err) {
      alert(err.message || "Scan failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="scanner-container">
      <h2>AI Medicine Scanner</h2>

      <div className="preview-box">
        {preview ? (
          <img src={preview} alt="preview" className="preview-img" />
        ) : (
          <p>Select a medicine photo</p>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleSelect}
        hidden
      />

      <button onClick={() => fileInputRef.current?.click()}>
        Choose Image
      </button>

      <button onClick={handleScan} disabled={loading}>
        {loading ? "Scanning..." : "Scan Medicine"}
      </button>
    </div>
  );
}