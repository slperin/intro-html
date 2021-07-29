const express = require("express");
const path = require("path");

const publicPath = path.resolve(__dirname, "public");
const app = express();

app.use(express.static(publicPath));


app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"/views/home.html"));
})

app.get("/register.html",function(req,res){
  res.sendFile(path.join(__dirname,"/views/register.html"));
})

app.get("/login.html",function(req,res){
  res.sendFile(path.join(__dirname,"/views/login.html"));
})

app.listen(process.env.PORT || 3000,function(){
  console.log("Server running on http://localhost:" + (process.env.PORT || 3000));
})