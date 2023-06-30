import Image from "next/image";
import MLSC from "@/public/mlsc.png";
import Link from "next/link";
import {Inter} from "next/font/google"
const inter=Inter({weight:"700", subsets:["latin"]})
export default function Navbar({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="h-16 flex flex-row p-5 items-center gap-4">
        <Image alt="MLSC logo" width={32} height={32} src={MLSC}></Image>
        <h1 className={inter.className}>MLSC</h1>
        <div className="grow"></div>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Team</Link>
        <Link href="/">Events</Link>
      </div>
      {children}
    </div>
  );
}
