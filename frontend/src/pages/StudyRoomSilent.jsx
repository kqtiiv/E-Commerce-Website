import Pomodoro from "../components/Pomodoro";
import TimerContextProvider from "../context/TimerContext";

const StudyRoomSilent = () => {
  return (
    <div className="pt-10 border-t border-brown">
      <TimerContextProvider>
        <Pomodoro />
      </TimerContextProvider>
    </div>
  );
};

export default StudyRoomSilent;
