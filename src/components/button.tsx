import clsx from "clsx";

type Props = React.ComponentProps<"button"> & {
  variant: "icon" | "primary";
  active?: boolean;
};

function Button({ children, className, variant, active, ...props }: Props) {
  return (
    <button
      className={clsx(
        " transition-all flex items-center justify-center gap-3",
        variant === "icon" &&
          "rounded w-11 h-11 p-2 border bg-white hover:bg-gray-50 ",
        variant === "primary" &&
          "p-2 px-4 bg-indigo-600 rounded-full text-white font-medium hover:bg-indigo-700",
        active && "!border-[3px] !border-indigo-500 ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
