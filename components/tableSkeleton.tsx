export default function TableSkeleton() {
  return (
    <div className="animate-pulse rounded-xl overflow-x-auto overflow-y-hidden shadow-md">
      <table className="w-full bg-white">
        <thead className="bg-gray-300">
          <tr>
            <th className="h-14"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr>
            <td className="h-10"></td>
          </tr>
          <tr>
            <td className="h-10"></td>
          </tr>
          <tr>
            <td className="h-10"></td>
          </tr>
          <tr>
            <td className="h-10"></td>
          </tr>
          <tr>
            <td className="h-10"></td>
          </tr>
          <tr>
            <td className="h-10"></td>
          </tr>
          <tr>
            <td className="h-10"></td>
          </tr>
          <tr>
            <td className="h-10"></td>
          </tr>
          <tr>
            <td className="h-10"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
