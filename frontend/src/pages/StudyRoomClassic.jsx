import Music from "../components/Music";
import Pomodoro from "../components/Pomodoro";
import TimerContextProvider from "../context/TimerContext";

const StudyRoomClassic = () => {
  return (
    <div className="pt-10 border-t border-brown">
      <TimerContextProvider>
        <Pomodoro />
      </TimerContextProvider>
      <Music />
    </div>
  );
};

export default StudyRoomClassic;
