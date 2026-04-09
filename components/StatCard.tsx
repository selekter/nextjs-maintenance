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
    <div className={`p-6 rounded-xl border shadow-sm transition ${className}`}>
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-sm font-bold opacity-80">{title}</p>
          <h3 className="text-3xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-3 bg-white opacity-50 rounded-lg">{icon}</div>
      </div>
    </div>
  );
}
