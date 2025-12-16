import express from "express"
import { addSpare,listSpare ,removeSpare} from "../controllers/spareController.js"
import multer from "multer"

const spareRouter= express.Router();
const storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

spareRouter.post("/add",upload.single("image"),addSpare)
spareRouter.get("/list",listSpare)
spareRouter.post("/remove",removeSpare)


export default spareRouter;