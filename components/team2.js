import Reet from "@/public/reet.jpeg"
import Image from "next/image";
export default function TeamComponent2() {
  return (
    <div className="flex justify-center items-center grow p-14">
      <div class="gap-10 grid grid-cols-1 sm:grid-cols-4 overflow-y-auto h-[38rem] text-white grow p-3">
        {[...Array(7)].map((x, i) => (
          <div key={i} className="group w-64 h-64 relative text-center bg-slate-300 outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]">
            <h1 className="absolute text-xl bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-50%] group-hover:translate-y-[-90%] group-hover:scale-125 transition delay-75 cursor-default">Reetinder Singh</h1>
            <div className="absolute h-full w-full group-hover:bg-gradient-to-t from-red-600 via-transparent to-transparent"/>
            <Image alt="Team member" width={500} height={500} src={Reet} className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}


// [#FD3D48]