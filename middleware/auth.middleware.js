const jwt = require("jsonwebtoken");
function verifyToken(req,res,next){
    try {
       const token = req.headers.authorization.split(' ')[1];
       console.log("Token",token);
       const decoded = jwt.verify(token,process.env.JWT_ACCESS_SECRET);
       console.log("Decoded value",decoded);
       req.userData = decoded;
       req.token = token;
       //Verify BlackListed Access Token
    //    redis_client.get('BL_'+decoded.sub.toString(),(err,data)=>{
    //        if(err) throw err;
    //        if(data===token)  return res.status(403).json({status:false,message:"Blacklisted token"})
    //        next();
    //    })
    next();
        
    } catch (error) {
        return res.status(401).json({status:false,message:"Your session is not valid"})
    }
}

function verifyRefreshToken(req,res,next){
    const token = req.body.token;
    if(token===null) return res.status(401).json({status:false,message:"Token is null"})
    try {
       const decoded = jwt.verify(token,process.env.JWT_REFRESH_SECRET);
       console.log("Decoded value",decoded);
       req.userData = decoded;
       // If token is there in store or not

        // redis_client.get(decoded.sub.toString(),(err,data)=>{
        //     if(err) throw err;
        //     if(data==null) return res.status(401).json({status:false,message:"Token is not there in store"})
        //     if(JSON.parse(data).token != token) return res.status(401).json({status:false,message:"Token is not same in store"})
        //     next()
        // })
        next()
       
    } catch (error) {
        return res.status(401).json({status:false,message:"Your session is not valid"})
    }
}

module.exports = {
    verifyToken,
    verifyRefreshToken
}