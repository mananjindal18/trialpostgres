
const pool = require('../db/pool');

// exports.createUser = async (req, res,next) => {
//     const { username, email, mobile,gender } = req.body;
//     const { rows } = await pool.query(
//       "INSERT INTO users (username, email, mobile,gender) VALUES ($1, $2, $3,$4)",
//       [username, email, mobile,gender]
//     );
//       console.log("Rows",rows);
//     res.status(201).send({
//       message: "User added successfully!",
//       body: {
//         user: { username, email, mobile,gender }
//       },
//     });
//   };

  // exports.listAllUsers = async (req, res,next) => {
  //   const response = await pool.query(
  //     "SELECT * FROM users ORDER BY username ASC"
  //   );
  //     console.log("Rows",response.rows);
  //     res.status(200).send(response.rows);
  // };
  

  // exports.findUserById = async (req, res,next) => {
    
  //   const username = req.params.id;
  //   const response = await pool.query(
  //     "SELECT * FROM users where username= $1",[username],
  //   );
  //     console.log("Rows",response.rows);
  //   res.status(200).send({
  //     message: "User details fetched successfully!",
  //     body: {
  //       user: response.rows
  //     },
  //   });
  // };  

  // exports.updateUserById = async (req, res,next) => {
    
  //   const username = req.params.id;
  //   const { email, phone,gender } = req.body;
  //   const response = await pool.query(
  //     "UPDATE users SET email=$1, phone=$2, gender=$3 WHERE username = $4",[email, phone,gender,username]
  //   );
  //     console.log("Rows",response.rows);
  //   res.status(200).send({
  //     message: "User details updated successfully!",
  //     body: {
  //       user: response.rows
  //     },
  //   });
  // };
  
// (req,res,next)=>{
//     let {username,email,phone,gender} = req.body;
//     const {rows} = await pool.query(`INSERT INTO users VALUES('${username}','${email}','${phone}','${gender}')`,(error,results)=>{
//         if(error){
//             console.log(error)
//         }
//         console.log(results);
//         res.status(200).json(results);
//     })
// }