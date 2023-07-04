import Reet from "@/public/reet.jpeg"
import Image from "next/image";
import { Inter } from "next/font/google";
import { Separator } from "./ui/separator";

const inter = Inter({ weight: "700", subsets: ["latin"] });
export default function TeamComponent2() {
  const members=[{
    name:"Parag Goyal",
    icon:"/parag.jpeg",
    position:"General Secretary"
  },
  {
    name:"Madhav Galhotra",
    icon:"/madhav.jpg",
    position:"Joint Secretary"
  },
  {
    name:"Armeen Kaur Luthra ",
    icon:"/armeen.jpg",
    position:"Joint Secretary"
  },
  {
    name:"Harshita ",
    icon:"/harshita.jpeg",
    position:"Management Head"
  },
  {
    name:"Zubair Mohammed",
    icon:"/zubair.jpeg",
    position:"Technical Head"
  },
  {
    name:"Saiyam Singhi",
    icon:"/saiyam.jpeg",
    position:"Design Head"
  },
  {
    name:"Reetinder Singh",
    icon:"/reet.jpeg",
    position:"Vice Technical Head"
  },
  {
    name:"Navish Goyal",
    icon:"/navish.png",
    position:"Vice Management Head"
  },
  {
    name:"Manav Singhal",
    icon:"/placeholder.png",
    position:"Vice Management Head"
  },
];
  return (
    <div className="flex flex-col justify-center items-center grow pt-14">
      <div style={inter.style} class="text-3xl text-white mb-4">
        Meet our Team
      </div>
      <Separator/>
      <div class="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-auto ml-4 h-[33rem] text-white grow p-4">
        {members.map((x, i) => (
          <div key={i} className="group w-64 h-64 relative text-center bg-slate-300 outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]">
            <h1 style={inter.style} className="absolute text-xl bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-50%] group-hover:translate-y-[-110%] group-hover:scale-125 transition delay-75 cursor-default bg-black group-hover:bg-transparent">{x.name}</h1>
            <h4 className="absolute text-md bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-10%] group-hover:translate-y-[-30%] group-hover:scale-125 opacity-0 group-hover:opacity-100 transition delay-75 text-gray-100 cursor-default">{x.position}</h4>
            <div className="absolute h-full w-full group-hover:bg-gradient-to-t from-red-600 via-transparent to-transparent"/>
            <Image alt="Team member" width={500} height={500} src={x.icon} className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}


// [#FD3D48]