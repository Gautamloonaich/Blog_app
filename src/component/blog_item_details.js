"use client";
import Image from "next/image";
import arrow from "../../public/assets/arrow.png";
import bloggerlogo from "../../public/assets/logo_gray_darker.png";
import { Fotter } from "./fotter";
import Link from "next/link";
import facebook from "../../public/assets/facebook_icon.png";
import google from "../../public/assets/googleplus_icon.png";
import twitter from "../../public/assets/twitter_icon.png";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar,
} from "@heroui/react";

export function Blog_item_details({
  title,
  pic,
  description,
  author_img,
  author,
}) {
  let route = useRouter();
  return (
    <div className="">
      <div className="px-3 md:px-12 lg:px-30 bg-gray-200 pt-5 pb-25 sm:pb-28  ">
        <div className=" flex items-center justify-between bg-gray-200  ">
          <Navbar shouldHideOnScroll className="mx-0 px-0 bg-gray-200">
            <NavbarBrand>
              <Link href="/">
                {" "}
                <Image
                  className="bg-black w-[130px] sm:w-auto "
                  src={bloggerlogo}
                  alt="blogger_logo"
                  width={150}
                />
              </Link>
            </NavbarBrand>

            <NavbarContent justify="end ">
              <NavbarItem>
                <Button
                  size="lg"
                  color="default"
                  variant="bordered"
                  radius="sm"
                  className=" font-normal bg-white py-0 shadow-[_-4px_4px_7px_rgb(128,128,128)] sm:shadow-[_-4px_4px_7px_rgb(128,128,128)] sm:py-2 px-1  sm:px-5 text-lg sm:text-2xl hover:shadow-[_-4px_4px_9px_rgb(128,128,128)] sm:hover:shadow-[_-4px_4px_9px_rgb(128,128,128)] gap-1 xs:gap-3  cursor-pointer"
                  as={Link}
                  endContent={
                    <Image
                      className="my-0 ml-0 sm:ml-1 sm:my-1 w-[15px] sm:w-[20px]"
                      src={arrow}
                      alt="arror"
                      width={20}
                      height={20}
                    />
                  }
                  href="/admin"
                >
                  Get Start{" "}
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </div>
        <div className=" flex flex-col mt-12 sm:mt-14 md:mt-16 lg:mt-20 justify-center items-center space-y-10 sm:space-y-8  ">
          <h1 className=" text-xl sm:text-[22px] md:text-[24px] lg:text-3xl   max-w-100 sm:max-w-120 md:max-w-150 lg:max-w-170 text-center font-medium   ">
            {title}
          </h1>
          <div className="flex flex-col justify-center items-center space-y-2">
            <Avatar
              src={author_img}
              height={30}
              width={50}
              alt="authorimg"
              isBordered
              size="lg"
              className="   h-[50px] w-[50px]"
            ></Avatar>
            <p className="text-sm sm:text-lg">{author}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 sm:px-5  mt-[-65px] sm:mt-[-95px]">
        <div className=" max-w-[800px] flex flex-col items-center justify-center">
          <Image
            src={pic}
            alt="image"
            width={800}
            height={800}
            className=" w-[400px]  sm:w-[500px] md:w-[600px] lg:w-[700px]   xl:w-[800px]  border-3 border-white"
          />
          <div className="mx-4 flex flex-col items-start justify-center ">
            <h1 className="text-xl font-medium mb-5">Introduction:</h1>
            <p className="text-md font-light">{description}</p>

            <h1 className="text-red-700 font-light text-lg  mt-25">
              This is sample content for testing purposes only. please ignore.{" "}
            </h1>
            <h1 className="text-lg font-medium mb-3 mt-5">
              Step 1: Self-Reflection and Goal Setting:
            </h1>
            <p className="text-md font-normal">
              Before you can manage your lifestyle, you must have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals. Before you can
              manage your lifestyle, you must have a clear understanding of what
              you want to achieve. Start by reflecting on your values,
              aspirations, and long-term goals.
            </p>

            <h1 className="text-lg font-medium mb-3 mt-5">
              Step 2: Self-Reflection and Goal Setting:
            </h1>
            <p className="text-md font-normal">
              Before you can manage your lifestyle, you must have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals. Before you can
              manage your lifestyle, you must have a clear understanding of what
              you want to achieve. Start by reflecting on your values,
              aspirations, and long-term goals.
            </p>

            <h1 className="text-lg font-medium mb-3 mt-5">
              Step 3: Self-Reflection and Goal Setting:
            </h1>
            <p className="text-md font-normal">
              Before you can manage your lifestyle, you must have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals. Before you can
              manage your lifestyle, you must have a clear understanding of what
              you want to achieve. Start by reflecting on your values,
              aspirations, and long-term goals.
            </p>

            <h1 className="text-lg font-medium mb-3 mt-5">
              Step 4: Self-Reflection and Goal Setting:
            </h1>
            <p className="text-md font-normal">
              Before you can manage your lifestyle, you must have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals. Before you can
              manage your lifestyle, you must have a clear understanding of what
              you want to achieve. Start by reflecting on your values,
              aspirations, and long-term goals.
            </p>

            <h1 className="text-lg font-medium mb-3 mt-5">
              Step 5: Self-Reflection and Goal Setting:
            </h1>
            <p className="text-md font-normal">
              Before you can manage your lifestyle, you must have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals. Before you can
              manage your lifestyle, you must have a clear understanding of what
              you want to achieve. Start by reflecting on your values,
              aspirations, and long-term goals.
            </p>

            <h1 className="text-lg font-medium mb-3 mt-5">
              Step 6: Self-Reflection and Goal Setting:
            </h1>
            <p className="text-md font-normal">
              Before you can manage your lifestyle, you must have a clear
              understanding of what you want to achieve. Start by reflecting on
              your values, aspirations, and long-term goals. Before you can
              manage your lifestyle, you must have a clear understanding of what
              you want to achieve. Start by reflecting on your values,
              aspirations, and long-term goals.
            </p>

            <h1 className="mt-10 sm:mt-20 font-bold">
              Share this article on social media
            </h1>
            <div className=" flex  mt-1 sm:mt-4 space-x-0 sm:space-x-1.5">
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
      </div>
      <Fotter />
    </div>
  );
}
