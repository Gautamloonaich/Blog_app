import { Items } from "@/component/item_list";
import Addnavbar from "@/navbars/comman_navbar";

export default function Itemlist() {
  return (
    <div className="ml-0 md:ml-55 lg:ml-70 xl:ml-100  ">
      <div className="pl-0 sm:pl-8 md:pl-15 lg:pl-17 sm:pr-8 ">
        <Addnavbar itemList="Blog List" />
      </div>
      <h1 className="text-center my-4 font-bold  text-2xl block md:hidden">
        Blog List
      </h1>
      <Items />
    </div>
  );
}
