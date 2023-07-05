import Image from "next/image"
import MLSC from "@/public/mlsc.png"
import {Inter} from "next/font/google"
const inter=Inter({weight:"700", subsets:["latin"]})
export default function Home() {
    return(
        <div class= {`flex flex-col lg:flex-row ${inter.className} grow items-center justify-center`}>
            <div class="absolute left-[-10rem] top-[10rem] rotate-45 w-60 h-60 bg-gradient-to-br from-pink-500  to-purple-700 ">
                
            </div> 
            <Image src={MLSC} alt="" width={351} height={325} className="scale-50 drop-shadow-2xl sm:scale-100 z-10"/>
            <div class="flex flex-col gap-2 text-center lg:text-left z-10">
                <h1 class="text-5xl lg:text-7xl font-bold tracking-wide bg-gradient-to-br from-pink-500  to-purple-700 bg-clip-text text-transparent">MICROSOFT</h1>
                <h1 class="text-4xl lg:text-6xl font-bold tracking-wide bg-gradient-to-br from-cyan-500  to-blue-700 bg-clip-text text-transparent">LEARN STUDENT</h1>
                <h1 class="text-3xl lg:text-5xl">CHAPTER</h1>
            </div>
            <div class="absolute top-[5rem] right-[-1rem] rounded-full  w-28 h-28 bg-gradient-to-br from-pink-500  to-purple-700 animation-floating">
                
            </div> 
            <div class="absolute top-[8rem] right-[8rem] rounded-full  w-20 h-20 bg-gradient-to-br from-pink-500  to-purple-700 animation-floating-2">
                
                </div> 
            <div class="absolute bottom-[-4rem] right-[-8rem] rounded-full  w-60 h-60 bg-gradient-to-br from-pink-500  to-purple-700">
                
            </div> 
        </div>
    );
}