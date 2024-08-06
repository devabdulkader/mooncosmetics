const herosection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full overflow-hidden lg:h-screen  relative group">
      {/* Overlay that covers the video */}
      {/* <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 group-hover:opacity-0 z-10"></div> */}

      <video
        src="/moon/videos/welcome-moon.mp4"
        className="w-full relative left-0 cursor-pointer object-fill h-full "
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default herosection;
