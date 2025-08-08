import { NextResponse } from "next/server";
import { blog_data } from "../../../public/assets/assets_data";

export function GET(){
    
    try{
        let data= blog_data;
        console.log("data is : " , data)
    return NextResponse.json({result:data,success:true},{status:200})
    }
    catch(err){
    return NextResponse.json({result:"Something error ",success:false},{status:404})

    }
} 