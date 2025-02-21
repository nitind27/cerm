// // routes/renterRoutes.js
// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const mysql = require("mysql2");

// // Configure Multer (file uploads to /uploads)
// const upload = multer({ dest: "uploads/" });

// // Create a MySQL connection (adjust credentials)
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",       // XAMPP default
//   password: "",       // XAMPP default
//   database: "test_db", // Your DB name
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error("MySQL connection error:", err);
//     return;
//   }
//   console.log("Connected to MySQL (Renter).");
// });

// /**
//  * GET /api/renter
//  * Fetch all renters from the DB
//  */
// router.get("/", (req, res) => {
//   const query = "SELECT * FROM renters";
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error("Error fetching renters:", err);
//       return res.status(500).json({ error: "Failed to fetch renters" });
//     }
//     return res.json(results);
//   });
// });

// /**
//  * POST /api/renter
//  * Create a new renter with file uploads
//  */
// router.post("/", upload.fields([
//   { name: "aadhaarCard", maxCount: 1 },
//   { name: "panCard", maxCount: 1 },
//   { name: "passportPhoto", maxCount: 1 },
//   { name: "otherDocument", maxCount: 1 },
// ]), (req, res) => {
//   try {
//     // Non-file fields come in request body
//     const {
//       renterName,
//       fullAddress,
//       age,
//       numberOfStayers,
//       contact1,
//       contact2,
//       remarks,
//     } = req.body;

//     // Files come in req.files if present
//     const aadhaarCard = req.files["aadhaarCard"]?.[0]?.filename || null;
//     const panCard = req.files["panCard"]?.[0]?.filename || null;
//     const passportPhoto = req.files["passportPhoto"]?.[0]?.filename || null;
//     const otherDocument = req.files["otherDocument"]?.[0]?.filename || null;

//     // Insert into renters table
//     const insertQuery = `
//       INSERT INTO renters (
//         renterName, fullAddress, age, numberOfStayers,
//         contact1, contact2, remarks,
//         aadhaarCard, panCard, passportPhoto, otherDocument
//       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     db.query(
//       insertQuery,
//       [
//         renterName,
//         fullAddress,
//         age,
//         numberOfStayers,
//         contact1,
//         contact2,
//         remarks,
//         aadhaarCard,
//         panCard,
//         passportPhoto,
//         otherDocument,
//       ],
//       (err) => {
//         if (err) {
//           console.error("Error inserting renter:", err);
//           return res.status(500).json({ error: "Failed to save renter" });
//         }
//         return res
//           .status(201)
//           .json({ message: "Renter data saved successfully" });
//       }
//     );
//   } catch (error) {
//     console.error("Error saving renter:", error);
//     return res.status(500).json({ error: "Failed to save renter data" });
//   }
// });

// module.exports = router;


// routes/renterRoutes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const mysql = require("mysql2");

// Configure Multer (file uploads to /uploads)
const upload = multer({ dest: "uploads/" });

// Create a MySQL connection (adjust credentials)
const db = mysql.createConnection({
  host: "b9qb2i6wcb7ru3fkp9ar-mysql.services.clever-cloud.com",
  user: "uftpi1lxgdbzjy4h",
  password: "mpvfUpf2ZYHGw9gR2j32",

  database: "b9qb2i6wcb7ru3fkp9ar",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    return;
  }
  console.log("Connected to MySQL (Renter).");
});

/**
 * GET /api/renter
 * Fetch all renters from the DB
 */
router.get("/", (req, res) => {
  const query = "SELECT * FROM renters";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching renters:", err);
      return res.status(500).json({ error: "Failed to fetch renters" });
    }
    return res.json(results);
  });
});

/**
 * POST /api/renter
 * Create a new renter with file uploads
 */
router.post(
  "/",
  upload.fields([
    { name: "aadhaarCard", maxCount: 1 },
    { name: "panCard", maxCount: 1 },
    { name: "passportPhoto", maxCount: 1 },
    { name: "otherDocument", maxCount: 1 },
  ]),
  (req, res) => {
    try {
      // Non-file fields
      const {
        renterName,
        fullAddress,
        age,
        numberOfStayers,
        contact1,
        contact2,
        remarks
      } = req.body;

      // Files from req.files
      const aadhaarCard = req.files["aadhaarCard"]?.[0]?.filename || null;
      const panCard = req.files["panCard"]?.[0]?.filename || null;
      const passportPhoto = req.files["passportPhoto"]?.[0]?.filename || null;
      const otherDocument = req.files["otherDocument"]?.[0]?.filename || null;

      // Insert into renters table
      const insertQuery = `
        INSERT INTO renters (
          renterName, fullAddress, age, numberOfStayers,
          contact1, contact2, remarks,
          aadhaarCard, panCard, passportPhoto, otherDocument
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      db.query(
        insertQuery,
        [
          renterName,
          fullAddress,
          age,
          numberOfStayers,
          contact1,
          contact2,
          remarks,
          aadhaarCard,
          panCard,
          passportPhoto,
          otherDocument
        ],
        (err) => {
          if (err) {
            console.error("Error inserting renter:", err);
            return res.status(500).json({ error: "Failed to save renter" });
          }
          return res.status(201).json({ message: "Renter data saved successfully" });
        }
      );
    } catch (error) {
      console.error("Error saving renter:", error);
      return res.status(500).json({ error: "Failed to save renter data" });
    }
  }
);

module.exports = router;
