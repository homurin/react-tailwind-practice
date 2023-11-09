const EmployeeTable = ({ users }) => {
  return (
    <div className="mx-auto mt-5 max-w-lg bg-white">
      <table>
        <thead className="border-b border-slate-200 bg-slate-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-slate-900"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-slate-900"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-slate-900"
            >
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id} className="odd:bg-white even:bg-slate-300">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                  {user.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                  {user.title}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                  {user.email}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
