import { cn } from "@/lib/utility";

export function Table({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className={cn("w-full table-auto text-left", className)}>
        {children}
      </table>
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
    <thead className={cn("border-b border-slate-200 bg-slate-50", className)}>
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
    <tbody className={cn("divide-y divide-slate-100", className)}>
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
    <th className={cn("px-6 py-4 font-semibold text-slate-700", className)}>
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
    <td className={cn("px-6 py-4 font-medium text-slate-700", className)}>
      {children}
    </td>
  );
}
