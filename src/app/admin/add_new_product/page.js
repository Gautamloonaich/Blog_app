import Image from "next/image";
import bloglogo from "../../../../public/assets/logo_light.png"
import author from "../../../../public/assets/profile_icon.png"
import { Productform } from "@/component/add_product";

export default function Addproduct(){
    return(
        <div className="">
          <ul  className="flex items-center justify-between py-6 sm:py-5 px-2 xs:px-5 sm:px-7 w-[100%] sm:w-[100%]  ">
            <li className=" hidden md:block sm:text-2xl  md:text-3xl  lg:text-3xl font-bold md:font-medium order-2 md:order-1"> Add Blog</li>        
            <li className="block md:hidden order-1 md:order-2"> <Image src={bloglogo} alt="logo"  height={200} width={200} className="sm:w-[200px] w-[170px]" /></li>
            <li className="order-3 md:order-3"> <Image src={author} alt="author" height={50} width={50} className=""/></li>       
           </ul>
           <h1 className="text-center my-3 font-medium  text-2xl block md:hidden">Add Blog</h1>
           <Productform />       

      </div>
    )
}