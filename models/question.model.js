const mongoose=require("mongoose")

const questionSchema=mongoose.Schema({
    question:String,
    options:Array,
    answer:String,
    difficulty:String,
    category:String
},{
    versionKey:false
})

const QuestionModel=mongoose.model("questions",questionSchema)

module.exports={
    QuestionModel
}