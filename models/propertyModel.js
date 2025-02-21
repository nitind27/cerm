// models/propertyModel.js
const db = require("../config/db");

// Example function to insert a property record
async function createProperty(propertyData, childProperties) {
  // propertyData = { propertyName, ownerName, address, documents, ... }
  const {
    propertyName,
    ownerName,
    address,
    documents
  } = propertyData;

  // 1. Insert the main property
  const [propertyResult] = await db.execute(
    `INSERT INTO properties (propertyName, ownerName, address, documents)
     VALUES (?, ?, ?, ?)`,
    [propertyName, ownerName, address, documents]
  );
  const propertyId = propertyResult.insertId;

  // 2. Insert child properties (floors)
  for (const child of childProperties) {
    const {
      floor,
      title,
      description,
      rooms,
      washroom,
      gas,
      electricity,
      deposit,
      rent
    } = child;

    await db.execute(
      `INSERT INTO child_properties (
        propertyId, floor, title, description,
        rooms, washroom, gas, electricity, deposit, rent
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        propertyId,
        floor,
        title,
        description,
        rooms,
        washroom,
        gas,
        electricity,
        deposit,
        rent
      ]
    );
  }

  return propertyId;
}

module.exports = {
  createProperty,
};
