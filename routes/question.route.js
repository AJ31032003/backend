const express=require("express")
const { QuestionModel } = require("../models/question.model")

const questionRouter=express.Router()

questionRouter.get("/",async(req,res)=>{
    let data=await QuestionModel.find()
    res.send(data)
})

questionRouter.post("/create",async(req,res)=>{
    let data=req.body
    try {
        let User=new QuestionModel(data)
        await User.save()
        res.send({"msg":"Added SuccessFully"})
    } catch (error) {
        res.send({error})
    }
})

questionRouter.patch("/modify/:id",async(req,res)=>{
    let id=req.params.id
    let data=req.body
    try {
        let userData=await QuestionModel.find({_id:id})
    if(userData[0].userID=data.userID){
        await QuestionModel.findByIdAndUpdate(id,data)
        res.send({"msg":"Updated Succesfully"})
    }else{
        res.send({"msg":"You cannot modify the data."})
    }
    } catch (error) {
        res.send({error})
    }
    
})

questionRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
    try {
        
        let userData=await QuestionModel.find({_id:id})
        if(userData[0].userID==req.body.userID){
            await QuestionModel.findByIdAndDelete(id)
            res.send({"msg":"Deleted Succesfully."})
        }else{
            res.send({"msg":"You can't delete this route."})
        }
    } catch (error) {
        res.send({error})
    }
})

module.exports={
    questionRouter
}