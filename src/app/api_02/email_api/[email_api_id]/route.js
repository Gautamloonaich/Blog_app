import { connectDb} from "../../../../../lib/config/db";
import { NextResponse } from "next/server";
import { emailmodle } from "../../../../../lib/moddles/emailmodke";

 async function  LoadDB(){
   await connectDb();
}

LoadDB();


export async function DELETE(request,{params}){
    
    const id=params.email_api_id;
    const del= {_id:id};
    try{
        await emailmodle.deleteOne(del);
        return NextResponse.json({result:"email is deleted ",success:true},{status:200})
    }
    catch(err){
        return NextResponse.json({result:"Something Wrong please try again",success:false},{status:404})
        
    }

}