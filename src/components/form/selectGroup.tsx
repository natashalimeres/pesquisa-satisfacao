import { FormItem } from "@/models/request";
import React from "react";
import { FormGroupFactory } from "../formGroupFactory";
import Select from "../base/select";
import { Controller } from "react-hook-form";

function SelectGroup({
  content,
  mandatory,
  answerValue,
  itens,
  control,
  error,
  index,
}: FormGroupFactory) {
  const name = `question-${index}`;
  return (
    <div>
      <label className="block text-[14px] text-center md:text-start font-medium mb-2">
        {content}{" "}
        {!mandatory && <span className="text-mainGray-700">(opicional)</span>}
      </label>
      <div className="mt-2 flex justify-center md:justify-start">
        <Controller
          defaultValue={answerValue}
          control={control}
          name={name}
          rules={{
            required: mandatory
              ? `Por favor preencha a questão ${index + 1}`
              : false,
          }}
          render={({ field: { value, onChange } }) => (
            <Select value={value} onChange={onChange} itens={itens} />
          )}
        />
      </div>
    </div>
  );
}

export default SelectGroup;
