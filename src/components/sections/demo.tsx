import { Navbar } from "@/components/ui/mini-navbar";
import { Billboard } from "./Billboard";
import { MovieRow } from "./MovieRow";

const mockMovies = [
  { id: '1', imgUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=200&auto=format&fit=crop' },
  { id: '2', imgUrl: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=200&auto=format&fit=crop' },
  { id: '3', imgUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=200&auto=format&fit=crop' },
  { id: '4', imgUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=200&auto=format&fit=crop' },
  { id: '5', imgUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=200&auto=format&fit=crop' },
  { id: '6', imgUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=200&auto=format&fit=crop' },
  { id: '7', imgUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=200&auto=format&fit=crop' },
];

export const DemoOne = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden pb-10">
      <Navbar isAuthenticated={true} />
      <Billboard />
      <div className="pb-40 -mt-10 relative z-10 md:mt-[-100px] lg:mt-[-150px]">
        <MovieRow title="Trending Now" movies={mockMovies} />
        <MovieRow title="Action Movies" movies={[...mockMovies].reverse()} />
        <MovieRow title="Top Picks for You" movies={mockMovies} />
        <MovieRow title="Sci-Fi Adventures" movies={[...mockMovies].reverse()} />
      </div>
    </div>
  );
};
