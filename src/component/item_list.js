"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import profile from "../../public/assets/profile_icon.png"
import { toast } from "react-toastify";

export  function Items(){
    let[data,setdata]=useState([ ]);
    const [loading, setLoading] = useState(true);
    
 async function getdata(){
    try{
  let response = await fetch("/api_02/blog_api", {cache: "no-store" });
  response= await response.json();
   let val=response.result;
   if (Array.isArray(val)) {
        setdata(val);
        setLoading(false);
      } 
    }
    catch(err){
       setLoading(true);
    }
 }
 
 useEffect(()=>{
  getdata();
 },[])
  
  async function handledelet(id){

   let response =await fetch("/api_02/blog_api/"+id,{
    method:"DELETE",
   });
   
   response=await response.json();
   console.log(response.result);
   console.log(response);
   
   if(response.success==true)
   {
    toast.success(response.result);
   getdata();

   }
   else{
    toast.error(response.result);
   }
   

  }
    return(
       <div className=" w-full px-4 sm:px-7 md:px-15 py-8 sm:py-10 space-y-5">
        <h1 className=" text-center block md:hidden font-medium text-2xl sm:text-3xl ">Blog List</h1>
        <div className="   max-w-[100%] overflow-x-auto  ">
            <table className="w-full overflow-x-auto border-separate border-spacing-y-7 ">
                <thead className="text-left uppercase bg-zinc-50  shadow-md inset-shadow-zinc-200 ">
                    <tr className="border text-sm sm:text-xl font-medium [&>*]:p-7 [&>*]:text-sm [&>*]:sm:text-lg [&>*]:lg:text-xl p-3">
                        <th className="hidden md:block    ">
                          Author
                        </th>
                        <th className=" text-center"> Title</th>
                        <th className="  text-sm "> Date</th>
                        <th className="   text-sm "> Delete</th>

                    </tr>
                </thead>
                
                    {                          
                loading==false ?    (data.map((item)=>{
                
                       return  <tbody key={item._id}   className=" text-left mb-2  shadow-sm shadow-gray-300  hover:shadow-gray-400  ">
                               <tr     className=" border-2 my-5 [&>*]:py-6   [&>*]:px-3 [&>*]:text-sm [&>*]:md:text-md [&>*]:lg:text-lg">
                                  <th className="hidden md:block   "><div className="flex flex-col justify-center items-center gap-2"><Image src={profile} height={30} width={30} alt="profile"/><p className="text-sm font-normal text-center ">Alex Bennett</p></div></th>
                                  <th className="  p-2 font-normal"> {item.title}</th>
                                  <th className=" p-2 font-light pl-10">{new Date( Date.now()).toDateString()} </th>
                                  <th className="  text-center  p-1 font-light pl-10 "><button className="border border-bg-600 py-1 px-2 md:px-3 md:py-2 rounded-md text-white bg-purple-600 active:bg-purple-950 font-medium "onClick={()=>handledelet(item._id)}>Delete</button> </th> 
                               </tr>
                            </tbody>
                        
                           }))
                           :(
                            <tbody>
                                <tr className="w-full">
                                    <th className="text-xl font-light text-center mt-3">Loading data......</th>
                                </tr>
                            </tbody>
                           )
                    }
                   

            </table>
        </div>
       </div>
    )
}