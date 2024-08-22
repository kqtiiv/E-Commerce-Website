import { createContext, useMemo, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorage";
import PropTypes from "prop-types";

export const TimerContext = createContext();

const TimerContextProvider = (props) => {
  const [status, setStatus] = useState("pomodoro");
  const [defaultValue, setDefaultValue] = useLocalStorageState(
    "default-time-value",
    {
      pomodoro: 1500,
      short: 300,
      long: 600,
    }
  );
  const [times, setTimes] = useLocalStorageState("time-setting", {
    pomodoro: 1500,
    short: 300,
    long: 600,
  });
  const mode = useMemo(() => times[status], [status, times]);
  const [timeLeft, setTimeLeft] = useState(mode);
  const [isRunning, setIsRunning] = useState(false);

  const value = {
    times,
    setTimes,
    status,
    setStatus,
    timeLeft,
    setTimeLeft,
    mode,
    isRunning,
    setIsRunning,
    defaultValue,
    setDefaultValue,
  };

  return (
    <TimerContext.Provider value={value}>
      {props.children}
    </TimerContext.Provider>
  );
};

TimerContextProvider.propTypes = {
  children: PropTypes.node,
};

export default TimerContextProvider;
