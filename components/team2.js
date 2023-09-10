import Reet from "@/public/reet.jpeg";
import ment from "@/public/pankajnarula.jpg";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Separator } from "./ui/separator";
import { Phone } from "lucide-react";
import { BsTelephoneFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link"
const inter = Inter({ weight: "700", subsets: ["latin"] });
const inter2 = Inter({ weight: "600", subsets: ["latin"] });
const inter3 = Inter({ weight: "500", subsets: ["latin"] });
export default function TeamComponent2() {
  const secretaries = [
    {
      name: "Parag Goyal",
      icon: "/parag.jpg",
      position: "General Secretary",
    },
    {
      name: "Madhav Galhotra",
      icon: "/madhav.jpg",
      position: "Joint Secretary",
    },
    
  ];
  const management = [
    {
      name : "Anubha Kapur",
      icon : "/anubha.jpg",
      position: "Marketing Head",
    },
    {
      name: "Harshita ",
      icon: "/harshita.jpeg",
      position: "Management Head",
    },
    {
      name: "Manav Singhal",
      icon: "/manav.jpeg",
      position: "Vice Management Head",
    },
    
    {
      name: "Preetinder",
      icon: "/preetinder.png",
      position: "Management Team",
    },
    
  ];
  const tech = [
    {
      name: "Zubair Mohammed",
      icon: "/zubair.jpg",
      position: "Technical Head",
    },
    {
      name: "Rachancheet Singh",
      icon: "/rachan.jpg",
      position: "Technical Head",
    },
    {
      name: "Reetinder Singh",
      icon: "/reet1.jpg",
      position: "Vice Technical Head",
    },
    {
      name: "Arshdeep Palial",
      icon: "/arshdeep.jpeg",
      position: "Vice Technical Head",
    },
    {
      name: "Dhawal",
      icon: "/dhawal.jpg",
      position: "Tech Team",
    },
    {
      name: "Kunal Bhalla",
      icon: "/kunal.jpg",
      position: "Tech Team",
    },
  ];
  const design = [
    {
      name: "Jatin Aggarwal",
      icon: "/jatin.jpg",
      position: "Design Head",
    },
    {
      name: "Raj Chaudhary",
      icon: "/raj.jpg",
      position: "Vice Design Head",
    },
    {
      name: "Saiyam Singhi",
      icon: "/saiyam.jpeg",
      position: "Design Member",
    },
    {
      name: "Simran",
      icon: "/simran.jpg",
      position: "Design Member",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center grow pt-14">
      <div style={inter.style} class="text-3xl text-white mb-4">
        Meet our Team
      </div>
      <Separator />

      <div class="flex flex-col gap-4 overflow-y-auto ml-4 h-[33rem] text-white grow p-4">
        <h1 className={`text-start ${inter.className} text-4xl self-center md:self-start`}>
          Our Mentors
        </h1>
        <div className="sm:flex-row items-center sm:items-start flex-col flex text-black bg-white rounded-lg drop-shadow-xl  ">
          <Image src={ment} width="350" alt="" className=" drop-shadow-xl" />
          <div className="flex flex-col w-full p-4 outline-none outline-offset-4 outline-4 gap-2 grow">
            <h1 style={inter.style} className="text-3xl">
              Dr. Pankaj Narula
            </h1>
            <h1 style={inter2.style} className="text-xl">
              Assistant Professor
            </h1>
            <h1 style={inter3.style} className="text-base text-gray-600">
              School of Mathematics
            </h1>
            <h1 style={inter3.style} className="text-base text-gray-600">
              Thapar Institute of Engineering and Technology
            </h1>
            <h1 style={inter3.style} className="text-base text-gray-600">
              (Deemed to be University)
            </h1>
            <Link href="mailto:pankaj.narula@thapar.edu" target="_blank"
              className="flex flex-row items-center gap-1"
            >
              <HiOutlineMail size={24} />
              <span className="text-base">pankaj.narula@thapar.edu</span>
            </Link>
          </div>
        </div>

        <h1 className={`text-start ${inter.className} text-4xl mt-10 self-center md:self-start`}>
          👨‍⚖️ Secretaries
        </h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center sm:justify-items-start">
          {secretaries.map((x, i) => (
            <div
              key={i}
              className="group w-80 h-80 relative text-center bg-slate-300 outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]"
            >
              <h1
                style={inter.style}
                className="absolute text-2xl bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-50%] group-hover:translate-y-[-110%] group-hover:scale-125 transition delay-75 cursor-default bg-black group-hover:bg-transparent"
              >
                {x.name}
              </h1>
              <h4 className="absolute text-lg bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-10%] group-hover:translate-y-[-30%] group-hover:scale-125 opacity-0 group-hover:opacity-100 transition delay-75 text-gray-100 cursor-default">
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
        <h1 className={`text-start ${inter.className} text-4xl mt-10 self-center md:self-start`}>
          👨‍💻 Tech Team
        </h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center sm:justify-items-start">
          {tech.map((x, i) => (
            <div
              key={i}
              className="group w-80 h-80 relative text-center bg-slate-300 outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]"
            >
              <h1
                style={inter.style}
                className="absolute text-2xl bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-50%] group-hover:translate-y-[-110%] group-hover:scale-125 transition delay-75 cursor-default bg-black group-hover:bg-transparent"
              >
                {x.name}
              </h1>
              <h4 className="absolute text-lg bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-10%] group-hover:translate-y-[-30%] group-hover:scale-125 opacity-0 group-hover:opacity-100 transition delay-75 text-gray-100 cursor-default">
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
        <h1 className={`text-start ${inter.className} text-3xl sm:text-4xl mt-10 self-center md:self-start`}>
          👨‍✈️ Management Team
        </h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center sm:justify-items-start">
          {management.map((x, i) => (
            <div
              key={i}
              className="group w-80 h-80 relative text-center bg-slate-300 outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]"
            >
              <h1
                style={inter.style}
                className="absolute text-2xl bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-50%] group-hover:translate-y-[-110%] group-hover:scale-125 transition delay-75 cursor-default bg-black group-hover:bg-transparent"
              >
                {x.name}
              </h1>
              <h4 className="absolute text-lg bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-10%] group-hover:translate-y-[-30%] group-hover:scale-125 opacity-0 group-hover:opacity-100 transition delay-75 text-gray-100 cursor-default">
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
        <h1 className={`text-start ${inter.className} text-4xl mt-10 self-center md:self-start`}>
          👨‍🚀 Design Team
        </h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center sm:justify-items-start">
          {design.map((x, i) => (
            <div
              key={i}
              className="group w-80 h-80 relative text-center bg-slate-300 outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]"
            >
              <h1
                style={inter.style}
                className="absolute text-2xl bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-50%] group-hover:translate-y-[-110%] group-hover:scale-125 transition delay-75 cursor-default bg-black group-hover:bg-transparent"
              >
                {x.name}
              </h1>
              <h4 className="absolute text-lg bottom-0 left-[50%] font-bold z-10 whitespace-nowrap translate-x-[-50%] translate-y-[-10%] group-hover:translate-y-[-30%] group-hover:scale-125 opacity-0 group-hover:opacity-100 transition delay-75 text-gray-100 cursor-default">
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
