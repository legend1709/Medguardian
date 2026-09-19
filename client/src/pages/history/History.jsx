import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Scan } from "lucide-react";
import axios from "axios";
import BottomNavbar from "../../components/BottomNavbar";
import "./History.css";

export default function History() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  const API_URL =
    import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await axios.get(`${API_URL}/history`);
      setHistory(res.data.history || []);
    } catch (err) {
      console.error("History load failed:", err);
      setHistory([]);
    }
  };

  return (
    <>
      <div className="history-page">
        <button className="back" onClick={() => navigate("/home")}>
          <ArrowLeft size={20} />
        </button>

        <h1>Scan History</h1>
        <p>Your previously scanned medicines</p>

        <div className="history-list">
          {history.length === 0 ? (
            <div className="empty">
              <Scan size={40} />
              <h3>No scans yet</h3>
            </div>
          ) : (
            history.map((item) => (
              <div
                className="history-card"
                key={item.id}
                onClick={() =>
                  navigate("/result", {
                    state: {
                      medicine: {
                        brand_name: item.name,
                        uses: item.uses ? item.uses.split(", ") : [],
                        confidence: item.confidence,
                      },
                    },
                  })
                }
              >
                <div className="left">
                  <div className="icon">💊</div>

                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.date}</span>
                  </div>
                </div>

                <div className="right">{item.confidence}%</div>
              </div>
            ))
          )}
        </div>
      </div>

      <BottomNavbar />
    </>
  );
}