const db = require("../../../server/db");

export default function handler(req, res) {
  res.status(200).json(db.products);
}
