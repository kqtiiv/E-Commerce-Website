const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-brown">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-black">
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            welcome
          </h1>
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-brown"></p>
            <p className="font-medium text-sm md:text-base">
              find study resources and services here
            </p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img className="w-full sm:w-1/2 px-10 pb-5" src="/logo.jpg" alt="logo" />
    </div>
  );
};

export default Hero;
