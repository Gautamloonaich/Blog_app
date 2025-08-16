"use client";
import Image from "next/image";
import { Button } from "@heroui/react";
import React from "react";
import { Input } from "@heroui/react";
import uploadarea from "../../public/assets/upload_area.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { Textarea } from "@heroui/react";

export function Productform() {
  let [descriptionval, setdescriptionval] = useState("");
  let [image, setimage] = useState(false);
  let [data, setdata] = useState({
    title: "",
    description: "",
    category: "",
    author: "Alex Bennett",
    authorImg: "/assets/profile_icon.png",
  });

  async function handleSumbit(e) {
    e.preventDefault();
    let responde = new FormData();
    responde.set("title", data.title);
    responde.set("description", data.description);
    responde.set("category", data.category);
    responde.set("author", data.author);
    responde.set("authorImg", data.authorImg);
    responde.set("image", image);
    let result = await fetch("/api_02/blog_api", {
      method: "POST",
      body: responde,
    });
    result = await result.json();
    if (result.success == true) {
      toast.success(result.msg);
      setdata({
        title: "",
        description: "",
        category: "",
        author: "Alex Bennett",
        authorImg: "/assets/profile_icon.png",
      });
      setdescriptionval("");
      setimage(false);
    } else {
      toast.error(result.msg);
    }
  }
  function handlechange(e, id) {
    if (id == 101) {
      data.title = e.target.value;
    } else if (id == 102) {
      data.description = e.target.value;
      setdescriptionval(e.target.value);
    } else {
      data.category = e.target.value;
    }

    setdata({ ...data });
  }

  return (
    <>
      <form
        onSubmit={handleSumbit}
        className="pl-4 py-7 pr-2  sm:pl-8 sm:pr-4 md:pl-15 lg:pl-22   "
      >
        <p className="text-xl sm:text-2xl font-medium  mb-4">
          upload thumbnail
        </p>
        <label htmlFor="upload">
          <Image
            src={image == false ? uploadarea : URL.createObjectURL(image)}
            width={150}
            height={150}
            alt="uploadarea"
            className="min-w-[130] sm:min-w-[150] "
          />
        </label>
        <input
          type="file"
          placeholder="upload file"
          required
          id="upload"
          className="border hidden "
          onChange={(e) => setimage(e.target.files[0])}
        />

        <p className="text-xl sm:text-2xl font-medium mt-7 mb-3">
          Title of Blog
        </p>
        <div className="  mb-5 mr-2 max-w-[300px] sm:max-w-[450px] md:max-w-[500px] ">
          <Input
            className="text-lg font-bold"
            type="text"
            isRequired
            id="101"
            variant="faded"
            value={data.title}
            label="Title"
            color="default"
            onChange={(e) => handlechange(e, "101")}
          />
        </div>

        <p className="text-xl sm:text-2xl font-medium mt-7 mb-3">
          Description of Blog
        </p>
        <div className="  mb-5 mr-2  max-w-[300px] sm:max-w-[450px] md:max-w-[500px] ">
          <Textarea
            type="textarea"
            id="102"
            label="Description"
            minRows={6}
            variant="faded"
            isRequired
            value={descriptionval}
            color="default"
            placeholder="Enter your description"
            className="text-lg font-bold   py-2 "
            isClearable
            onClear={() => setdescriptionval("")}
            onChange={(e) => handlechange(e, "102")}
          />
        </div>

        <p className="text-xl sm:text-2xl font-medium mt-5 mb-3">
          Catagery of Blog
        </p>
        <div className="flex flex-col max-w-[120px] gap-5">
          <select
            name="category"
            id="103"
            required
            value={data.category}
            className="border-2 border-gray-300 transition duration-200 mb-5 mt-2 hover:border-gray-400 bg-gray-100 rounded-lg w-[120px] p-2"
            onChange={(e) => handlechange(e, "103")}
          >
            <option value="">Select the Catagery</option>
            <option value="Startup">Startup</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Technology">Technology</option>
          </select>

          <Button
            type="submit"
            size="lg"
            variant="shadow"
            color="secondary"
            className=" w-[120px]"
          >
            sumbit
          </Button>
        </div>
      </form>
    </>
  );
}
