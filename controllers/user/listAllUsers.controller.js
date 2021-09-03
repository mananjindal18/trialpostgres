const pool = require('../../db/pool');
module.exports.listAllUsers = async (req, res,next) => {
  console.log("Req params in list all users",req.requestTime)
  const response = await pool.query(
    "SELECT * FROM users ORDER BY username ASC"
  );
    console.log("Rows",response.rows);
    res.status(200).send(response.rows);
};