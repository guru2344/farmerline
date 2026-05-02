const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// =====================
// APP INIT
// =====================
const app = express();

// =====================
// MIDDLEWARE
// =====================
app.use(cors());
app.use(express.json());

// =====================
// SECRET KEY
// =====================
const SECRET_KEY = "farmerline_secret";

// =====================
// ADMIN USER (TEMP LOGIN)
// =====================
const adminUser = {
  email: "admin@farmerline.com",
  password: bcrypt.hashSync("admin123", 10),
};

// =====================
// MYSQL CONNECTION
// =====================
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123", // change if needed
  database: "farmerline",
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB Error:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

// =====================
// LOGIN API
// =====================
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== adminUser.email) {
    return res.status(400).json({
      success: false,
      message: "Invalid email",
    });
  }

  const isMatch = bcrypt.compareSync(password, adminUser.password);

  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: "Wrong password",
    });
  }

  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

  res.json({ success: true, token });
});

// =====================
// TOKEN MIDDLEWARE
// =====================
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  try {
    jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    return res.status(403).json({
      success: false,
      message: "Invalid token",
    });
  }
};

// =====================
// INSERT SERVICE DATA
// =====================
app.post("/api/service", (req, res) => {
  const { name, address, service, email, contact } = req.body;

  console.log("📩 FORM DATA RECEIVED:", req.body);

  const sql =
    "INSERT INTO service_requests (name, address, service, email, contact) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [name, address, service, email, contact], (err, result) => {
    if (err) {
      console.log("❌ INSERT ERROR:", err);
      return res.status(500).json({ success: false });
    }

    console.log("✅ INSERT SUCCESS");
    res.json({ success: true, result });
  });
});

// =====================
// GET ALL REQUESTS (PROTECTED)
// =====================
app.get("/api/service", verifyToken, (req, res) => {
  db.query("SELECT * FROM service_requests", (err, result) => {
    if (err) {
      console.log("❌ DB ERROR:", err);
      return res.status(500).json([]);
    }

    console.log("📊 DATA SENT TO ADMIN:", result);

    res.json(result);
  });
});

// =====================
// START SERVER
// =====================
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});