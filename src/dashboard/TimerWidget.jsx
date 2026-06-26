import { useState, useEffect } from "react";

const TimerWidget = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="bg-[#1E2343] p-4 rounded-2xl text-center">
      <h2 className="text-xl mb-2">Timer</h2>

      <h1 className="text-3xl font-bold">
        {seconds}s
      </h1>

      <div className="flex justify-center gap-3 mt-3">
        <button
          onClick={() => setRunning(true)}
          className="bg-green-500 px-3 py-1 rounded"
        >
          Start
        </button>

        <button
          onClick={() => setRunning(false)}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Stop
        </button>

        <button
          onClick={() => setSeconds(0)}
          className="bg-gray-500 px-3 py-1 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerWidget;