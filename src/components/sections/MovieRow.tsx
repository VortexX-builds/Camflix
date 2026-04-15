type MovieRowProps = {
  title: string;
  movies: { id: string; imgUrl: string }[];
};

export const MovieRow = ({ title, movies }: MovieRowProps) => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <h2 className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </h2>
        <div className="flex flex-row items-center gap-2 overflow-x-auto scrollbar-hide py-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="flex-none bg-zinc-900 group relative w-32 md:w-48 lg:w-56 h-[12vw] sm:h-[18vw] md:h-32 lg:h-36 overflow-hidden rounded-md cursor-pointer transition transform hover:scale-110 hover:z-10 duration-300"
            >
              <img
                src={movie.imgUrl}
                alt="Movie Thumbnail"
                className="cursor-pointer object-cover transition duration shadow-xl rounded-md w-full h-full"
              />
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full p-2 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-[10px] md:text-sm font-semibold truncate">Watch Now</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
