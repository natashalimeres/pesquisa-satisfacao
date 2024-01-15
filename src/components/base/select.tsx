import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useRef, useState } from "react";
import { FormGroupFactory } from "../formGroupFactory";
import useOutsideCallback from "@/hooks/useOutsideCallback";

type SelectProps = {
  value: number;
  onChange: (...event: any[]) => void;
  itens?: { value: number; description: string }[];
};

function Select({ value, onChange, itens }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef(null);
  useOutsideCallback(containerRef, () => setIsOpen(false));

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        className={`w-full p-4 relative flex items-centers border border-mainGray-700 rounded-lg cursor-pointer`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {value !== undefined ? (
          <p>{itens?.find((i) => i.value === value)?.description}</p>
        ) : (
          <p className="text-mainGray-700">Qual loja você frequenta?</p>
        )}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 ">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
      {isOpen ? (
        <div className="flex flex-col cursor-pointer absolute top-12 py-4 shadow-md right-0 left-0 bg-white rounded-b-lg border-b border-r border-l border-mainGray-700">
          {itens?.map((i) => (
            <div
              className="py-2 px-4 transition-all ease-in-out duration-300 hover:bg-mainGray-200"
              onClick={() => {
                onChange(i.value);
                setIsOpen(false);
              }}
            >
              {i.description}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Select;
