const Home = () => {
  return (
    <>
      <div className="w-full h-[480px] bg-red-500"></div>
      <h1 className="uppercase text-3xl text-red-700">Home</h1>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-12 md:mx-24">
        <video
          className="w-full h-full rounded-3xl inset-0 object-cover object-center relative"
          autoPlay
          loop
          preload="metadata"
        >
          <source
            src="src/assets/videos/spin loop t-shirt 1080.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video
          className="w-full h-full rounded-3xl inset-0 object-cover object-center md:relative"
          autoPlay
          loop
          preload="metadata"
        >
          <source
            src="src/assets/videos/spin loop uniforme 1080.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Home;
