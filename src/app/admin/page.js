import Image from "next/image";
import Link from "next/link";
import bloglogo from "../../../public/assets/logo_light.png"
import author from "../../../public/assets/profile_icon.png"

export default function Adminblog(){
    return(
        <>
        <div className="ml-0  md:ml-63 lg:ml-80 xl:ml-100 overflow-hidden">
       <ul  className="flex items-center justify-between py-6 sm:py-5 px-2  xs:px-5 sm:px-7 w-[100%] sm:w-[100%]   ">
            <li className=" hidden md:block sm:text-2xl  md:text-3xl  lg:text-3xl font-bold md:font-medium order:2 md:order:1 pl-3"> Admin Blog</li>        
            <Link href="/"><li className=" order:1 md:order:2 block md:hidden"> <Image src={bloglogo} alt="logo"  height={200} width={200} className="sm:w-[200px] w-[170px]" /></li></Link>
            <li className="order:3 md:order:3"> <Image src={author} alt="author" height={50} width={50} className=""/></li>       
         </ul>
           <h1 className="text-center text-4xl font-bold hidden md:block mt-15 ">Admin Home Page</h1>
           <h1 className="p-5 mt-5 text-center text-xl md:text-4xl font-medium md:font-bold block md:hidden">Admin Home Page click on Three Line to explor more about blog </h1>

   </div>
        </>
    )
}