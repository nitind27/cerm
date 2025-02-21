// // controllers/propertyController.js
// const { createProperty } = require("../models/propertyModel");

// exports.createPropertyController = async (req, res) => {
//   try {
//     // If you are sending files using Multer, they might be in req.file or req.files
//     // For the main 'documents' file:
//     let documentsPath = null;
//     if (req.file) {
//       documentsPath = req.file.filename; // or req.file.path, depending on your config
//     }

//     // Parse the JSON data (assuming childProperties is sent as a JSON string)
//     const {
//       propertyName,
//       ownerName,
//       address,
//       childProperties
//     } = JSON.parse(req.body.formData);

//     const propertyId = await createProperty(
//       {
//         propertyName,
//         ownerName,
//         address,
//         documents: documentsPath,
//       },
//       childProperties
//     );

//     return res.status(201).json({ success: true, propertyId });
//   } catch (error) {
//     console.error("Error in createPropertyController:", error);
//     return res.status(500).json({ success: false, message: "Server Error" });
//   }
// };


// controllers/propertyController.js
const { createProperty } = require("../models/propertyModel");

exports.createPropertyController = async (req, res) => {
  try {
    let documentsPath = null;
    if (req.file) {
      documentsPath = req.file.filename;
    }

    const {
      propertyName,
      ownerName,
      address,
      childProperties
    } = JSON.parse(req.body.formData);

    // Insert property + child properties in DB
    const propertyId = await createProperty(
      {
        propertyName,
        ownerName,
        address,
        documents: documentsPath,
      },
      childProperties
    );

    return res.status(201).json({ success: true, propertyId });
  } catch (error) {
    console.error("Error in createPropertyController:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
