import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "submit" | "error" | "success";
};

function Button({ type, variant, children, ...rest }: ButtonProps) {
  const getButtonStyles = () => {
    switch (variant) {
      case "error":
        return "bg-red-600 hover:bg-red-500 text-black";
      case "submit":
        return "bg-mainYellow hover:bg-yellow-400 text-black";
      case "success":
        return "bg-green-600 hover:bg-green-500 text-black";
    }
  };

  return (
    <button
      type={type}
      className={`${getButtonStyles()} font-bold py-2 px-6 w-full md:w-auto transition-all duration-300 ease-in-out rounded-full text-[18px] `}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
