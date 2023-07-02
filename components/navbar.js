import Image from "next/image";
import MLSC from "@/public/mlsc.png";
import Link from "next/link";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
const inter = Inter({ weight: "700", subsets: ["latin"] });
const inter2 = Inter({ weight: "500", subsets: ["latin"] });
import GlobeComp from "@/components/globecomp";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/router";

export default function Navbar({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4100);
  }, []);
  let paths = {
    "/": "Home",
    "/about": "About",
    "/events": "Events",
    "/team": "Team",
    "/form": "Form",
  };
  if (loading) {
    return <GlobeComp />;
  }
  //   useEffect(() => {
  //     toast.loading("Loading", {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //       theme: "dark",
  //     });
  //   }, []);
  return (
    <div className="flex flex-col min-h-screen min-w-full text-white fixed">
      <div
        className={`h-16 flex flex-row w-full p-5 items-center gap-4 ${inter2.className} fixed z-10`}
      >
        <Link className="flex flex-row items-center gap-4" href="/">
          <Image alt="MLSC logo" width={32} height={32} src={MLSC}></Image>
          <h1 className={inter.className}>MLSC</h1>
        </Link>
        <div className="grow"></div>
        <div className="hidden sm:flex flex-row  gap-4">
          <Link href="/"> Home </Link>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/events">Events</Link>
          <Link href="/forms">Form</Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="block sm:hidden" variant="primary">
              <GiHamburgerMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#0f0f0f] text-white border-gray-800">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-800" />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push("/")}>
                Home
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/about")}>
                About
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/team")}>
                Team
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/events")}>
                Events
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/forms")}>
                Form
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Toaster />
      {children}
    </div>
  );
}
