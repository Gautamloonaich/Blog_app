
import Image from "next/image";
import arrow from "../../public/assets/arrow.png"
import Link from "next/link";

export function Blogitem({pic,id,category,title,description}){
    return(
        <>
        <div className=" max-w-[350px] border hover:ring-2  shadow-[_-3px_3px_4px_rgb(0,0,0)] sm:shadow-[_-5px_5px_2px_rgb(0,0,0)] hover:shadow-[_-7px_7px_4px_rgb(0,0,0)] sm:hover:shadow-[_-8px_8px_4px_rgb(0,0,0)] ">
          <Link href={"/blog/"+id}>  <Image src={pic} alt="image" width={350} height={350} className="cursor-pointer"/> </Link>
            <div className="p-4 space-y-4">
                <span className="text-white bg-black px-1 flex items-center justify-center w-fit pb-0.5">{category}</span>
                <h1 className=" text-[18px] sm:text-[25px] leading-tight font-medium ">{title}</h1>
                <p className="text-md font-light leading-tight">{description.slice(0,130)}</p>
               <Link href={"/blog/"+id}> <button className=" font-normal flex justify-around items-center gap-2 hover:font-medium cursor-pointer">
                           Read more <Image className="pt-1" alt="arrow" width={15} src={arrow}/>
                </button></Link>

               
            </div>

        </div>
     
        </>
    )
}