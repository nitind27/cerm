// models/renterModel.js
const db = require("../config/db");

async function createRenter(renterData) {
  const {
    renterName,
    fullAddress,
    age,
    numberOfStayers,
    aadhaarCard,
    panCard,
    passportPhoto,
    otherDocument,
    contact1,
    contact2,
    remarks
  } = renterData;

  const [renterResult] = await db.execute(
    `INSERT INTO renters (
      renterName, fullAddress, age, numberOfStayers,
      aadhaarCard, panCard, passportPhoto, otherDocument,
      contact1, contact2, remarks
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      renterName,
      fullAddress,
      age,
      numberOfStayers,
      aadhaarCard,
      panCard,
      passportPhoto,
      otherDocument,
      contact1,
      contact2,
      remarks
    ]
  );

  return renterResult.insertId;
}

module.exports = {
  createRenter,
};
