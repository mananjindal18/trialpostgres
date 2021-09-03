const pool = require('../../config/pool');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
module.exports.createUser = async (req, res,next) => {
    const { username, email, mobile,gender,pssword } = req.body;
    const salt = await bcrypt.genSalt(10);
    const encryptPassword = await bcrypt.hash(pssword, salt);
    const { rows } = await pool.query(
      "INSERT INTO users (username, email, mobile,gender,pssword,encryptPassword) VALUES ($1, $2, $3,$4,$5,$6)",
      [username, email, mobile,gender,pssword,encryptPassword]
    );
      console.log("Rows",rows);
    res.status(201).send({
      message: "User added successfully!",
      body: {
        user: { username, email, mobile,gender }
      },
    });
  };