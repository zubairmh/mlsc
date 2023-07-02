import Reet from "@/public/reet.jpeg"
import Image from "next/image";
import { Inter } from "next/font/google";
import { Separator } from "./ui/separator";

const inter = Inter({ weight: "700", subsets: ["latin"] });
export default function TeamComponent2() {
  return (
    <div className="flex flex-col justify-center items-center grow p-14">
      <div style={inter.style} class="text-3xl text-white mb-4">
        Meet our Team
      </div>
      <Separator/>
      <div class="gap-10 grid grid-cols-1 sm:grid-cols-4 overflow-y-auto ml-4 h-[38rem] text-white grow p-3">
        {[...Array(7)].map((x, i) => (
          <div key={i} className="group w-64 h-64 relative text-center bg-slate-300 outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]">
            <h1 style={inter.style} className="absolute text-xl bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-50%] group-hover:translate-y-[-110%] group-hover:scale-125 transition delay-75 cursor-default">Reetinder Singh</h1>
            <h4 className="absolute text-md bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-10%] group-hover:translate-y-[-30%] group-hover:scale-125 opacity-0 group-hover:opacity-100 transition delay-75 text-gray-200 cursor-default">General Secretary</h4>
            <div className="absolute h-full w-full group-hover:bg-gradient-to-t from-red-600 via-transparent to-transparent"/>
            <Image alt="Team member" width={500} height={500} src={Reet} className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}


// [#FD3D48]