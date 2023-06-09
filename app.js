require('./src/model/Connection.js')
const express=require('express')
const app=express()
const Users=require('./src/model/User.js')
const Biodata=require('./src/model/Biodata.js')
const cors = require("cors");
const multer = require("multer");
const gridfs = require("gridfs-stream");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
const { GridFsStorage } = require("multer-gridfs-storage");
const storage = new GridFsStorage({
    url: 'mongodb+srv://zaidcoder01:Shahzaid1010@@biodata.stdklr9.mongodb.net/"',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
      return {
        bucketName: "biodata",
        filename: `${Date.now()}-biodata-${file.originalname}`,
      };
    },
  });
  
  const upload = multer({ storage });

app.get('/',(req,res)=>{
res.send("ok")
})
app.post('/biodata',upload.none(),(req,res)=>{
    const {नाव,जन्मतारीख,जन्माचीवेळ,जन्मस्थळ,नावरसनाव,धर्मजात,पत्ता,मो,नक्षत्र,देवक, गोत्र,कुलदैवत,email}=req.body;
    const d=new Biodata({नाव,जन्मतारीख,जन्माचीवेळ,जन्मस्थळ,नावरसनाव,धर्मजात,पत्ता,मो,नक्षत्र,देवक, गोत्र,कुलदैवत,email})
    try{
        d.save();
    }
    catch(e){
        res.send(e);
    }
})
app.post('/biodata2',upload.none(),(req,res)=>{
    const {नाव,जन्मतारीख,जन्माचीवेळ,जन्मस्थळ,नावरसनाव,धर्मजात,पत्ता,मो,नक्षत्र,देवक, गोत्र,कुलदैवत,email}=req.body;
    const d=new Biodata({नाव,जन्मतारीख,जन्माचीवेळ,जन्मस्थळ,नावरसनाव,धर्मजात,पत्ता,मो,नक्षत्र,देवक, गोत्र,कुलदैवत,email})
    try{
        d.save();
        res.send("ok");
    }
    catch(e){
        res.send(e);
    }
})
app.post("/newUser", (req, res) => {
    const f = req.body;
    const us = new Users(f);
    us.save();
    res.send("added");
  });
app.post("/login", (req, res) => {
    const { email, pass } = req.body;
    Users.findOne({ email: email, pass: pass }, (err, data) => {
      if (err) {
        res.send("no");
      } else {
        res.send(data);
      }
    });
  });
  app.post("/mydata", (req, res) => {
    const { email} = req.body;
    Biodata.find({ email: email}, (err, data) => {
      if (err) {
        res.send("no");
      } else {
        res.send(data);
      }
    });
  });
  app.post("/alldata", (req, res) => {
    Biodata.find({}, (err, data) => {
      if (err) {
        res.send("no");
      } else {
        res.send(data);
      }
    });
  });

app.listen(3001,()=>{
    console.log("connect")
})
