// // controllers/renterController.js
// const { createRenter } = require("../models/renterModel");

// exports.createRenterController = async (req, res) => {
//   try {
//     // 1) Pull fields directly from req.body (no JSON.parse)
//     const {
//       renterName,
//       fullAddress,
//       age,
//       numberOfStayers,
//       contact1,
//       contact2,
//       remarks
//     } = req.body;

//     // 2) Grab uploaded files (if any) from req.files
//     const aadhaarCardFile = req.files?.aadhaarCard?.[0] || null;
//     const panCardFile = req.files?.panCard?.[0] || null;
//     const passportPhotoFile = req.files?.passportPhoto?.[0] || null;
//     const otherDocumentFile = req.files?.otherDocument?.[0] || null;

//     // 3) Prepare data for DB insertion
//     const renterData = {
//       renterName,
//       fullAddress,
//       age,
//       numberOfStayers,
//       aadhaarCard: aadhaarCardFile ? aadhaarCardFile.filename : null,
//       panCard: panCardFile ? panCardFile.filename : null,
//       passportPhoto: passportPhotoFile ? passportPhotoFile.filename : null,
//       otherDocument: otherDocumentFile ? otherDocumentFile.filename : null,
//       contact1,
//       contact2,
//       remarks
//     };

//     // 4) Insert into DB (assuming createRenter is correct)
//     const renterId = await createRenter(renterData);

//     return res.status(201).json({
//       success: true,
//       message: "Renter data saved successfully!",
//       renterId
//     });
//   } catch (error) {
//     console.error("Error in createRenterController:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: error.message
//     });
//   }
// };

// controllers/renterController.js
const { createRenter } = require("../models/renterModel");

exports.createRenterController = async (req, res) => {
  try {
    // Non-file fields from req.body
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
    const aadhaarCardFile = req.files?.aadhaarCard?.[0] || null;
    const panCardFile = req.files?.panCard?.[0] || null;
    const passportPhotoFile = req.files?.passportPhoto?.[0] || null;
    const otherDocumentFile = req.files?.otherDocument?.[0] || null;

    // Prepare data for DB insertion
    const renterData = {
      renterName,
      fullAddress,
      age,
      numberOfStayers,
      contact1,
      contact2,
      remarks,
      aadhaarCard: aadhaarCardFile ? aadhaarCardFile.filename : null,
      panCard: panCardFile ? panCardFile.filename : null,
      passportPhoto: passportPhotoFile ? passportPhotoFile.filename : null,
      otherDocument: otherDocumentFile ? otherDocumentFile.filename : null
    };

    // Insert into DB (assuming createRenter is a function in your model)
    const renterId = await createRenter(renterData);

    return res.status(201).json({
      success: true,
      message: "Renter data saved successfully!",
      renterId
    });
  } catch (error) {
    console.error("Error in createRenterController:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
};
