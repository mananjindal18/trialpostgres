const pool = require('../../config/pool');
const bcrypt = require('bcryptjs');

const matchPassword = async function (enteredPassword,savedPassword) {
  return await bcrypt.compare(enteredPassword, savedPassword);
  };
module.exports.updateUserById = async (req, res,next) => {
    
  const username = req.params.id;
  const { email, mobile,gender,pssword } = req.body;
  /* Get userSaved Password in encrypted Format */
  const pswdresponse = await pool.query(
    "SELECT encryptPassword FROM users where username= $1",[username],
  );
    console.log("Rows",pswdresponse.rows);
    console.log("Encrypted Password",pswdresponse.rows[0].encryptpassword);
    console.log("Password Entered",pssword);
    if(pswdresponse.rows && pswdresponse.rows[0].encryptpassword && await matchPassword(pssword, pswdresponse.rows[0].encryptpassword)){
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
    //   bcrypt.compare(pssword, pswdresponse.rows[0].encryptpassword, async function(err, res) {
    //     // res === true
    //     console.log("Res",res);
    //     if(res){
    //       const response = await pool.query(
    //         "UPDATE users SET email=$1, mobile=$2, gender=$3 WHERE username = $4",[email, mobile,gender,username]
    //       );
    //         console.log("Rows",response.rows);
    //       res.status(200).send({
    //         message: "User details updated successfully!",
    //         body: {
    //           user: response.rows
    //         },
    //       });
    //     }
    //     else{
    //       res.status(401).send({
    //         message: "Password Incorrect!"
    //       });
    //     }
    // });
      
    }
    else{
      res.status(401).send({
                message: "Password Incorrect!"
              });
    }
  
};