import Image from "next/image";
import arrow from "../../public/assets/arrow.png";
import bloggerlogo from "../../public/assets/logo_light.png";
import { Fotter } from "./fotter";
import Link from "next/link";
import facebook from "../../public/assets/facebook_icon.png";
import google from "../../public/assets/googleplus_icon.png";
import twitter from "../../public/assets/twitter_icon.png";


export function Blog_item_details({title,pic,description,author_img,author}){
    return(<>
     <div className="">
        
            <div className="px-3 md:px-12 lg:px-30 bg-gray-200 pt-5 pb-25 sm:pb-28  ">
                <div className=" flex items-center justify-between ">
            <Link href ="/">     <Image className="bg-black w-[150px] sm:w-auto " src={bloggerlogo} alt="blogger_logo"  width={150}  /></Link> 
                     <button className="border  flex  justify-between items-center font-medium py-0  sm:py-2  px-1 sm:px-5 text-xl sm:text-2xl  gap-1 xs:gap-3 hover:ring-1 hover:ring-black  shadow-[_-4px_4px_2px_rgb(0,0,0)] sm:shadow-[_-4px_4px_2px_rgb(0,0,0)] hover:shadow-[_-7px_7px_4px_rgb(0,0,0)] sm:hover:shadow-[_-7px_7px_4px_rgb(0,0,0)] cursor-pointer">Get Start<Image className="my-2 sm:my-1" src={arrow} alt="arror" width={20} height={20}/></button>
                </div>
                <div className=" flex flex-col mt-12 sm:mt-14 md:mt-16 lg:mt-20 justify-center items-center space-y-10 sm:space-y-8  ">
                    <h1 className=" text-xl sm:text-[22px] md:text-[24px] lg:text-3xl   max-w-100 sm:max-w-120 md:max-w-150 lg:max-w-170 text-center font-medium   ">{title}</h1>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <Image src={author_img} height={30} width={50} className=" border-2 border-white rounded-full  h-[50px] w-[50px]"></Image>
                    <p className="text-sm sm:text-lg">{author}</p>
                    </div>
        
                </div>
            </div>
            <div className="flex items-center justify-center px-4 sm:px-5  mt-[-65px] sm:mt-[-95px]">
              <div className=" max-w-[800px] flex flex-col items-center justify-center">
                 <Image src={pic} alt="image"  width={800} height={800}  className=" w-[400px]  sm:w-[500px] md:w-[600px] lg:w-[700px]   xl:w-[800px]  border-3 border-white"/>
                 <div className="mx-4 flex flex-col items-start justify-center ">
                    <h1 className="text-xl font-medium mb-5">Introduction:</h1>
                 <p className="text-md font-light">{description}</p>
                 <h1 className="text-lg font-medium mb-3 mt-5">Step 1: Self-Reflection and Goal Setting:</h1>
                 <p className="text-md font-normal">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.
                      Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
                 
                  <h1 className="text-lg font-medium mb-3 mt-5">Step 2: Self-Reflection and Goal Setting:</h1>
                 <p className="text-md font-normal">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.
                        Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
 
                  <h1 className="text-lg font-medium mb-3 mt-5">Step 3: Self-Reflection and Goal Setting:</h1>
                 <p className="text-md font-normal">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.
                        Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
 
                <h1 className="text-lg font-medium mb-3 mt-5">Step 4: Self-Reflection and Goal Setting:</h1>
                 <p className="text-md font-normal">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.
                        Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
                         
                  <h1 className="text-lg font-medium mb-3 mt-5">Step 5: Self-Reflection and Goal Setting:</h1>
                 <p className="text-md font-normal">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.
                        Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
 
                  <h1 className="text-lg font-medium mb-3 mt-5">Step 6: Self-Reflection and Goal Setting:</h1>
                   <p className="text-md font-normal">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.
                    Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
 

                <h1 className="mt-10 sm:mt-20 font-bold">Share this article on social media</h1>
                  <div className=" flex  mt-1 sm:mt-4 space-x-0 sm:space-x-1.5">
           <a href="https://www.facebook.com/"  target="_blank"><Image  src={facebook} alt="facebook"  width={50} className=" w-[40px] sm:w-[40px] md:w-[50px] cursor-pointer "/></a> 
            <a href="https://x.com/?lang=en-in"  target="_blank">    <Image  src={twitter} alt="Twitter" height={50} width={50} className=" w-[40px] sm:w-[40px] md:w-[50px] cursor-pointer"/></a>
              <a href="https://www.google.com/"  target="_blank">   <Image  src={google} alt="Google" height={50} width={50} className=" w-[40px] sm:w-[40px] md:w-[50px] cursor-pointer "/></a>
             </div>


                 </div>

             

              </div>
            </div>
            <Fotter/>
        
     </div>
    </>)
}