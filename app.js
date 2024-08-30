const express = require('express');
const upload = require('./multer');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', "ejs");

app.get("/", function(req,res){
    res.render("index")
})

app.post("/upload",upload.single("upload"), function(req,res){
    res.send("uploaded..")
})



app.listen(3000);