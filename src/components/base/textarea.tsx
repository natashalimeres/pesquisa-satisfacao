import React from "react";
import { FormGroupFactory } from "../formGroupFactory";

type TextAreaProps = {
  value: string;
  onChange: (...event: any[]) => void;
};

const TextArea = ({ value, onChange }: TextAreaProps) => {
  return (
    <div className="w-full">
      <textarea
        value={value}
        onChange={onChange}
        className="border border-gray-300 w-full p-2 resize-none rounded-md min-h-40"
        placeholder={"Digite aqui..."}
      />
    </div>
  );
};

export default TextArea;
