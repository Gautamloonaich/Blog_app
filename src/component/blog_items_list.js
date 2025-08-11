"use client"
import { useEffect, useState } from "react";
import { Blogitem } from "./blog_item";

export  function BlogList(){
   let[data,setdata]=useState([]);
    let [value,setvalue]=useState("All");
    
 async function getdata(){
  let response = await fetch("http://localhost:3000/api_02/blog_api");
  response= await response.json();
   let val=response.result;
   setdata(val);
 }
 useEffect(()=>{
  getdata();
 },[])
    return(
        <>
        
          
          <div className=" mx-1 sm:mx-3 mt-10 sm:mt-25 space-y-13 sm:space-y-15">
            <div className=" mx-2 sm:mx-3 flex justify-center gap-1 font-medium  sm:font-black  sm:gap-8 md:gap-12 [&>*]:px-2 sm:[&>*]:px-5 [&>*]:py-1 sm:[&>*]:py-3 text-[18px] sm:text-xl md:text-2xl  ">
                <button  onClick={()=>setvalue("All")} className= {value=="All" ? "bg-black text-white rounded-xl":"" }>All</button>
                <button onClick={()=>setvalue("Technology")} className = {value=="Technology" ? "bg-black text-white rounded-xl":"" }>Technology</button>
                <button onClick={()=>setvalue("Startup")} className= {value=="Startup" ? "bg-black text-white rounded-xl":"" }>Startup</button>
                <button onClick={()=>setvalue("Lifestyle")}className= {value=="Lifestyle" ? "bg-black text-white rounded-xl":"" }>Lifestyle</button>


            </div>
              
              <div className="mt-9 flex flex-wrap justify-center items-center gap-15 sm:gap-25 columns-auto">
                {
                   data.filter((item)=>{return (value=="All"? true:item.category==value)}).map((item,key)=>{
                        return <Blogitem key={key} id={item._id} pic={item.image} category={item.category}  title={item.title} description={item.description}/>
                       
                    })
                }
                  
              </div>
          </div>
      
        </>
    )
}