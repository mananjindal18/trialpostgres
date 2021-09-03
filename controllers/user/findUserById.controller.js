const pool = require('../../db/pool');
module.exports.findUserById = async (req, res,next) => {
  const username = req.params.id;
  const response = await pool.query(
    "SELECT * FROM users where username= $1",[username],
  );
    console.log("Rows",response.rows);
  res.status(200).send({
    message: "User details fetched successfully!",
    body: {
      user: response.rows
    },
  });
};