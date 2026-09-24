interface AlertProps {
  className?: string;
  children: React.ReactNode;
  variant?: "danger" | "success" | "warning" | "info";
}

export default function Alert({
  className = "",
  children,
  variant = "danger",
}: AlertProps) {
  const variantClasses = {
    danger: "bg-red-100 text-red-500 border-red-300 border-l-red-500",
    success: "bg-green-100 text-green-700 border-green-300 border-l-green-600",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-300 border-l-yellow-600",
    info: "bg-blue-100 text-blue-700 border-blue-300 border-l-blue-600",
  };

  return (
    <p
      className={`${variantClasses[variant]} py-2 px-3 rounded-md border border-l-4 text-sm ${className}`}
    >
      {children}
    </p>
  );
}
