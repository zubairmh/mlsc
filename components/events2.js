import Reet from "@/public/reet.jpeg";
import ment from "@/public/pankajnarula.jpg";
import { Inter } from "next/font/google";
import { Separator } from "./ui/separator";
import Image from "next/image";

const inter = Inter({ weight: "700", subsets: ["latin"] });

export default function Events2() {
  return (
    <>
      <div className="flex flex-col justify-center items-center grow pt-14">
      <div style={inter.style} class="text-6xl text-white mb-4">
        Events
      </div>
      <Separator />
    
        <div className=" grid grid-cols-2 gap-4 overflow-y-auto">
            
            
      <Image src={Reet} width={350} alt="" class=""/>
      <Image src={Reet} width={350} alt="" class=""/>
      <Image src={Reet} width={350} alt="" class=""/>
      <Image src={Reet} width={350} alt="" class=""/>
      <Image src={Reet} width={350} alt="" class=""/>
      <Image src={Reet} width={350} alt="" class=""/>
      <Image src={Reet} width={350} alt="" class=""/>
      <Image src={Reet} width={350} alt="" class=""/>
      <Image src={Reet} width={350} alt="" class=""/>
      <Image src={Reet} width={350} alt="" class=""/>
      <Image src={Reet} width={350} alt="" class=""/>
      <Image src={Reet} width={350} alt="" class=""/>
        </div>
        </div>
    
    </>
  );
}
