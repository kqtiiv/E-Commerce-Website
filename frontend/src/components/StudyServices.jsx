import { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const StudyServices = () => {
  const { navigate } = useContext(ShopContext);
  return (
    <div className="mt-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"study"} text2={"rooms"} />
      </div>
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-10 text-center py-10 text-xs sm:text-sm md:text-base text-black">
        <div className="justify-center flex flex-col sm:w-1/3">
          <p className="font-semibold">classic room</p>
          <p className="text-black">music, pomodoro, ambiance</p>
          <button
            onClick={() => navigate("/study-room")}
            className="mt-5 bg-green py-1 justify-center text-black active:bg-beige rounded-sm flex px-3"
          >
            take me there
          </button>
        </div>
        <div className="justify-center flex flex-col sm:w-1/3">
          <p className="font-semibold">silent room</p>
          <p className="text-black">pomodoro, no music, blank</p>
          <button
            onClick={() => navigate("/study-room")}
            className="mt-5 bg-green py-1 justify-center text-black active:bg-beige rounded-sm flex px-3"
          >
            take me there
          </button>
        </div>
        <div className="justify-center flex flex-col sm:w-1/3">
          <p className="font-semibold">offline room</p>
          <p className="text-black">nothingness.</p>
          <button
            onClick={() => navigate("/study-room")}
            className="mt-5 bg-green py-1 justify-center text-black active:bg-beige rounded-sm flex px-3"
          >
            take me there
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyServices;
