"use client"
import Image from "next/image";
import bloggerlogo from "../../public/assets/logo_light.png"
import arrow from "../../public/assets/arrow.png"
import { useRouter } from "next/navigation";

export default function Header(){
    let route=useRouter();
    return(
        <>
        <div className="px-3 md:px-12 lg:px-30 pt-5">
           <div className=" flex items-center justify-between ">
             <Image className="bg-black w-[150px] sm:w-auto " src={bloggerlogo} alt="blogger_logo"  width={150}  />
             <button className="border  flex  justify-between items-center font-medium py-0  sm:py-2  px-1 sm:px-5 text-xl sm:text-2xl  gap-1 xs:gap-3 hover:ring-1 hover:ring-black  shadow-[_-4px_4px_2px_rgb(0,0,0)] sm:shadow-[_-4px_4px_2px_rgb(0,0,0)] hover:shadow-[_-7px_7px_4px_rgb(0,0,0)] sm:hover:shadow-[_-7px_7px_4px_rgb(0,0,0)] cursor-pointer" onClick={()=>route.push("/admin")}>Get Start<Image className="my-2 sm:my-1" src={arrow} alt="arror" width={20} height={20}/></button>
           </div>
           <div className="flex flex-col justify-center  space-y-5 sm:space-y-10 p-3 mt-5 md:mt-7 items-center">
               <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold">Latest Blogs</h1>
               <div className="text-center px-3 sm:px-10  lg:px-15 xl:px-40  text-md md:text-xl  font-light"><p className="mb-1 sm:mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p></div>
             
              <form  className=" border flex  items-center justify-center shadow-[_-3px_3px_2px_rgb(0,0,0)] sm:shadow-[_-4px_4px_2px_rgb(0,0,0)]  ">
                     <input type="email" className="border   outline-0 text-lg sm:text-xl py-1.5 sm:py-3 px-2 sm:px-4 min-w-30 sm:min-w-95 hover:shadow-[_-5px_5px_4px_rgb(0,0,0)] sm:hover:shadow-[_-7px_7px_4px_rgb(0,0,0)] " placeholder="Enter your email"/>
                     <button type="sumbit" className="border py-1.5 px-2 sm:py-3 font-medium sm:px-6 text-lg sm:text-xl active:bg-black active:text-white active:border-black">Suscribe</button>
     
              </form>
           
           </div>
             
        </div>
        </>
    )
}