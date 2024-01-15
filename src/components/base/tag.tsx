import React from "react";

type TagProps = {
  label: string;
  value: string | number;
  checked: boolean;
  onChange: (value: string | number) => void;
};

function Tag({ label, value, checked, onChange }: TagProps) {
  return (
    <div
      onClick={() => onChange(value)}
      className={` py-2 border px-2 md:px-4 cursor-pointer select-none transition-all duration-300 ease-in-out ${
        checked
          ? "bg-mainGray-700 text-white border-mainGray-700"
          : "bg-white text-black hover:bg-mainGray-700 hover:border-mainGray-700"
      } rounded-full text-sm`}
    >
      {label}
    </div>
  );
}

export default Tag;
