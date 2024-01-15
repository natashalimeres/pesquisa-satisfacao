import { FormItem } from "@/models/request";
import React from "react";
import { FormGroupFactory } from "../formGroupFactory";
import Checkbox from "../base/checkbox";
import { Controller } from "react-hook-form";

function CheckboxGroup({
  content,
  mandatory,
  answerValue,
  control,
  error,
  index,
  itens,
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
          control={control}
          defaultValue={answerValue ? [answerValue] : []}
          rules={{
            required: mandatory
              ? `Por favor preencha a questão ${index + 1}`
              : false,
          }}
          name={name}
          render={({ field: { value, onChange } }) => (
            <div className="flex flex-col items-center md:items-start gap-4">
              {itens?.map((i) => {
                return (
                  <Checkbox
                    label={i.description}
                    value={i.value}
                    checked={value?.includes(i.value)}
                    onChange={(newValue) =>
                      !value?.includes(newValue)
                        ? onChange([...value, newValue])
                        : onChange(value?.filter((v: any) => v !== newValue))
                    }
                  />
                );
              })}
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default CheckboxGroup;
