import Image from "next/image";
import bloglogo from "../../public/assets/logo_light.png"
import addicon from "../../public/assets/add_icon.png"
import blog_icon from "../../public/assets/blog_icon.png"
import email from "../../public/assets/email_icon.png"
import Link from "next/link";



export  function Commanlayout(){
    return(
        <>
        
            <div className="w-[35%] sm:w-[25%]    hidden md:flex md:flex-col border h-[100vh] fixed top-0 left-0   ">
              <div className="w-full flex  justify-center border-0 border-b-1  px-3 py-3 ">
                <Link href="/"><Image src={bloglogo} height={200} alt="logo" width={200} className=""/></Link> 
                </div>
                <div className="  h-[100vh] relative bg-zinc-50" >
                    <div className="  absolute right-0  top-15 bg-white w-[90%] lg:w-[80%]">
                    <Link href="/admin/add_new_product"><div className="border shadow-[-4px_4px_2px_rgb(0,0,0)]  hover:shadow-[-7px_7px_4px_rgb(0,0,0)]  flex justify-start  mt-5 items-center px-2 py-2 md:py-3 gap-1   ">
                        <Image src={addicon} height={30} alt="addicon"width={30} className="w-[20px] lg:w-[30px]"/>
                        <p className="text-md font-medium lg:text-lg xl:text-xl ">Add blogs</p>
                    </div></Link> 
                  <Link href="/admin/item_list">  <div className="border bg-white shadow-[-4px_4px_2px_rgb(0,0,0)] hover:shadow-[-7px_7px_4px_rgb(0,0,0)] flex justify-start  mt-8 items-center gap-1    px-2 py-2 md:py-3">
                        <Image src={blog_icon} height={30} alt="blogicon"  width={30} className="w-[20px] lg:w-[30px] "/>
                        <p className="text-md font-medium lg:text-lg xl:text-xl">Blog lists</p>
                    </div></Link>
                  <Link href="/admin/suscriptions"> <div className="border bg-white shadow-[-4px_4px_2px_rgb(0,0,0)] hover:shadow-[-7px_7px_4px_rgb(0,0,0)] flex justify-start  mt-8 items-center gap-1 px-2 py-2 md:py-3">
                        <Image src={email} height={30} width={30} alt="emailicon" className="w-[20px] lg:w-[30px]" />
                        <p className=" text-md font-medium lg:text-lg xl:text-xl">Suscriptions</p>
                    </div></Link> 

                </div>
                </div>
             </div>
        </>
    )
} 