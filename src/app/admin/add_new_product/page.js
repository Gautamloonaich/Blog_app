import Image from "next/image";
import bloglogo from "../../../../public/assets/logo_light.png"
import author from "../../../../public/assets/profile_icon.png"
export default function Addproduct(){
    return(
        <>
        <ul  className="flex items-center justify-between py-6 sm:py-5 px-2 xs:px-5 sm:px-7  ">
                       <li className=" hidden sm:block sm:text-2xl  md:text-3xl  lg:text-3xl font-bold md:font-medium order-2 md:order-1"> Add Item</li>        
                       <li className="block md:hidden order-1 md:order-2"> <Image src={bloglogo} alt="logo"  height={140} width={140} className="sm:w-[140px] w-[110px]" /></li>
                       <li className="order-3 md:order-3"> <Image src={author} alt="author" height={50} width={50} className="w-[30px] md:w-[40px] lg:w-[50px]"/></li>
       
                      </ul>
                   

      </>
    )
}