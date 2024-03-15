const express= require('express')
const app= express();
require("./conn/conn");
const cors=require("cors");

const auth=require("./routes/auth");
const list=require("./routes/list");

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello from nandini");
})

app.use(auth);
app.use(list);


app.listen(1000,()=>{
    console.log("server listening at 1000");
})