const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phoneNo:{
        type:Number
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
    item:{
        type:String
    }

});
module.exports=mongoose.model("orders",userSchema)
