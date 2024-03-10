const mongoose= require('mongoose');

const conn= async (req,res)=>{
    try{
        await mongoose.connect("mongodb+srv://user:nandinisahu407@cluster0.gs7b5vp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("connected successfully to db")
    });

    }
    catch(error){
        // res.status(400).json(
        //     {message:`Not Connected ${error}`}
        // );
        console.log(`Not connected ${error}`);
    }
    
}

conn();