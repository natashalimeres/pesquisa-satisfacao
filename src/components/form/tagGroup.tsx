import React from "react";
import { FormGroupFactory } from "../formGroupFactory";
import { Controller } from "react-hook-form";
import Tag from "../base/tag";

function TagGroup({
  content,
  mandatory,
  answerValue,
  control,
  error,
  index,
  itens,
}: FormGroupFactory) {
  const name = `question-${index}`;
  const a = answerValue ? [answerValue] : [];
  return (
    <div>
      <label className="block text-[14px] text-center md:text-start font-medium mb-2">
        {content}{" "}
        {!mandatory && <span className="text-mainGray-700">(opicional)</span>}
      </label>
      <div className="mt-2">
        <Controller
          defaultValue={answerValue ? [answerValue] : []}
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
                <Tag
                  label={i.description}
                  value={i.value}
                  checked={value?.includes(i.value)}
                  onChange={(newValue) =>
                    !value?.includes(newValue)
                      ? onChange([...value, newValue])
                      : onChange(value?.filter((v: any) => v !== newValue))
                  }
                />
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default TagGroup;
