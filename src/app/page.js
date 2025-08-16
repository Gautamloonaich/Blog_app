import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BlogList } from "@/component/blog_items_list";
import Header from "../component/headerpart";
import { Fotter } from "../component/fotter";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
      <Fotter />
    </>
  );
}
