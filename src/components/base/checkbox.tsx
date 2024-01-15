import { Check } from "lucide-react";

type CheckboxProps = {
  label: string;
  value: string | number;
  checked: boolean;
  onChange: (value: string | number) => void;
};

export default function Checkbox({
  label,
  value,
  onChange,
  checked,
}: CheckboxProps) {
  return (
    <div
      className="cursor-pointer flex items-center gap-2"
      onClick={() => onChange(value)}
    >
      <div className="w-4 h-4 border-2 border-black flex justify-center items-center">
        {checked ? <Check size={14} /> : null}
      </div>
      <label className="text-sm ">{label}</label>
    </div>
  );
}
