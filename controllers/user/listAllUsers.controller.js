const pool = require('../../db/pool');
module.exports.listAllUsers = async (req, res,next) => {
  const response = await pool.query(
    "SELECT * FROM users ORDER BY username ASC"
  );
    console.log("Rows",response.rows);
    res.status(200).send(response.rows);
};