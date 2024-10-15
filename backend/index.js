const port = 4002;
const express =  require("express");
const app = express();
const mongoose =  require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//DATABASE CINNECTIONS WITH MONGODB
mongoose.connect("mongodb+srv://aashraya11:demon_69@cluster0.abvcx6v.mongodb.net/TRVL")

//API CREATION
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//IMAGE STORAGE ENGINE 

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//CREATING UPLOAD ENDPOINTS FOR IMAGES
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('place'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// SCHEMA FOR CREATING PRODUCTS
const Place = mongoose.model("Place",{
    
})

app.listen(port,(error)=>{
    if(!error) {
        console.log("Server running on port "+port)
    }
    else{
        console.log("Error : "+error)
    }
})