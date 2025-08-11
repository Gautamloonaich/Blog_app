"use client"
import Image from "next/image";
import uploadarea  from "../../public/assets/upload_area.png"
import { useState } from "react";
import { toast } from "react-toastify";

export function Productform(){
   let [image,setimage]=useState(false);
   let[data,setdata]=useState({
    title:"",
    description:"",
    category:"",
    author:"Alex Bennett",
    authorImg:"/assets/profile_icon.png"
   })


   async function handleSumbit(e){
         e.preventDefault();
         console.log(data);
         let responde= new FormData();
         responde.set("title",data.title);
         responde.set("description",data.description);
         responde.set("category",data.category);
         responde.set("author",data.author);
         responde.set("authorImg",data.authorImg);
         responde.set("image",image);
         let result=await fetch("http://localhost:3000/api_02/blog_api",{
            method:"POST",
            body:responde
         });
         result=await result.json();
         console.log(result);
         if(result.success==true){
               toast.success(result.msg);
                   setdata({
                   title:"",
                   description:"",
                   category:"",
                   author:"Alex Bennett",
                   authorImg:"/assets/profile_icon.png"   
               });
           setimage(false);

         }
         else{
               toast.error(result.msg)
         }
  
    }
    function handlechange(e,id){
        if(id==101)
        {
        data.title=e.target.value;
        }
        else if(id==102){
            data.description=e.target.value;
        }
        else{
            data.category=e.target.value;
        }
     
        setdata({...data});
        console.log(data);
    }

    return(
        <>
        <form onSubmit={handleSumbit} className="pl-4 py-7  sm:pl-8  md:pl-15 lg:pl-22   ">
            <p className="text-xl sm:text-2xl font-medium  mb-4">upload thumbnail</p>
            <label htmlFor="upload">
            <Image src={image==false?uploadarea:URL.createObjectURL(image)} width={150} height={150} alt="uploadarea" className="w-[130] sm:w-[150] "/>
            </label>
            <input type="file" placeholder="upload file" required id="upload" className="border hidden " onChange={(e)=>setimage(e.target.files[0])}/>
           
           
            <p className="text-xl sm:text-2xl font-medium mt-5 mb-3">Title of Blog</p>
            <input type="text" id="101" value={data.title} placeholder="Title" className=" text-lg mr-2 sm:text-xl border p-2 sm:p-2.5 w-[300px] sm:w-[450px] md:w-[500px]" onChange={(e)=>handlechange(e,"101")}  />



            <p className="text-xl sm:text-2xl font-medium mt-5 mb-3">Description of Blog</p>
            <textarea type="textarea" id="102" value={data.description} placeholder="Description " rows={6} className=" text-md mr-2 sm:text-xl border p-2 sm:p-2.5 w-[300px] sm:w-[450px] md:w-[500px]" onChange={(e)=>handlechange(e,"102")} />



            <p className="text-xl sm:text-2xl font-medium mt-5 mb-3">Catagery of Blog</p>
           <div className="flex flex-col w-[500px] gap-5">
          
          
             <select name="category" id="103" value={data.category} className="border rounded-lg w-[120px] p-2" onChange={(e)=>handlechange(e,"103")}>
                <option value="Technology">Technology</option>
                <option value="Startup">Startup</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Technology">Technology</option>

            </select>
            <button  type="submit" className="px-5 py-3 bg-purple-700 hover:bg-purple-950 text-white rounded-lg w-[120px]" >sumbit</button>
           </div>

        </form>
        </>
    )
}