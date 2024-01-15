import { FormItem } from "@/models/request";
import React from "react";
import { FormGroupFactory } from "../formGroupFactory";
import TextArea from "../base/textarea";
import { Controller } from "react-hook-form";

function TextGroup({
  content,
  mandatory,
  answerValue,
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
      <div className="mt-2 w-full flex justify-center md:justify-start">
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
            <TextArea value={value} onChange={onChange} />
          )}
        />
      </div>
    </div>
  );
}

export default TextGroup;
