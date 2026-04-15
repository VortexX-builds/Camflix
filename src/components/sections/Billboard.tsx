export const Billboard = () => {
  return (
    <div className="relative h-[56.25vw] sm:h-[60vh] md:h-[80vh] w-full bg-black">
      <img
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
        alt="Billboard Background"
        className="w-full h-full object-cover brightness-[60%] transition duration-500"
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl lg:text-6xl h-full w-[50%] font-bold drop-shadow-xl">
          The Dark Cosmos
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          When humanity looks to the stars, they find they are not alone. A thrilling sci-fi adventure that pushes the boundaries of human exploration and resilience in the face of the unknown.
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white text-black rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6 mr-1">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
            Play
          </button>
          <button className="bg-white/30 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-white/20 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            More Info
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    </div>
  );
};
