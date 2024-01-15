import { FormItem } from "@/models/request";
import React from "react";
import { FormGroupFactory } from "../formGroupFactory";
import { Controller } from "react-hook-form";
import Radio from "../base/inputRadio";

function RadioGroup({
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
      <p className="text-[14px] text-center md:text-start font-medium">
        {content}{" "}
        {!mandatory && <span className="text-mainGray-700">(opicional)</span>}
      </p>
      <div className="mt-2">
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
            <div className="flex items-center justify-center md:justify-start gap-4">
              {itens?.map((i) => (
                <Radio
                  label={i.description}
                  value={i.value}
                  checked={i.value === value}
                  onChange={onChange}
                  labelPosition="right"
                />
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default RadioGroup;
