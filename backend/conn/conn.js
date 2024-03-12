const mongoose= require('mongoose');

const conn= async (req,res)=>{
    try{
        await mongoose.connect("mongodb+srv://user:nandinisahu407@cluster0.gs7b5vp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("connected successfully to db")
    });

    }
    catch(error){
       
        console.log(`Not connected ${error}`);
    }
    
}

conn();