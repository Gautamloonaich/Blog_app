import { Suscription } from "@/component/Suscription_emails";
import Addnavbar from "@/navbars/comman_navbar";

export default function Suscription_id() {
  return (
    <div className="ml-0  md:ml-63 lg:ml-75 xl:ml-100  2xl:ml-110">
      <div className="pl-0 sm:pl-8 md:pl-11 lg:pl-17 sm:pr-8 ">
        <Addnavbar suscription="Suscribed Gmails" />
      </div>
      <h1 className="text-center my-3 font-medium  text-2xl block md:hidden">
        All Suscriptions
      </h1>
      <Suscription />
    </div>
  );
}
