import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Scan } from "lucide-react";
import { getScanHistory } from "../../services/scan";
import BottomNavbar from "../../components/BottomNavbar";
import "./History.css";

export default function History() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    const data = await getScanHistory();
    setHistory(data);
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
                    state: { medicine: item },
                  })
                }
              >
                <div className="left">
                  <div className="icon">💊</div>

                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.generic_name}</span>
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