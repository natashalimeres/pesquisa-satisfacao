import { FormItem } from "@/models/request";
import React from "react";
import RatingStars from "../base/ratingStars";
import { FormGroupFactory } from "../formGroupFactory";
import { Controller } from "react-hook-form";

function StarGroup({
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
      <h2 className="text-center md:text-left text-[24px] font-semibold">
        Título da pergunta deve ficar aqui
      </h2>
      <p className="text-[14px] font-medium text-center md:text-left">
        {content}
      </p>
      <div className="flex justify-center md:justify-start">
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
            <RatingStars value={value} onChange={onChange} />
          )}
        ></Controller>
      </div>
    </div>
  );
}

export default StarGroup;
