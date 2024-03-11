const express= require('express')
const app= express();
require("./conn/conn");

const auth=require("./routes/auth");
const list=require("./routes/list");

app.get("/",(req,res)=>{
    res.send("Hello from nandini");
})

app.use(auth);
app.use(list);

app.listen(3000,()=>{
    console.log("server listening at 3000");
})