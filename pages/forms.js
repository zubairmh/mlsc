import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { BsQuestionSquareFill } from "react-icons/bs";
import { Inter } from "next/font/google";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { RefreshCcw } from "lucide-react"
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
const inter = Inter({ weight: "500", subsets: ["latin"] });

export default function Forms() {
  const toast = useToast();
  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { register, handleSubmit } = useForm();
  const [reloadImage, setreloadImage] = useState(Date.now())
  function onSubmit(d) {
    console.log(d)

    axios.post("https://mlsc.zubairmh.xyz/apply/" + d.captcha, d).then((response) => {
      if (response.data.success) {
        console.log(response.status, response.data);
        alert("Application has been sent")
      } else {
        alert("Bad Captcha, please regenerate and retry")
      }

    });
  }
  function Q1() {
    const [status, setStatus] = useState("hidden")
    useEffect(() => {
      setStatus("hidden")
      if (currentQuestion == 0) {
        setStatus("flex")
      }
    }, [currentQuestion])
    return (
      <div className={`${status} flex-col grow w-full items-center justify-center`}>
        <div className="p-5">Question 1/8</div>
        <Separator />
        <div className="grow"></div>
        <div class="text-xl mb-8 p-3">
          <span class="flex flex-row ">What is your full name?</span>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            {...register("username", { required: true, maxLength: 150 })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow shadow-cyan-400 shadow-2 drop-shadow-xl"
            placeholder="Enter your response"
            required
          ></input>
        </div>
        <div className="grow"></div>
      </div>
    );
  }
  function Q2() {
    const [status, setStatus] = useState("hidden")
    useEffect(() => {
      setStatus("hidden")
      if (currentQuestion == 1) {
        setStatus("flex")
      }
    }, [currentQuestion])
    return (
      <div className={`${status} flex-col grow w-full items-center justify-center`}>
        <div className="p-5">Question 2/8</div>
        <Separator />
        <div className="grow"></div>
        <div class="text-xl p-10">
          <span class="flex flex-row ">
            Enter your Phone Number
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            {...register("phone", { required: true, maxLength: 20 })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your response"
            required
          ></input>
        </div>        <div className="grow"></div>
      </div>
    );
  }
  function Q3() {
    const [status, setStatus] = useState("hidden")
    useEffect(() => {
      setStatus("hidden")
      if (currentQuestion == 2) {
        setStatus("flex")
      }
    }, [currentQuestion])
    return (
      <div className={`${status} flex-col grow w-full items-center justify-center`}>
        <div className="p-5">Question 3/8</div>
        <Separator />
        <div className="grow"></div>
        <div class="text-xl p-10">
          <span class="flex flex-row ">
            Enter your email
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            {...register("email", { required: true, maxLength: 80 })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your response"
            required
          ></input>
        </div>
        <div className="grow"></div>
      </div>
    );
  }
  function Q4() {
    const [status, setStatus] = useState("hidden")
    useEffect(() => {
      setStatus("hidden")
      if (currentQuestion == 3) {
        setStatus("flex")
      }
    }, [currentQuestion])
    return (
      <div className={`${status} flex-col grow w-full items-center justify-center`}>
        <div className="p-5">Question 4/8</div>
        <Separator />
        <div className="grow"></div>
        <div class="text-xl mb-8 p-3">
          <span class="flex flex-row">
            <span>Select all the departments which you wish to apply for </span>
          </span>
        </div>
        <div class=" flex flex-col gap-2 ">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-6 h-6" {...register("tech")} />
            <label
              htmlFor="tech"
              className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tech
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-6 h-6"
              {...register("design")}
            />
            <label
              htmlFor="design"
              className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Design
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-6 h-6"
              {...register("marketing")}
            />
            <label
              htmlFor="marketing"
              className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Management
            </label>
          </div>
        </div>

        <div className="grow"></div>
      </div>
    );
  }
  function Q5() {
    const [status, setStatus] = useState("hidden")
    useEffect(() => {
      setStatus("hidden")
      if (currentQuestion == 4) {
        setStatus("flex")
      }
    }, [currentQuestion])
    return (
      <div className={`${status} flex-col grow w-full items-center justify-center`}>
        <div className="p-5">Question 5/8</div>
        <Separator />
        <div className="grow"></div>
        <div class="text-xl mb-8 p-3">
          <span class="flex flex-col">
            What tech domains do you wish to participate in this year? Please Elaborate
            <h1 class="flex justify-center">(eg: AI/ML, Web3, Game Development, etc)</h1>
            <h1 class="flex justify-center">(Tech only)</h1>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <textarea
            type="text"
            {...register("techq")}
            class="bg-gray-50 border h-28 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your response"

          ></textarea>
        </div>
        <div className="grow"></div>
      </div>
    );
  }
  function Q6() {
    const [status, setStatus] = useState("hidden")
    useEffect(() => {
      setStatus("hidden")
      if (currentQuestion == 5) {
        setStatus("flex")
      }
    }, [currentQuestion])
    return (
      <div className={`${status} flex-col grow w-full items-center justify-center`}>
        <div className="p-5">Question 6/8</div>
        <Separator />
        <div className="grow"></div>
        <div class="text-xl mb-8 p-3">
          <span class="flex flex-col ">
            How do you approach conflict resolution within a team or between
            team members?
            <h1 class="flex justify-center">(Management only)</h1>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <textarea
            type="text"
            {...register("manageq")}
            class="bg-gray-50 border h-28 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your response"

          ></textarea>
        </div>
        <div className="grow"></div>
      </div>
    );
  }
  function Q7() {
    const [status, setStatus] = useState("hidden")
    useEffect(() => {
      setStatus("hidden")
      if (currentQuestion == 6) {
        setStatus("flex")
      }
    }, [currentQuestion])
    return (
      <div className={`${status} flex-col grow w-full items-center justify-center`}>
        <div className="p-5">Question 7/8</div>
        <Separator />
        <div className="grow"></div>
        <div class="text-xl mb-8 p-3">
          <span class="flex flex-col ">
            Differentiate between vector images and raster images.
            <h1 class="flex justify-center">(Design Only)</h1>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <textarea
            type="text"
            {...register("designq")}
            class="bg-gray-50 border h-28 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your response"

          ></textarea>
        </div>
        <div className="grow"></div>
      </div>
    );
  }

  function Q8() {
    const [status, setStatus] = useState("hidden")
    useEffect(() => {
      setStatus("hidden")
      if (currentQuestion == 7) {
        setStatus("flex")
      }
    }, [currentQuestion])
    return (
      <div className={`${status} flex-col grow w-full items-center justify-center gap-4`}>
        <div className="p-5">Question 8/8</div>
        <Separator />
        <div className="grow"></div>
        {/* <div class="text-xl">
          <span class="flex flex-row ">
            Enter your email
          </span>
        </div> */}
        {/* <div className="flex flex-col gap-4">
          <input
            type="email"
            {...register("email", { required: true, maxLength: 80 })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your response"
            required
          ></input>
        </div> */}
        <div class="text-xl">
          <span class="flex flex-row ">
            Enter the captcha
          </span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img className="h-10" src={`https://mlsc.zubairmh.xyz/captcha?${reloadImage}`} />
          <Button className="w-10 h-10 text-black p-2" onClick={() => setreloadImage(Date.now())}><RefreshCcw className="w-full h-full" size={64} /></Button>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            {...register("captcha", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your response"
            required
          ></input>
        </div>
        <button className="bg-white text-black p-2.5" type="submit">Submit</button>
        <span className="text-gray-400">• Upon successful<br />submission, <br />You&apos;ll get an &quot;application <br />submitted&quot; alert</span>
        <div className="grow"></div>
      </div>
    );
  }
  const [answers, setAnswers] = useState([...Array(6)]);
  const questionArray = [
    <Q1 key={1} />,
    <Q2 key={2} />,
    <Q3 key={3} />,
    <Q4 key={4} />,
    <Q5 key={5} />,
    <Q6 key={6} />,
    <Q7 key={7} />,
    <Q8 key={8} />,
    //   <Q9 key={9} />,
    //   <Q10 key={10} />,
    //   <Q11 key={11} />
  ];

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
      <div className="grow flex flex-col bg-black border-cyan-400 border-2 border-solid rounded-lg shadow-lg shadow-cyan-400 drop-shadow-lg w-full p-2">
        <Progress value={((currentQuestion + 1) / 8) * 100} className="w-full" />
        <div className="flex flex-row grow">
          <div className="flex items-center justify-center">
            <button onClick={() => decrement()}>
              <ChevronLeft
                className="text-gray-400 hover:text-white transition delay-75"
                size={64}
              />
            </button>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grow flex flex-col items-center justify-center"
          >
            {questionArray.map((e, i) => {
              return e
            })}
          </form>
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


// export default function Forms() {
//   return (
//     <div className="grow flex justify-center items-center">Forms Closed</div>
//   )
// }