import spareModel from "../models/spareModel.js";
import fs from 'fs'


const addSpare=async (req,res)=>{
    let image_filename =`${req.file.filename}`;

    const spare= new spareModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await spare.save();
        res.json({success:true,message:"Spare Part Added"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}



const listSpare=async (req,res)=>{
    try {
        const spares=await spareModel.find({});
        res.json({success:true,data:spares})
    } catch (error) {
        res.json({success:false,message:"Error"})
    }
}

const removeSpare=async(req,res)=>{
    try {
        const spare=await spareModel.findById(req.body.id);
        fs.unlink(`uploads/${spare.image}`,()=>{})

        await spareModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"spare Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})        
    }
}
export {addSpare,listSpare,removeSpare}