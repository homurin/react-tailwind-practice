const ChatBuble = () => {
  return (
    <div className="mx-auto my-10 max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg sm:flex sm:items-center sm:space-x-6 sm:space-y-0 sm:py-4">
      <img
        className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="/ribbon-homu.png"
        alt="Ribbon Homu"
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">Mochammad Fajrin</p>
          <p className="font-medium text-slate-500">Fullstuck Wengdev</p>
        </div>
        <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>
    </div>
  );
};

export default ChatBuble;
