import mongoose from "mongoose";

const {DB_USERNAME,DB_PASSWORD}=process.env;





export async function connectDb() {
 
 const connectionstr="mongodb+srv://"+DB_USERNAME+":"+DB_PASSWORD+"@cluster0.04ocygm.mongodb.net/bloggitem?retryWrites=true&w=majority&appName=Cluster0";
  
  const connectionmail="mongodb+srv://"+DB_USERNAME+":"+DB_PASSWORD+"@cluster0.04ocygm.mongodb.net/email?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(connectionstr);
     await mongoose.connect(connectionmail);
     console.log("connected data base...........................................");
    
  
}