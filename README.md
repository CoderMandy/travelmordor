# 🌋 Travel Mordor

**Travel Mordor** is a full-stack MERN application that allows brave souls to register for a "vacation" to the heart of the Black Land. Users submit their personal details and character type to receive a randomized travel destination within Mordor. This project serves as a comprehensive practice of MERN stack integration, multi-page routing, and the MVC (Model-View-Controller) architecture.

---

## ✨ Features

- **Multi-Page Experience:** Navigable interface with Home, SignUp, and Confirmation pages powered by **React Router**.
- **Dynamic Destinations:** Randomly assigned travel assignments for various Middle-earth destinations.
- **MongoDB Create Functionality:** Captured user data is sent via the Fetch API and persisted in a collection.
- **Custom Theming:** Featuring a React Bits `EvilEye` component and dark, Mordor-inspired aesthetics.
- **Error Handling:** Custom **404** and **Error** pages to manage unexpected journey detours.

---

## 🛠️ Tech Stack

### Frontend

- **React (Vite):** Functional components using `.jsx`.
- **React Router:** Client-side routing for seamless page transitions.
- **CSS:** Styling for immersive UI.
- **Fetch API:** Native asynchronous communication with the backend.

### Backend

- **Node.js & Express:** RESTful API following the MVC pattern.
- **MongoDB & Mongoose:** Schema-based modeling for travelers and bookings.
- **Dotenv:** Secure management of environment variables.

---

## 📂 Project Structure

### Backend

- `controllers/`: Logic for handling travel bookings (`bookingController.js`).
- `models/`: Mongoose schema for the database (`Booking.js`).
- `routes/`: API endpoint definitions (`bookingRoutes.js`).
- `server.js`: The entry point for the Express server.

### Frontend

- `src/pages/`: Main views including `Home.jsx`, `SignUp.jsx`, and `Confirmation.jsx`.
- `src/components/`: Reusable UI elements like `Header`, `Footer`, `SignUpForm`, and the React Bits `EvilEye`.
- `src/components/MainRoutes.jsx`: Centralized route management.

---

## ⚙️ Installation & Setup

### 1. Backend Setup

```bash
cd backend
npm install
```

_Create a `.env` file inside the `backend` folder with the following variables:_

```dotenv
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

Replace `your_mongodb_connection_string` with your own MongoDB connection string. The `.env` file is excluded from Git and should not be committed.

### 2. Frontend Setup

```bash
cd ../frontend
npm install
```

### 3. Run the Application

Start the backend and frontend in separate terminals.

**Terminal 1 - Backend:**

```bash
# In the backend folder
npm run dev
```

**Terminal 2 - Frontend:**

```bash
# In the frontend folder
npm run dev
```

Open the local URL displayed by Vite in your browser.

The frontend is currently configured to send booking requests to the backend at `http://127.0.0.1:5001`. Both servers must be running to use the booking functionality locally.

---

## 🛡️ Terms of Service

One does not simply walk into Mordor. By clicking "Agree," you waive all rights to your jewelry, your safety, and your life should you encounter a Nazgûl.

---

## 🗂️ Project Note

Travel Mordor is an academic project developed to practise full-stack MERN development. Its travel destinations and booking experience are fictional.

---

## 👥 Contributors

- **Mandy Lee**
- **Sarah Antonation**
- **Holly Staples**
