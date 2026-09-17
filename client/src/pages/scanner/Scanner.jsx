import "./Scanner.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Camera, Upload, ArrowLeft } from "lucide-react";
import { scanMedicine } from "../../services/scan";
import BottomNavbar from "../../components/BottomNavbar";

export default function Scanner() {
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef();

  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Receive image from Home page camera
  useEffect(() => {
    if (location.state?.image) {
      const imgFile = location.state.image;
      setFile(imgFile);
      setImage(URL.createObjectURL(imgFile));
    }
  }, [location.state]);

  const selectImage = (e) => {
    const img = e.target.files[0];
    if (!img) return;

    setFile(img);
    setImage(URL.createObjectURL(img));
  };

  const handleScan = async () => {
    if (!file) {
      alert("Select an image first");
      return;
    }

    try {
      setLoading(true);

      const result = await scanMedicine(file);

      navigate("/result", {
        state: {
          medicine: result.data,
        },
      });
    } catch (err) {
      alert(err.message || "Medicine scan failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="scanner-page">
        <button className="back-btn" onClick={() => navigate("/home")}>
          <ArrowLeft size={20} />
        </button>

        <h1>AI Medicine Scanner</h1>
        <p>Upload a clear medicine strip photo</p>

        <div
          className="preview"
          onClick={() => inputRef.current.click()}
        >
          {image ? (
            <img src={image} alt="medicine" />
          ) : (
            <>
              <Camera size={44} />
              <span>Tap to choose image</span>
            </>
          )}
        </div>

        <input
          ref={inputRef}
          hidden
          type="file"
          accept="image/*"
          onChange={selectImage}
        />

        <button
          className="upload-btn"
          onClick={() => inputRef.current.click()}
        >
          <Upload size={18} />
          Choose Image
        </button>

        <button
          className="scan-btn"
          disabled={loading}
          onClick={handleScan}
        >
          {loading ? "Scanning..." : "Scan Medicine"}
        </button>
      </div>

      <BottomNavbar />
    </>
  );
}