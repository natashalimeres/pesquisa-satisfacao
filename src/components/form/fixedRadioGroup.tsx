import { FormItem } from "@/models/request";
import React from "react";
import { FormGroupFactory } from "../formGroupFactory";
import { Controller } from "react-hook-form";
import Radio from "../base/inputRadio";

function FixedRadioGroup({
  content,
  mandatory,
  answerValue,
  control,
  error,
  index,
}: FormGroupFactory) {
  const name = `question-${index}`;
  const grade = Array.from({ length: 11 }, (_, index) => index);

  return (
    <div>
      <h2 className="text-[24px] font-semibold text-center md:text-left">
        Título da pergunta deve ficar aqui
      </h2>
      <p className="text-[14px] font-medium text-center md:text-left">
        {content}{" "}
        {!mandatory && <span className="text-mainGray-700">(opicional)</span>}
      </p>
      <div className="mt-9">
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
            <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
              {grade.map((g) => (
                <Radio
                  label={g.toString()}
                  value={g}
                  checked={value === g}
                  onChange={onChange}
                  labelPosition={"bottom"}
                />
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default FixedRadioGroup;
