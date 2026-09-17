import { useState } from "react";
import { Plus, Search, Pencil, Trash2, Pill } from "lucide-react";

export default function Medicines() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [uses, setUses] = useState("");

  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol 650", uses: "Fever & Pain" },
    { id: 2, name: "Azithromycin 500", uses: "Bacterial Infection" },
    { id: 3, name: "Cetirizine", uses: "Allergy Relief" }
  ]);

  const addMedicine = () => {
    if (!name || !uses) return;

    setMedicines([
      ...medicines,
      {
        id: Date.now(),
        name,
        uses
      }
    ]);

    setName("");
    setUses("");
  };

  const deleteMedicine = (id) => {
    setMedicines(medicines.filter((m) => m.id !== id));
  };

  const filtered = medicines.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        padding: 24
      }}
    >
      <h1 style={{ fontSize: 30, fontWeight: 700 }}>
        Medicine Manager
      </h1>

      <p style={{ color: "#6B7280", marginBottom: 24 }}>
        Add, edit and delete medicines
      </p>

      {/* Add Medicine */}
      <div
        style={{
          background: "#fff",
          borderRadius: 18,
          padding: 20,
          marginBottom: 24
        }}
      >
        <h3 style={{ marginBottom: 16 }}>Add Medicine</h3>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Medicine Name"
          style={input}
        />

        <input
          value={uses}
          onChange={(e) => setUses(e.target.value)}
          placeholder="Uses"
          style={{ ...input, marginTop: 12 }}
        />

        <button
          onClick={addMedicine}
          style={greenButton}
        >
          <Plus size={18} />
          Add Medicine
        </button>
      </div>

      {/* Search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "#fff",
          borderRadius: 14,
          padding: "14px 16px",
          marginBottom: 20
        }}
      >
        <Search size={18} color="#6B7280" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search medicine..."
          style={{
            border: "none",
            outline: "none",
            flex: 1
          }}
        />
      </div>

      {/* Medicine List */}
      {filtered.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14
          }}
        >
          <div style={{ display: "flex", gap: 14 }}>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 12,
                background: "#ECFDF5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Pill color="#10B981" />
            </div>

            <div>
              <h3>{item.name}</h3>
              <p style={{ color: "#6B7280" }}>{item.uses}</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button style={editBtn}>
              <Pencil size={16} color="#2563EB" />
            </button>

            <button
              onClick={() => deleteMedicine(item.id)}
              style={deleteBtn}
            >
              <Trash2 size={16} color="#DC2626" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const input = {
  width: "100%",
  padding: 14,
  border: "1px solid #D1D5DB",
  borderRadius: 12,
  outline: "none"
};

const greenButton = {
  marginTop: 16,
  width: "100%",
  padding: 14,
  borderRadius: 12,
  background: "#10B981",
  color: "#fff",
  fontWeight: 600,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 8,
  border: "none",
  cursor: "pointer"
};

const editBtn = {
  width: 40,
  height: 40,
  borderRadius: 10,
  border: "none",
  background: "#DBEAFE",
  cursor: "pointer"
};

const deleteBtn = {
  width: 40,
  height: 40,
  borderRadius: 10,
  border: "none",
  background: "#FEE2E2",
  cursor: "pointer"
};