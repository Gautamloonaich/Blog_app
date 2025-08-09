import { Commanlayout } from "@/component/comman_layout";

export default function Layout({children}){
    return (
        
  <div className="flex  ">
          <Commanlayout/>
   <div className="w-[100%] ">
      {children}
      </div>
        </div>
    )
}