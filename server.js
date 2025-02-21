
// server.js
const express = require("express");
const cors = require("cors");

// Routes
const propertyRoutes = require("./routes/propertyRoutes");
const renterRoutes = require("./routes/renterRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());                               // Allow cross-origin requests
app.use(express.json());                       // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use("/uploads", express.static("uploads"));  // Serve files from /uploads if needed

// Routes
// - Property endpoints
app.get('/', (req, res) => {
  res.send('API is running');
});
app.use("/api/property", propertyRoutes);

// - Renter endpoints
app.use("/api/renter", renterRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;