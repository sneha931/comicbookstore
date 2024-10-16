const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("MONGOdb connected");
    }
    catch(err){
        console.error(error)
    }
};
module.exports=connectDB;