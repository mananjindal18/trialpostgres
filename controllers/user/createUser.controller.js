const pool = require('../../db/pool');
module.exports.createUser = async (req, res,next) => {
    const { username, email, mobile,gender } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO users (username, email, mobile,gender) VALUES ($1, $2, $3,$4)",
      [username, email, mobile,gender]
    );
      console.log("Rows",rows);
    res.status(201).send({
      message: "User added successfully!",
      body: {
        user: { username, email, mobile,gender }
      },
    });
  };