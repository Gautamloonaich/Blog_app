"use client";
import Image from "next/image";
import bloggerlogo from "../../public/assets/logo_light.png";
import arrow from "../../public/assets/arrow.png";
import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

export default function Header() {
  const [mail, setmail] = useState("");

  async function handlesumbit(e) {
    try {
      e.preventDefault();
      let data = new FormData();
      data.set("email", mail);
      let response = await fetch("/api_02/email_api", {
        method: "POST",
        body: data,
      });

      response = await response.json();
      if (response.success == true) {
        toast.success(response.result);
        setmail(" ");
      }
    } catch (err) {
      toast.error(response.result);
    }
  }
  return (
    <>
      <div className="px-0 md:px-12 lg:px-30 pt-5  ">
        <div className=" flex items-center justify-between   ">
          <Navbar shouldHideOnScroll className="mx-0 px-0">
            <NavbarBrand>
              <Image
                className="bg-black w-[130px] sm:w-auto "
                src={bloggerlogo}
                alt="blogger_logo"
                width={150}
              />
            </NavbarBrand>

            <NavbarContent justify="end ">
              <NavbarItem>
                <Button
                  size="lg"
                  color="default"
                  variant="ghost"
                  radius="sm"
                  className=" font-normal py-0 shadow-[_-4px_4px_7px_rgb(128,128,128)] sm:shadow-[_-4px_4px_7px_rgb(128,128,128)] sm:py-2 px-1  sm:px-5 text-lg sm:text-2xl hover:shadow-[_-4px_4px_9px_rgb(128,128,128)] sm:hover:shadow-[_-4px_4px_9px_rgb(128,128,128)] gap-1 xs:gap-3  cursor-pointer"
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

        <div className="flex flex-col justify-center  space-y-5 sm:space-y-10 p-3 mt-5 md:mt-7 items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold">
            Latest Blogs
          </h1>
          <div className="text-center px-3 sm:px-10  lg:px-15 xl:px-40  text-md md:text-xl  font-light">
            <p className="mb-1 sm:mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
              dummy text ever.
            </p>
          </div>

          <form
            onSubmit={handlesumbit}
            className=" ring-1 ring-blue-200 flex  items-center justify-center  shadow-[_-3px_3px_2px_rgb(173,216,230)] sm:shadow-[_-4px_4px_7px_rgb(173,216,230)]  "
          >
            <input
              onChange={(e) => setmail(e.target.value)}
              required
              value={mail}
              type="email"
              className="    outline-0 text-lg sm:text-xl py-1.5 sm:py-3 px-2 sm:px-4 min-w-30 sm:min-w-95 hover:shadow-[_-5px_5px_7px_rgb(173,216,230)] sm:hover:shadow-[_-5px_5px_7px_rgb(173,216,230)] "
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              radius="none"
              size="2xl"
              color="primary"
              variant="flat"
              className="  py-1.5 px-2 sm:py-3 font-medium sm:px-6 text-lg sm:text-xl  active:text-black "
            >
              Suscribe
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
