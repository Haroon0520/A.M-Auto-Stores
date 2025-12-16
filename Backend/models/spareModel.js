import mongoose from "mongoose";

const spareSchema= new mongoose.Schema({
    name :{type :String, required:true},
    description :{type :String, required:true},
    price :{type :Number, required:true},
    image :{type :String, required:true},
    category :{type :String, required:true}
})

const spareModel = mongoose.models.spare || mongoose.model("spare",spareSchema)

export default spareModel;