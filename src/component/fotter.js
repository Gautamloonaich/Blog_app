import Image from "next/image";
import logo from "../../public/assets/logo.png";
import facebook from "../../public/assets/facebook_icon.png";
import twitter from "../../public/assets/twitter_icon.png";
import google from "../../public/assets/googleplus_icon.png";
import Link from "next/link";

export function Fotter() {
  return (
    <>
      <div>
        <div className="text-white  bg-black mt-15 px-4 sm:px-7 lg:px-15 xl:px-30 py-7 flex flex-col sm:space-y-0 space-y-5 sm:flex-row items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              alt="blogger_logo"
              height={180}
              width={180}
              className=" w-[130px] sm:w-[120px] md:w-[180px] cursor-pointer"
            />
          </Link>
          <p className="text-gray-200 text-[15px] sm:text-lg text-center font-light sm:font-normal">
            All right reserved.Copyright @blogger
          </p>
          <div className=" flex ">
            <a href="https://www.facebook.com/" target="_blank">
              <Image
                src={facebook}
                alt="facebook"
                width={50}
                className=" w-[40px] sm:w-[40px] md:w-[50px] cursor-pointer "
              />
            </a>
            <a href="https://x.com/?lang=en-in" target="_blank">
              {" "}
              <Image
                src={twitter}
                alt="Twitter"
                height={50}
                width={50}
                className=" w-[40px] sm:w-[40px] md:w-[50px] cursor-pointer"
              />
            </a>
            <a href="https://www.google.com/" target="_blank">
              {" "}
              <Image
                src={google}
                alt="Google"
                height={50}
                width={50}
                className=" w-[40px] sm:w-[40px] md:w-[50px] cursor-pointer "
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
