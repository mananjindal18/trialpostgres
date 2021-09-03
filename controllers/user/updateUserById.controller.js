const pool = require('../../db/pool');
module.exports.updateUserById = async (req, res,next) => {
    
  const username = req.params.id;
  const { email, mobile,gender } = req.body;
  const response = await pool.query(
    "UPDATE users SET email=$1, mobile=$2, gender=$3 WHERE username = $4",[email, mobile,gender,username]
  );
    console.log("Rows",response.rows);
  res.status(200).send({
    message: "User details updated successfully!",
    body: {
      user: response.rows
    },
  });
};