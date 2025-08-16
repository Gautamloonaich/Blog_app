"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@heroui/react";
import Loader from "@/loader";

export function Suscription() {
  let [emaildata, setmaildata] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getdata() {
    let response = await fetch("/api_02/email_api", { cache: "no-store" });
    response = await response.json();
    if (Array.isArray(response.result)) {
      setmaildata(response.result);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }
  useEffect(() => {
    getdata();
  }, []);
  async function handledelet(id) {
    let response = await fetch("/api_02/email_api/" + id, {
      method: "DELETE",
    });
    response = await response.json();

    if (response.success == true) {
      toast.success(response.result);
      getdata();
    } else {
      toast.error(response.result);
    }
  }

  return (
    <div className="w-full  px-4 sm:px-7 md:px-7 lg:px-15 py-8 sm:py-10 space-y-5  ">
      <div className="w-full overflow-x-auto ">
        <table className="w-full  border-separate  border-spacing-y-5 ">
          <thead className="w-full  bg-zinc-50  shadow-md inset-shadow-zinc-200 ">
            <tr className="text-left uppercase  [&>*]:py-7 [&>*]:text-sm [&>*]:md:text-md [&>*]:lg:text-lg">
              <th className=" px-12 text-center"> Suscribied mail</th>
              <th className="px-3 sm:px-5  md:px-8 lg:px-10 xl:px-12"> Date</th>
              <th className="text-center px-12"> Unsuscribe</th>
            </tr>
          </thead>
          {loading === false ? (
            emaildata.map((item) => {
              return (
                <tbody key={item._id} className="w-full border ">
                  <tr className="text-left lowercase shadow-sm shadow-gray-400  hover:shadow-gray-500  [&>*]:py-6 [&>*]:text-sm [&>*]:md:text-md [&>*]:lg:text-lg">
                    <td className=" font-normal px-3 sm:px-5 md:px-9  lg:px-12 xl:px-18  ">
                      {" "}
                      {item.email.length > 0 ? (
                        item.email
                      ) : (
                        <h1 className="text-red-600">Unknown Mail-id</h1>
                      )}
                    </td>
                    <td className=" font-light px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12 ">
                      {new Date(Date.now()).toDateString()}
                    </td>
                    <td className=" font-light  text-center">
                      {" "}
                      <Button
                        color="primary"
                        variant="ghost"
                        className=" px-2 py-1 md:px-3 md:py-2 text-center text-sm font-medium cursor-pointer"
                        onClick={() => handledelet(item._id)}
                      >
                        Unsuscribe
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <tbody>
              <tr>
                <td className=" text-lg md:text-xl font-light  text-center mt-5">
                  <Loader />
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
