import { Commanlayout } from "@/component/comman_layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen ">
      <div className="flex ">
        <ToastContainer theme="dark" />
        <Commanlayout />
        <div className=" w-[100%] ">{children}</div>
      </div>
    </div>
  );
}
