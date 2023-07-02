import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
export default function Forms() {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(10), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div class="flex flex-col justify-center items-center min-h-screen grow p-14 text-white ">
      <div class="bg-black p-10 flex-col justify-around items-center lg:w-full flex-grow flex border-4 border-cyan-400  rounded-lg shadow-cyan-400 shadow-xl drop-shadow-2xl   ">
        <Progress value={progress} className="w-full" />
        <div className="p-5">Question 1/10</div>
        <Separator />
        <div class="text-xl mb-8 p-3">Which department you want to join?</div>
        <div className="grow" />
        <div className="flex flex-col gap-4">
          <Button>Tech</Button>
          <Button>Design</Button>
          <Button>Management</Button>
          <Button>Marketting</Button>
        </div>
      </div>
    </div>
  );
}
