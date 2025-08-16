import Addnavbar from "@/navbars/comman_navbar";

export default function Adminblog() {
  return (
    <>
      <div className="ml-0  md:ml-63 lg:ml-80 xl:ml-100 overflow-hidden">
        <div className="pl-0 sm:pl-8 md:pl-15 lg:pl-17 sm:pr-8 ">
          <Addnavbar Adminblock="Admin Block" />
        </div>
        <h1 className="text-center my-3 text-2xl font-bold block md:hidden">
          Admin Home Page
        </h1>
        <h1 className="text-center text-4xl font-bold hidden md:block mt-15 ">
          Admin Home Page
        </h1>
        <h1 className="p-5 mt-5 text-center text-xl md:text-4xl font-medium md:font-bold block md:hidden text-blue-500">
          Click on Controlled Menu to explor more about Blogs{" "}
        </h1>
      </div>
    </>
  );
}
