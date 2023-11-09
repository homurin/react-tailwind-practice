const MovieCard = () => {
  return (
    <div className="mx-auto w-72 bg-white px-8 py-6 shadow sm:w-96 sm:px-12 sm:py-8">
      <img className="h-50 w-96 rounded" src="/movie-cover.jpg" alt="movie" />
      <div className="mt-2">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-600 ">
          Slice of Life
        </div>
        <div className="font-bold leading-snug text-slate-700">
          <a className="hover:underline" href="#">
            Mahou Shoujo Madoka★Magica Movie 3: Hangyaku no Monogatari
          </a>
        </div>
        <div className="mt-2 text-sm text-slate-600">$17 USD</div>
      </div>
    </div>
  );
};

export default MovieCard;
