import { useState } from "react";
import Title from "./Title";

const Music = () => {
  const [youtubeURL, setYoutubeURL] = useState("");
  const [youtubeVolume, setYoutubeVolume] = useState(0);
  const [rainVolume, setRainVolume] = useState(0);

  return (
    <div>
      <div className="text-center py-20 text-3xl">
        <Title text1={"sound"} text2={"board"} />
      </div>
      <div className="flex flex-col sm:flex-row justify-around gap-12 text-center pb-20 text-xs sm:text-sm md:text-base text-black">
        <div className="sm:w-1/3">
          <p className="font-semibold">youtube link</p>
          <input
            onChange={(e) => setYoutubeURL(e.target.value)}
            className="border w-full border-brown outline-none px-1 sm:px-2 py-1 mt-5"
            type="text"
            placeholder="add youtube url"
            value={youtubeURL}
          />
          <span className="flex items-center mt-3 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="fill-black"
              viewBox="0 0 16 16"
            >
              <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
              <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
              <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11" />
            </svg>
            <input
              onChange={(e) => setYoutubeVolume(e.target.value)}
              className="w-full h-[2px] rounded-lg outline-none opacity-70"
              type="range"
              min="0"
              max="1"
              step="any"
              value={youtubeVolume}
            ></input>
          </span>
        </div>
        <div className="sm:w-1/3">
          <p className="font-semibold">ambiance</p>
          <p className="text-start mt-5">rain</p>
          <span className="flex items-center mt-3 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="fill-black"
              viewBox="0 0 16 16"
            >
              <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
              <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
              <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11" />
            </svg>
            <input
              onChange={(e) => setRainVolume(e.target.value)}
              className="w-full h-[2px] rounded-lg outline-none opacity-70"
              type="range"
              min="0"
              max="1"
              step="any"
              value={rainVolume}
            ></input>
          </span>
        </div>
        <div className="sm:w-1/3">
          <p className="font-semibold">anyone welcome</p>
          <p className="text-black">
            Students teachers, parents... ANYONE is free to use the contents of
            this website! Recommendations are also greatly appreciated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Music;
