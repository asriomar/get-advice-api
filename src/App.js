import { useState, useEffect } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="mt-5 border p-4 rounded-lg bg-indigo-100 md:w-1/2 md:mx-auto md:shadow-2xl">
      <h1 className="text-xl text-center m-3 ">{advice}</h1>
      <div className="flex justify-center items-center ">
        <button
          className="shadow-lg border-2 border-black m-3 bg-gray-300 p-3 rounded-full"
          onClick={getAdvice}
        >
          Get Advice
        </button>
      </div>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p className="m-3 text-center">
      You have read <strong className="text-green-500">{props.count}</strong>{" "}
      pieces of advice{" "}
    </p>
  );
}
