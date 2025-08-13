const {  default: mongoose } = require("mongoose")

const emailschema=new mongoose.Schema({
   email:{
 
    type:String,
    require:true
   } ,
   
   date:{
    type:String,
    default:Date.now()
   }

})

export const emailmodle= mongoose.models.mail || mongoose.model("mail",emailschema);