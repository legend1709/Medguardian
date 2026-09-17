# MedGuardian — Setup Guide

## Step 1: Clone the project

```bash
git clone https://github.com/legend1709/Medguardian.git
cd Medguardian
```

---

## Step 2: Backend setup

```bash
cd server
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

---

## Step 3: Create `.env`

Inside the **server** folder, create a file named `.env`

```env
GCP_API_KEY=YOUR_API_KEY
JWT_SECRET=YOUR_SECRET
```

---

## Step 4: Run backend

```bash
uvicorn app:app --reload
```

Backend:

`http://127.0.0.1:8000`

---

## Step 5: Frontend setup

Open a **new terminal**.

```bash
cd client
npm install
npm run dev
```

Frontend:

`http://localhost:5173`

---

## Done ✅

Now open the frontend URL in your browser and use MedGuardian.
