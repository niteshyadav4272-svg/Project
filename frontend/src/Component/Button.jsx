const Button = ({
  children,
  href,
  variant = "primary",
  download = false,
}) => {
  const baseStyles =
    "inline-block rounded-md px-6 py-3 font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-red-500 text-white hover:bg-red-600",
    secondary:
      "border border-gray-600 text-white hover:border-red-500 hover:text-red-500",
  };

  return (
    <a
      href={href}
      download={download}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </a>
  );
};

export default Button;