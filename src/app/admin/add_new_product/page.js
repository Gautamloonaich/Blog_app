import { Productform } from "@/component/add_product";
import Addnavbar from "@/navbars/comman_navbar";

export default function Addproduct() {
  return (
    <div className="ml-0  md:ml-50 lg:ml-70 xl:ml-100 overflow-x-hidden">
      <div className="pl-0 sm:pl-8 md:pl-15 lg:pl-17 sm:pr-8 ">
        <Addnavbar AddBlog="Add Blogs" />
      </div>
      <h1 className="text-center my-3 font-medium  text-2xl block md:hidden">
        Add Blog
      </h1>
      <Productform />
    </div>
  );
}
