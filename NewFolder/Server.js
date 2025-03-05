const express = require("express");
const app= express();

//moddleware to convert urlencoded data

app.use(express.urlencoded({extended:true}))

let userData =[];

app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
})

app.post("/signup",(req,res)=>{
    let {username,useremail,userpassword} = req.body;
    let newUser={
        name:username,
        email:useremail,
        password:userpassword
    }
    userData.push(newUser);
    
    res.send(userData);
})
