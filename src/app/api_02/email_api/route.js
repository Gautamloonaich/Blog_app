import {  NextResponse } from "next/server";
import { emailmodle } from "../../../../lib/moddles/emailmodke";
import { connectDb } from "../../../../lib/config/db";

 async function  LoadDB(){
   await connectDb();
}

LoadDB();



export async function GET(){

  try{
    let data = await emailmodle.find();
    console.log(data);
    return NextResponse.json({result:data,success:true},{status:200})
  }
  catch(err){
    return NextResponse.json({result:"something wrong try again  ",success:false},{status:404})

  }
}





export async function POST(request){
 
    
    try{
        let formdata = await request.formData();
    const emails={
        email: formdata.get("email")
    }
    await emailmodle.create(emails); 
    if((emails.length)==0){
    return  NextResponse.json({result:"Something wrong please try again ",success:false},{status:404})

    }

    
    return  NextResponse.json({result:"Suscription  Done",success:true},{status:200})
    }
    catch(err)
    {
    return  NextResponse.json({result:"Something wrong please try again ",success:false},{status:404})

    }
}