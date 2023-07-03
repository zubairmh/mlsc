import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { BsQuestionSquareFill } from "react-icons/bs";
import { Inter } from "next/font/google";
import { Checkbox } from "@/components/ui/checkbox";

const inter = Inter({ weight: "500", subsets: ["latin"] });
function Q1(answer) {
  return (
    <>
      <div className="p-5">Question 1/10</div>
      <Separator />
      <div className="grow"></div>
      <div class="text-xl mb-8 p-3">
        <span class="flex flex-row ">
          What is your full name?
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          id="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow shadow-cyan-400 shadow-2 drop-shadow-xl"
          placeholder="Enter your response"
          required
        ></input>
      </div>
      <div className="grow"></div>
    </>
  );
}
function Q2() {
  return (
    <>
      <div className="p-5">Question 2/10</div>
      <Separator />
      <div className="grow"></div>
      <div class="text-xl mb-8 p-3">
        <span class="flex flex-row">
          <span>Select all the departments which you wish to apply for </span>
        </span>
      </div>
      <div class=" flex flex-col gap-2 ">
        <div className="flex items-center space-x-2">
          <Checkbox className="w-6 h-6" id="tech" />
          <label
            htmlFor="tech"
            className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Tech
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox className="w-6 h-6" id="design" />
          <label
            htmlFor="design"
            className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Design
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox className="w-6 h-6" id="marketing" />
          <label
            htmlFor="marketing"
            className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Management
          </label>
        </div>
      </div>

      <div className="grow"></div>
    </>
  );
}
function Q3() {
  return (
    <>
      <div className="p-5">Question 3/10</div>
      <Separator />
      <div className="grow"></div>
      <div class="text-xl mb-8 p-3">
        <span class="flex flex-row ">
          What specific skills and qualifications do you possess that make you a
          strong candidate for this role(s)?
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <textarea
          type="text"
          id="last_name"
          class="bg-gray-50 border h-28 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your response"
          required
        ></textarea>
      </div>
      <div className="grow"></div>
    </>
  );
}
function Q4() {
  return (
    <>
      <div className="p-5">Question 4/10</div>
      <Separator />
      <div className="grow"></div>
      <div class="text-xl mb-8 p-3">
        <span class="flex flex-row">
          Are you comfortable working independently or as part of a team? Can you provide examples of your experience in both scenarios?
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <textarea
          type="text"
          id="last_name"
          class="bg-gray-50 border h-28 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your response"
          required
        ></textarea>
      </div>
      <div className="grow"></div>
    </>
  );
}
function Q5() {
  return (
    <>
      <div className="p-5">Question 5/10</div>
      <Separator />
      <div className="grow"></div>
      <div class="text-xl mb-8 p-3">
        <span class="flex flex-row ">
        If you could choose any fictional character as your work buddy, who would it be and why?
        </span>
      </div>
      <div className="flex flex-col gap-4">
      <textarea
          type="text"
          id="last_name"
          class="bg-gray-50 border h-28 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your response"
          required
        ></textarea>
      </div>
      <div className="grow"></div>
    </>
  );
}
function Q6() {
  return (
    <>
      <div className="p-5">Question 6/10</div>
      <Separator />
      <div className="grow"></div>
      <div class="text-xl mb-8 p-3">
        <span class="flex flex-row ">
        Are you familiar with any specific frameworks, tools, or platforms commonly used in the field(s)? If so, please list them and describe your proficiency
        </span>
      </div>
      <div className="flex flex-col gap-4">
      <textarea
          type="text"
          id="last_name"
          class="bg-gray-50 border h-28 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your response"
          required
        ></textarea>
      </div>
      <div className="grow"></div>
    </>
  );
}
function Q7() {
  return (
    <>
      <div className="p-5">Question 7/10</div>
      <Separator />
      <div className="grow"></div>
      <div class="text-xl mb-8 p-3">
        <span class="flex flex-row ">
          Explain useEffect in react/react-based frameworks (Tech only)
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <textarea
          type="text"
          id="last_name"
          class="bg-gray-50 border h-40 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your response"
          required
        ></textarea>
      </div>
      <div className="grow"></div>
    </>
  );
}
function Q8() {
  return (
    <>
      <div className="p-5">Question 8/10</div>
      <Separator />
      <div className="grow"></div>
      <div class="text-xl mb-8 p-3">
        <span class="flex flex-row ">
        How do you approach conflict resolution within a team or between team members? (Management only)
        </span>
      </div>
      <div className="flex flex-col gap-4">
      <textarea
          type="text"
          id="last_name"
          class="bg-gray-50 border h-40 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your response"
          required
        ></textarea>
      </div>
      <div className="grow"></div>
    </>
  );
}
function Q9() {
  return (
    <>
      <div className="p-5">Question 9/10</div>
      <Separator />
      <div className="grow"></div>
      <div class="text-xl mb-8 p-3">
        <span class="flex flex-row ">
          Differentiate between vector images and raster images. (Design only)
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <textarea
          type="text"
          id="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 h-40 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your response"
          required
        ></textarea>
      </div>
      <div className="grow"></div>
    </>
  );
}
function Q10() {
  return (
    <>
      <div className="p-5">Question 10/10</div>
      <Separator />
      <div className="grow"></div>
      <div class="text-xl mb-8 p-3">
        <span class="flex flex-row ">
        Your profile/project/portofolio links (comma separated)
        </span>
      </div>
      <div className="flex flex-col gap-4">
      <textarea
          type="text"
          id="last_name"
          class="bg-gray-50 border h-40 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your response"
          required
        ></textarea>
      </div>
      <div className="grow"></div>
    </>
  );
}
export default function Forms() {
  const [progress, setProgress] = React.useState(0);
  const [answers, setAnswers] = useState([...Array(10)]);
  const questionArray = [
    Q1(answers),
    Q2(answers),
    Q3(answers),
    Q4(answers),
    Q5(answers),
    Q6(answers),
    Q7(answers),
    Q8(answers),
    Q9(answers),
    Q10(answers),
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function decrement() {
    console.log(currentQuestion);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      return;
    }
  }

  function increment() {
    console.log(currentQuestion);
    if (currentQuestion < questionArray.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      return;
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setProgress(10), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      style={inter.style}
      class="flex flex-col justify-center items-center min-h-screen grow pt-14 pl-5 pb-5 pr-5 text-white "
    >
      <div className="grow flex flex-col bg-black border-cyan-400 border-2 border-solid rounded-lg drop-shadow-xl w-full p-2">
        <Progress value={(currentQuestion + 1) * 10} className="w-full" />
        <div className="flex flex-row grow">
          <div className="flex items-center justify-center">
            <button onClick={() => decrement()}>
              <ChevronLeft
                className="text-gray-400 hover:text-white transition delay-75"
                size={64}
              />
            </button>
          </div>
          <div className="grow flex flex-col items-center justify-center">
            {questionArray[currentQuestion]}
          </div>
          <div className="flex items-center justify-center">
            <button onClick={() => increment()}>
              <ChevronRight
                className="text-gray-400 hover:text-white transition delay-75"
                size={64}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
