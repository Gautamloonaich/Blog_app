import { NextResponse } from "next/server";
import { connectDb} from "../../../../../lib/config/db";
import { bloggmodle } from "../../../../../lib/moddles/blogmodle";

 async function  LoadDB(){
   await connectDb();
}

LoadDB();


//GET method Api by id 
export async function GET(request,{params}){
   
  let datas= await  bloggmodle.find();
  console.log
    let data= datas.filter((item)=>{
        return(item._id==params.blog_api_id)
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

// Delete Api 
export async function DELETE(request,{params}){
  let ide=params.blog_api_id;
  let final={_id:ide};
 
  try{
 await bloggmodle.deleteOne(final);

  return NextResponse.json({result:"Blog is deleted ",success:true},{status:200})
  }
  catch(err)
  {
    return NextResponse.json({result:"something wrong pls Try again ",success:false},{status:404})
  }
}