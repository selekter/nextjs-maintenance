interface StatCardProps {
  title: string;
  value: number | string | undefined;
  className?: string;
  icon?: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  className,
  icon,
}: StatCardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold opacity-80">{title}</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight">{value}</h3>
        </div>
        <div className="rounded-xl bg-white/70 p-3 shadow-sm">{icon}</div>
      </div>
    </div>
  );
}
