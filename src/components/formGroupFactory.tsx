import { FormItem } from "@/models/request";
import React from "react";
import StarGroup from "./form/starGroup";
import FixedRadioGroup from "./form/fixedRadioGroup";
import TextGroup from "./form/textGroup";
import SelectGroup from "./form/selectGroup";
import RadioGroup from "./form/radioGroup";
import CheckboxGroup from "./form/checkboxGroup";
import {
  Control,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from "react-hook-form";
import TagGroup from "./form/tagGroup";

export type FormGroupFactory = FormItem & {
  index: number;
  control: Control<FieldValues, any>;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};

function FormGroupFactory({
  content,
  mandatory,
  typeQuestion,
  answerValue,
  horizontal,
  itens,
  control,
  error,
  index,
}: FormGroupFactory) {
  switch (typeQuestion) {
    case 1:
      return (
        <StarGroup
          content={content}
          mandatory={mandatory}
          answerValue={answerValue}
          control={control}
          error={error}
          index={index}
        />
      );
    case 2:
      return (
        <FixedRadioGroup
          content={content}
          mandatory={mandatory}
          answerValue={answerValue}
          control={control}
          error={error}
          index={index}
        />
      );
    case 3:
      return (
        <TextGroup
          content={content}
          mandatory={mandatory}
          answerValue={answerValue}
          control={control}
          error={error}
          index={index}
        />
      );
    case 4:
      return (
        <SelectGroup
          content={content}
          mandatory={mandatory}
          answerValue={answerValue}
          itens={itens}
          control={control}
          error={error}
          index={index}
        />
      );
    case 5:
      return (
        <RadioGroup
          content={content}
          mandatory={mandatory}
          answerValue={answerValue}
          itens={itens}
          control={control}
          error={error}
          index={index}
        />
      );
    case 6:
      if (horizontal) {
        return (
          <CheckboxGroup
            content={content}
            mandatory={mandatory}
            answerValue={answerValue}
            itens={itens}
            control={control}
            error={error}
            index={index}
          />
        );
      } else {
        return (
          <TagGroup
            content={content}
            mandatory={mandatory}
            answerValue={answerValue}
            itens={itens}
            control={control}
            error={error}
            index={index}
          />
        );
      }
  }
}

export default FormGroupFactory;
