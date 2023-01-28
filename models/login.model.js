const mongoose=require("mongoose")

const loginSchema=mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:Number,required:true},
    pwd:{type:String,required:true}
},{
    versionKey:false
})
const LoginModel=mongoose.model("login",loginSchema)

module.exports={
    LoginModel
}
