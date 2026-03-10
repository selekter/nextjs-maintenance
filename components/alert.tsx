export default function Alert({
  className = "",
  children,
}: {
  className?: string;
  children: any;
}) {
  return (
    <>
      <p
        className={`bg-red-100 text-red-500 py-2 px-3 rounded-md border border-red-300 border-l-4 border-l-red-500 text-sm ${className}`}
      >
        {children}
      </p>
    </>
  );
}
