const jwt = require('jsonwebtoken');
const secretKey = '86ZCEVM%7e--q9,agYonU9s2NVv=P2u!Mrf0%A%m<rTF0.of92d2(3OSFvj^[Ws';

exports.createToken = (data)=>{
   return  jwt.sign(data,secretKey,{expiresIn : '1h'});
}

exports.authMW = (req,res,next)=>{
    try{
       
    const token = req.header('Authorization')?.replace('Bearer ','');
    if(!token){
        return res.status(401).json({error : 'Access denied: token missing'});
    }
    const verified = jwt.verify(token,secretKey);
   
    req.user = verified;
    next();
}
catch(err){
    res.status(500).json({error:err.message})
}
    

}