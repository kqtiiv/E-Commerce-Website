import { useRef, useState, useEffect } from "react";

const StudyRoomOffline = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const elementRef = useRef(null);

  const handleFullScreen = () => {
    if (!isFullScreen) {
      elementRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const onFullScreenChange = () => {
    setIsFullScreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", onFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullScreenChange);
    };
  }, []);

  return (
    <div ref={elementRef} className="h-[85vh] flex justify-center items-center">
      <button
        onClick={handleFullScreen}
        className={`px-3 py-1 rounded-sm hover:bg-beige ${
          isFullScreen ? "" : "bg-green"
        }`}
      >
        {isFullScreen ? "exit full screen" : "enter full screen"}
      </button>
    </div>
  );
};

export default StudyRoomOffline;
