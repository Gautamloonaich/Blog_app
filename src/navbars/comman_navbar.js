"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  Link,
} from "@heroui/react";
import Image from "next/image";
import { Avatar } from "@heroui/react";
import bloglogo from "../../public/assets/logo_light.png";
import React, { useEffect, useState } from "react";

export default function Addnavbar({
  AddBlog,
  itemList,
  suscription,
  Adminblock,
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [props2, setprops2] = useState("");

  useEffect(() => {
    if (AddBlog) {
      setprops2(AddBlog);
    } else if (itemList) {
      setprops2(itemList);
    } else if (Adminblock) {
      setprops2(Adminblock);
    } else {
      setprops2(suscription);
    }
  }, [AddBlog, itemList, Adminblock, suscription]);

  const menuItems = ["add_new_product", "item_list", "suscriptions"];
  return (
    <Navbar disableAnimation isBordered height={84}>
      <NavbarContent className="block md:hidden text-sm" justify="start">
        <NavbarMenuToggle
          className="text-sm"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="md:hidden pr-3" justify="start">
        <NavbarBrand>
          <Link href="/">
            {" "}
            <Image
              src={bloglogo}
              alt="logo"
              height={200}
              width={200}
              className="md:min-w-[150px] min-w-[130px]"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-xl ">{props2}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <Avatar isBordered src={"/assets/profile_icon.png"} size="sm" />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="def"
              href={`/admin/${item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
