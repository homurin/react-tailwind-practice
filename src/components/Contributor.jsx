const Contributor = ({ users }) => {
  return (
    <div className="mx-auto max-w-sm bg-white p-10">
      <div className="flex items-center space-x-2 text-base">
        <h4 className="font-semibold text-slate-900">Contributors</h4>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
          204
        </span>
      </div>
      <div className="mt-3 flex -space-x-2 overflow-hidden">
        {users
          .filter((user) => user.id <= 5)
          .map((user) => {
            return (
              <img
                key={user.id}
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src={user.image}
                alt={user.name}
              />
            );
          })}
      </div>
      <div className="mt-3 text-sm font-medium">
        <a href="#" className="text-blue-500">
          + 198 others
        </a>
      </div>
    </div>
  );
};

export default Contributor;
