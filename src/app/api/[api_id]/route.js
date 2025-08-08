import { NextResponse } from "next/server";
import {blog_data} from "../../../../public/assets/assets_data"
export async function GET(request,{params}){
   
    let datas=blog_data ;
    let data= datas.filter((item)=>{
        return(item.id==params.api_id)
    })
   try
    {
        if(data.length!=0){
    return NextResponse.json({result:data,success:true},{status:200})

        }
        else{
    return NextResponse.json({result:"id is not found",success:false},{status:404})

        }
        
    }
    
    catch(err)
   {
    return NextResponse.json({result:"data is not found ",success:flase},{status:404})

    }
   
}