import { useState } from "react";
import Title from "./Title";
import AudioPlayer from "./AudioPlayer";
import { assets } from "../assets/assets";

const Music = () => {
  const [youtubeURL, setYoutubeURL] = useState("");

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
        </div>
        <div className="sm:w-1/3">
          <p className="font-semibold">ambiance</p>
          <p className="text-start mt-5">rain</p>
          <AudioPlayer soundURL={assets.rain} />
          <p className="text-start mt-5">fire</p>
          <AudioPlayer soundURL={assets.fire} />
          <p className="text-start mt-5">café latté</p>
          <AudioPlayer soundURL={assets.latte} />
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
