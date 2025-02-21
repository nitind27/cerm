// controllers/childPropertiesController.js
const db = require('../db'); // your database connection

exports.getChildProperties = async (req, res) => {
  try {
    const { id } = req.params; // property id
    // Query the child_properties table where property_id matches the given id
    const [childProperties] = await db.query(
      'SELECT * FROM child_properties WHERE property_id = ?',
      [id]
    );
    res.json(childProperties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
