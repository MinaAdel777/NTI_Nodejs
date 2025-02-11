const userTypeModel = require('../Models/userType.model');

exports.createUserType = async(req,res)=>{
    try
    {
const userType = await userTypeModel.create(req.body);
res.status(201).json(userType);
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.getUserTypes= async(req,res)=>{
    try{
    //    if(req.user){
    //     const userTypeId = req.user.userType;
    //     const userType= await userTypeModel.findById(userTypeId);
    //     if(userType.name === 'admin')
    //     {
        const userTypes = await userTypeModel.find();
        res.status(200).json(userTypes);
    //     }
    //     else
    //     {
    //         return res.status(401).json({error : 'Access denied: user not allowed'});
    //     }
    //    }
    //    else
    //    {
    //     return res.status(401).json({error : 'Access denied: user not allowed'});
    //    }
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}


