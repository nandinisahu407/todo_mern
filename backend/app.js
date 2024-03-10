const express= require('express')
const app= express();
require("./conn/conn");

const auth=require("./routes/auth");

app.get("/",(req,res)=>{
    res.send("Hello from nandini");
})

app.use(auth);

app.listen(3000,()=>{
    console.log("server listening at 3000");
})