import { useRef, useEffect, useContext, useState } from "react";
import { TimerContext } from "../context/TimerContext";
import Title from "./Title";

const Pomodoro = () => {
  const {
    status,
    setStatus,
    setTimeLeft,
    mode,
    isRunning,
    setIsRunning,
    times,
    setTimes,
  } = useContext(TimerContext);

  const [showSettings, setShowSettings] = useState(false);

  const [intervalId, setIntervalId] = useState(null);

  const timer = useRef();

  let id;
  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        let newTime = times[status];
        if (newTime > 0) {
          newTime--;
          setTimes({ ...times, [status]: newTime });
        } else {
          clearInterval(id);
          setIsRunning(false);
        }
      }, 1000);
      setIntervalId(timer.current);
    }
    return () => clearInterval(intervalId);
  }, [times, isRunning]);

  function handleStartStopTimer() {
    setIsRunning(!isRunning);
    if (!isRunning) {
      clearInterval(intervalId);
      setStatus(status);
    }
  }

  function handleRestart() {
    setIsRunning(false);
    setTimeLeft(mode);
    setTimes({
      pomodoro: 1500,
      short: 300,
      long: 600,
    });
    clearInterval(intervalId);
  }

  const minutes = Math.floor(times[status] / 60);
  const seconds = times[status] % 60;
  return (
    <div>
      <div className="text-center py-10 text-3xl">
        <Title text1={"pomodoro"} text2={"timer"} />
      </div>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => {
            setStatus("pomodoro");
            setIsRunning(false);
          }}
          className={`${
            status === "pomodoro" ? "text-black " : "text-brown"
          } p-2 pr-[1rem] pl-[1rem] font-medium duration-100  ease-in`}
        >
          work
        </button>
        <button
          onClick={() => {
            setStatus("short");
            setIsRunning(false);
          }}
          className={` ${
            status === "short" ? "text-black " : "text-brown"
          } p-2 pr-[1rem] pl-[1rem] font-medium duration-100  ease-in`}
        >
          short break
        </button>
        <button
          onClick={() => {
            setStatus("long");
            setIsRunning(false);
          }}
          className={` ${
            status === "long" ? "text-black " : "text-brown"
          } p-2 pr-[1rem] pl-[1rem] font-medium duration-100  ease-in`}
        >
          long break
        </button>
      </div>
      <div className="flex flex-col justify-center gap-12 text-center mt-5 pb-20 text-black">
        <div className="text-9xl font-medium">
          {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
        </div>
        <div className="flex gap-10 items-center justify-center">
          {isRunning ? (
            <button
              onClick={handleStartStopTimer}
              className="bg-beige p-2 rounded-sm px-5 text-md duration-100 ease-in hover:bg-green"
            >
              stop
            </button>
          ) : (
            <button
              onClick={handleStartStopTimer}
              className="bg-green p-2 rounded-sm px-5 text-md duration-100 ease-in hover:bg-beige"
            >
              start
            </button>
          )}

          <svg
            onClick={() => setShowSettings(!showSettings)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="fill-black cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
        </div>
        <div
          className={`border border-brown p-10 my-6 flex gap-10 text-left items-center justify-center ${
            showSettings ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="font-medium mb-1">Work</h2>
            <input
              type="number"
              className="py-1 px-3 outline-none border border-brown w-20"
              defaultValue={times.pomodoro / 60}
              name="pomodoro"
              onChange={(e) =>
                setTimes({
                  ...times,
                  pomodoro: e.target.value * 60,
                })
              }
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-medium mb-1">Short Break</h2>
            <input
              type="number"
              className="py-1 px-3 outline-none border border-brown w-20"
              name="short"
              defaultValue={times.short / 60}
              onChange={(e) =>
                setTimes({ ...times, short: e.target.value * 60 })
              }
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-medium mb-1">Long Break</h2>
            <input
              type="number"
              className="py-1 px-3 outline-none border border-brown w-20"
              name="long"
              defaultValue={times.long / 60}
              onChange={(e) =>
                setTimes({ ...times, long: e.target.value * 60 })
              }
            />
          </div>
          <button onClick={handleRestart} className="w-11 h-11 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="fill-black"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
