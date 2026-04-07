interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "success" | "outline";
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  type = "submit",
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "not-disabled:hover:shadow-md transition px-4 py-1 rounded-md cursor-pointer disabled:cursor-auto disabled:bg-gray-300 disabled:text-gray-700";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
    success: "bg-green-500 text-white hover:bg-green-600 active:bg-green-700",
    outline: "border-2 border-gray-300 hover:bg-gray-50 text-gray-700",
  };
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
