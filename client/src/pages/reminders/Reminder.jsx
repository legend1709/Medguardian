import { useState, useEffect } from "react";
import { Bell, Plus, Trash2 } from "lucide-react";
import BottomNavbar from "../../components/BottomNavbar";
import "./Reminder.css";

export default function Reminder() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("reminders")) || [];
    setList(data);
  }, []);

  const saveReminder = () => {
    if (!name || !time) return;

    const newItem = {
      id: Date.now(),
      name,
      time,
    };

    const updated = [...list, newItem];
    setList(updated);
    localStorage.setItem("reminders", JSON.stringify(updated));

    setName("");
    setTime("");
  };

  const deleteReminder = (id) => {
    const updated = list.filter((r) => r.id !== id);
    setList(updated);
    localStorage.setItem("reminders", JSON.stringify(updated));
  };

  return (
    <>
      <div className="reminder-page">
        <h1>Medicine Reminder</h1>
        <p>Never miss your dose</p>

        <div className="add-box">
          <input
            placeholder="Medicine Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button onClick={saveReminder}>
            <Plus size={18} />
            Add Reminder
          </button>
        </div>

        <div className="reminder-list">
          {list.length === 0 ? (
            <div className="empty">
              <Bell size={42} />
              <h3>No Reminder</h3>
            </div>
          ) : (
            list.map((item) => (
              <div className="reminder-card" key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.time}</span>
                </div>

                <Trash2
                  size={20}
                  className="delete"
                  onClick={() => deleteReminder(item.id)}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <BottomNavbar />
    </>
  );
}