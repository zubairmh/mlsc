import Reet from "@/public/reet.jpeg";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Separator } from "./ui/separator";
import { Phone } from "lucide-react";
import {BsTelephoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
const inter = Inter({ weight: "700", subsets: ["latin"] });
export default function TeamComponent2() {
  const secretaries = [
    {
      name: "Parag Goyal",
      icon: "/parag.jpeg",
      position: "General Secretary",
    },
    {
      name: "Madhav Galhotra",
      icon: "/madhav.jpg",
      position: "Joint Secretary",
    },
    {
      name: "Armeen Kaur Luthra ",
      icon: "/armeen.jpg",
      position: "Joint Secretary",
    },
  ];
  const management = [
    {
      name: "Harshita ",
      icon: "/harshita.jpeg",
      position: "Management Head",
    },
    {
      name: "Navish Goyal",
      icon: "/navish.png",
      position: "Vice Management Head",
    },
    {
      name: "Manav Singhal",
      icon: "/manav.jpeg",
      position: "Vice Management Head",
    },
  ];
  const tech = [
    {
      name: "Zubair Mohammed",
      icon: "/zubair.jpeg",
      position: "Technical Head",
    },
    {
      name: "Reetinder Singh",
      icon: "/reet.jpeg",
      position: "Vice Technical Head",
    },
  ];
  const design = [
    {
      name: "Saiyam Singhi",
      icon: "/saiyam.jpeg",
      position: "Design Head",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center grow pt-14">
      <div style={inter.style} class="text-3xl text-white mb-4">
        Meet our Team
      </div>
      <Separator />

      <div class="flex flex-col gap-4 overflow-y-auto ml-4 h-[33rem] text-white grow p-4">
        <h1 className={`text-start ${inter.className} text-2xl self-start`}>
          Our Mentors
        </h1>
        <div className="flex flex-col gap-1 w-full p-4 text-black bg-white outline-none outline-offset-4 outline-4">
          <h1 style={inter.style} className="text-3xl">Dr. Pankaj Narula</h1>
          <span className="flex flex-row items-center gap-2"><BsTelephoneFill size={24}/><span>+91 98822 42222</span></span>
          <button onClick={()=>window.open("mailto:pankaj.narula@thapar.edu", "_blank")} className="flex flex-row items-center gap-2"><AiOutlineMail size={24}/><span>pankaj.narula@thapar.edu</span></button>
          <p>Dr Pankaj Narula is working as an Assistant Professor in the School of Mathematics (SOM), Thapar Institute of Engineering & Technology (TIET), Patiala. He received his Master&apos;s degree in Mathematics (M.Sc.) from Panjab University, Chandigarh in 2009 and Doctor of Philosophy (PhD) in Applied Mathematics from Indian Institute of Technology Mandi (HP) in 2018. He is also our mentor and president of Microsoft Learn Student Chapter, TIET Derabassi</p>
        </div>
        <h1 className={`text-start ${inter.className} text-2xl self-start`}>
          Secretaries
        </h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center sm:justify-items-start">
          {secretaries.map((x, i) => (
            <div
              key={i}
              className="group w-64 h-64 relative text-center bg-slate-300 outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]"
            >
              <h1
                style={inter.style}
                className="absolute text-xl bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-50%] group-hover:translate-y-[-110%] group-hover:scale-125 transition delay-75 cursor-default bg-black group-hover:bg-transparent"
              >
                {x.name}
              </h1>
              <h4 className="absolute text-md bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-10%] group-hover:translate-y-[-30%] group-hover:scale-125 opacity-0 group-hover:opacity-100 transition delay-75 text-gray-100 cursor-default">
                {x.position}
              </h4>
              <div className="absolute h-full w-full group-hover:bg-gradient-to-t from-red-600 via-transparent to-transparent" />
              <Image
                alt="Team member"
                width={500}
                height={500}
                src={x.icon}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
        <h1 className={`text-start ${inter.className} text-2xl self-start`}>
          Tech Team
        </h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center sm:justify-items-start">
          {tech.map((x, i) => (
            <div
              key={i}
              className="group w-64 h-64 relative text-center bg-slate-300 outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]"
            >
              <h1
                style={inter.style}
                className="absolute text-xl bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-50%] group-hover:translate-y-[-110%] group-hover:scale-125 transition delay-75 cursor-default bg-black group-hover:bg-transparent"
              >
                {x.name}
              </h1>
              <h4 className="absolute text-md bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-10%] group-hover:translate-y-[-30%] group-hover:scale-125 opacity-0 group-hover:opacity-100 transition delay-75 text-gray-100 cursor-default">
                {x.position}
              </h4>
              <div className="absolute h-full w-full group-hover:bg-gradient-to-t from-red-600 via-transparent to-transparent" />
              <Image
                alt="Team member"
                width={500}
                height={500}
                src={x.icon}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
        <h1 className={`text-start ${inter.className} text-2xl self-start`}>
          Management Team
        </h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center sm:justify-items-start">
          {management.map((x, i) => (
            <div
              key={i}
              className="group w-64 h-64 relative text-center bg-slate-300 outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]"
            >
              <h1
                style={inter.style}
                className="absolute text-xl bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-50%] group-hover:translate-y-[-110%] group-hover:scale-125 transition delay-75 cursor-default bg-black group-hover:bg-transparent"
              >
                {x.name}
              </h1>
              <h4 className="absolute text-md bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-10%] group-hover:translate-y-[-30%] group-hover:scale-125 opacity-0 group-hover:opacity-100 transition delay-75 text-gray-100 cursor-default">
                {x.position}
              </h4>
              <div className="absolute h-full w-full group-hover:bg-gradient-to-t from-red-600 via-transparent to-transparent" />
              <Image
                alt="Team member"
                width={500}
                height={500}
                src={x.icon}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
        <h1 className={`text-start ${inter.className} text-2xl self-start`}>
          Design Team
        </h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center sm:justify-items-start">
          {design.map((x, i) => (
            <div
              key={i}
              className="group w-64 h-64 relative text-center bg-slate-300 outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]"
            >
              <h1
                style={inter.style}
                className="absolute text-xl bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-50%] group-hover:translate-y-[-110%] group-hover:scale-125 transition delay-75 cursor-default bg-black group-hover:bg-transparent"
              >
                {x.name}
              </h1>
              <h4 className="absolute text-md bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-10%] group-hover:translate-y-[-30%] group-hover:scale-125 opacity-0 group-hover:opacity-100 transition delay-75 text-gray-100 cursor-default">
                {x.position}
              </h4>
              <div className="absolute h-full w-full group-hover:bg-gradient-to-t from-red-600 via-transparent to-transparent" />
              <Image
                alt="Team member"
                width={500}
                height={500}
                src={x.icon}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// [#FD3D48]
