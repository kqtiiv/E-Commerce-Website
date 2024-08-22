import Title from "./Title";

const OurPolicy = () => {
  return (
    <div>
      <div className="text-center py-8 text-3xl">
        <Title text1={"our"} text2={"policy"} />
      </div>
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10 text-xs sm:text-sm md:text-base text-black">
        <div>
          <p className="font-semibold">no returns</p>
          <p className="text-black">
            Once an item is bought, there will be no return requests tolerated.
            Please ensure you know what you are paying for!
          </p>
        </div>
        <div>
          <p className="font-semibold">reselling</p>
          <p className="text-black">
            A lot of work has been put in to make these notes! If anyone notices
            these notes being resold anywhere else on the internet, please
            report it to me or to the retail platform.
          </p>
        </div>
        <div>
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

export default OurPolicy;
