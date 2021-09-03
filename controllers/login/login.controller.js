const jwt = require('jsonwebtoken');
const pool = require('../../config/pool');
module.exports.Login = async (req, res,next) => {
    const { username,pssword } = req.body;
    const { rows } = await pool.query(
      "Select * from users where username=$1 and pssword=$2",[username,pssword]
    );
      console.log("Rows",rows);
      if(rows && rows.length>0){
          //Generate Access Token and Refresh Token
       const access_token = jwt.sign(
        { sub: username },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: process.env.JWT_ACCESS_TIME }
      );
      const refresh_token = generateRefreshToken(username);
       res.status(201).send({
        message: "User found successfully!",
        body: {
          user: { username },
          token:{
              access_token:access_token,
              refresh_token:refresh_token
          }
          
        },
      });
      }
      else{
        res.status(401).send({
            message: "User not found!"
            
          });
      }
    
  };

  module.exports.GetAccessToken = (req,res)=>{
    const user_id =req.userData.sub;
    const access_token = jwt.sign({sub:user_id},process.env.JWT_ACCESS_SECRET,{expiresIn:process.env.JWT_ACCESS_TIME})
    const refresh_token = generateRefreshToken(user_id);
    return res.status(200).json({status:true,message:"Success..",data:{access_token,refresh_token}});
}


  function generateRefreshToken(user_id) {
    const refresh_token = jwt.sign(
      { sub: user_id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: process.env.JWT_REFRESH_TIME }
    );
  
    // redis_client.get(user_id.toString(), (err, data) => {
    //   if (err) throw err;
    //   redis_client.set(
    //     user_id.toString(),
    //     JSON.stringify({ token: refresh_token })
    //   );
    // });
    return refresh_token;
  }
