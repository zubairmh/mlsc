import Image from "next/image";
import MLSC from "@/public/mlsc.png";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const inter = Inter({ weight: "700", subsets: ["latin"] });
const inter2 = Inter({ weight: "500", subsets: ["latin"] });
import GlobeComp from "@/components/globecomp";
export default function Navbar({ children }) {
    const [loading, setLoading]=useState(true);
    useEffect(() => {
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      }, 4100)
    }, [])
    if(loading) {
      return <GlobeComp/>
    }
  //   useEffect(() => {
  //     toast.loading("Loading", {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //       theme: "dark",
  //     });
  //   }, []);
  return (
    <div className="flex flex-col min-h-screen min-w-full text-white fixed pb-20">
      <div className={`h-16 flex flex-row p-5 items-center gap-4 ${inter2.className}`}>
        <Link className="flex flex-row items-center gap-4" href="/">
          <Image alt="MLSC logo" width={32} height={32} src={MLSC}></Image>
          <h1 className={inter.className}>MLSC</h1>
        </Link>
        <div className="grow"></div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/team">Team</Link>
        <Link href="/events">Events</Link>
      </div>
      <ToastContainer />
      {children}
    </div>
  );
}
