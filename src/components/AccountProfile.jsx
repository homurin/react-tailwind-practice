const AccountProfile = () => {
  return (
    <div className="mx-auto mt-5 max-w-sm bg-white px-6 py-5 shadow">
      <form action=""></form>
      <div>
        <div className="mt-1">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value="madoka"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
            invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none
            focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            disabled:border-slate-200 disabled:bg-slate-50
            disabled:text-slate-500 disabled:shadow-none"
            disabled
          />
        </div>
        <div className="mt-6">
          <label
            htmlFor="email"
            value="kanamemadoka@gmail."
            className="block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-500 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
            defaultValue="kanamemadoka@gmail."
            placeholder="you@example.com"
          />
        </div>
        <div className="mt-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-500 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
            defaultValue="kyubey"
          />
        </div>
      </div>
      <div className="mt-6 text-right">
        <button className="rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold leading-5 text-white hover:bg-sky-700">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AccountProfile;
