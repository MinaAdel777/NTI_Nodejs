const mongoose = require('mongoose');

const userTypeSchema = mongoose.Schema({
    name:{
        type:String,
        required :true,
        unique:true
    },
    desc:String
},{
    timestamps:true
})

module.exports = mongoose.model('userType',userTypeSchema);
