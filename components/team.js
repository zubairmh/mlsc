import Image from "next/image";
import reet from "@/public/reet.jpeg";
export default function TeamComponent() {
  return (
    <div class="h-64 grid grid-cols-3 gap-8 p-8 overflow-y-scroll grow pt-20">
      <div class=" bg-slate-500   ">
        <Image src={reet} alt="" class=" justify-items-center h-3/4 w-3/4  " />
      </div>
      <div class="  bg-slate-500  shadow-none hover:shadow-inner hover:shadow-[#FD3D48]  outline-none outline-offset-4 outline-4 hover:outline-[#FD3D48]">
        <Image src={reet} alt="" class=" h-3/4 w-3/4" />
      </div>
      <div class="bg-slate-500 ">
        <Image src={reet} alt=""class=" h-3/4 w-3/4" />
      </div>
      <div class=" bg-slate-500 ">
        <Image src={reet} alt=""  class=" h-3/4 w-3/4 "/>
      </div>
      <div class=" bg-slate-500 ">
        <Image src={reet} alt="" class=" h-3/4 w-3/4 " />
      </div>
      <div class=" bg-slate-500 ">
        ad
        <Image src={reet} alt=""  class=" h-3/4 w-3/4 " />
      </div>
      <div class=" bg-slate-500 ">
        <Image src={reet} alt="" class=" h-3/4 w-3/4 "  />
      </div>
      <div class=" bg-slate-500 ">
        <Image src={reet} alt="" class=" h-3/4 w-3/4 "  />
      </div>
      <div class=" bg-slate-500 ">
        <Image src={reet} alt="" class=" h-3/4 w-3/4 " />
      </div>
      <div class=" bg-slate-500 ">
        <Image src={reet} alt="" class=" h-3/4 w-3/4 "  />
      </div>
    </div>
  );
}
