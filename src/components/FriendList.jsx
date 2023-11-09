const FriendList = ({ users }) => {
  return (
    <div className="mx-auto mb-10 max-w-md bg-white shadow">
      <ul role="list" className="divide-y divide-slate-200 p-6">
        {users
          .filter((user) => user.id < 5)
          .map((user) => {
            return (
              <li className="flex py-4 first:pt-0 last:pb-0" key={user.id}>
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.image}
                  alt={user.name}
                />
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-slate-900">
                    {user.name}
                  </p>
                  <p className="truncate text-sm text-slate-500">
                    {user.email}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FriendList;
