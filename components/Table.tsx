import { cn } from "@/lib/utility";

export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-y-hidden overflow-x-auto">
      <table className="text-left w-full table-auto">{children}</table>
    </div>
  );
}

export function TableHeader({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <thead className={cn("bg-blue-200 border-b border-gray-100", className)}>
      {children}
    </thead>
  );
}

export function TableBody({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <tbody className={cn("divide-y divide-gray-100", className)}>
      {children}
    </tbody>
  );
}

export function TableHead({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <th className={cn("px-6 py-4 font-semibold text-gray-700", className)}>
      {children}
    </th>
  );
}

export function TableRow({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <tr className={cn("", className)}>{children}</tr>;
}

export function TableCell({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <td className={cn("px-6 py-4 font-medium text-gray-700", className)}>
      {children}
    </td>
  );
}
