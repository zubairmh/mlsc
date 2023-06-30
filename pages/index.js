import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "@/components/home";
const inter = Inter({ subsets: ["latin"] });
export default function Index() {
  return (
    <>
      <Home />
    </>
  );
}
