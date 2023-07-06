import MLSC from "@/public/mlsc.png";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
const inter = Inter({ weight: "700", subsets: ["latin"] });
export default function About() {
  return (
    <div className="flex flex-grow pt-14  pl-4 pr-4 pb-4">
      <div className="flex grow p-0.5 rounded-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-black grow flex flex-col w-full  justify-start items-center p-6 gap-4">
          <h1 style={inter.style} className="text-3xl">
            About us
          </h1>
          <Separator />
          <div className="grow justify-center flex">
          <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
            <Image className="w-[28rem] md:w-[30rem]" width={500} height={500} alt="Logo" src={MLSC} />
            <ScrollArea className="h-56 w-fit md:h-72">
              <p
                style={inter.style}
                className="text-lg md:text-3xl text-gray-500"
              >
                We at Microsoft Learn Student Chapter believe that youth
                encompassed with appropriate technology holds the potential to
                revolutionize the world we perceive today and we have done a
                fair share in that through multiple events organised over the
                years. Microsoft Learn Student Chapter was institutionalized by
                the virtue of providing students a systemic platform for
                cultivating technical skills and a spirit of teamwork. Our
                vision is to create a community of computer enthusiasts with a
                mindset of development.
              </p>
            </ScrollArea>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

// border-cyan-400 border-2 shadow-cyan-400 shadow-xl drop-shadow-xl
