import React, { useEffect, useState } from "react";
import { FieldErrors, FieldValues, useForm } from "react-hook-form";
import { FormItem, FormRequest } from "@/models/request";
import FormGroupFactory from "./formGroupFactory";
import Button from "./base/button";
import Modal from "./base/modal";
import SuccessModal from "./form/successModal";
import ErrorModal from "./form/errorModal";
import { postSurvey } from "@/services/postSurvey";
import { toast } from "react-toastify";

type FormProps = {
  data: FormRequest;
};

export type FormValues = {
  [key: string]: string | number;
};

export type FormErrors = {
  [key: string]: {
    message: string;
    ref: { name: string };
    type: string;
  };
};

function Form({ data }: FormProps) {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);

  const [isError, setIsError] = useState<boolean>(false);

  const toggleSuccessModal = () => setIsSuccessModalOpen((prev) => !prev);
  const toggleErrorModal = () => setIsErrorModalOpen((prev) => !prev);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  async function onSubmit(values: FormValues) {
    const response = await postSurvey(values);
    if (response.success) {
      toast("Sucesso ao enviar a pesquisa", { type: "success" });
    }
  }

  function onError(errors: FieldErrors<FieldValues>) {
    Object.keys(errors).forEach((key) => {
      toast(errors[key]?.message as string, { type: "error" });
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-[40px] text-white font-semibold  mb-5 text-center md:text-left leading-none">
        Pesquisa de satisfação
      </h1>
      <div className="p-8 flex flex-col gap-10  rounded-md bg-white">
        {data.itens.map((d: FormItem, i: number) => (
          <FormGroupFactory
            {...d}
            index={i}
            control={control}
            error={errors[`question-${i}`]?.message}
          />
        ))}

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
          <Button
            variant="submit"
            type="submit"
            onClick={handleSubmit(onSubmit, onError)}
          >
            Enviar Fake Post
          </Button>
          <Button variant="success" onClick={toggleSuccessModal}>
            Enviar Sucesso
          </Button>
          <Button variant="error" onClick={toggleErrorModal}>
            Enviar Erro
          </Button>
        </div>
      </div>
      {isSuccessModalOpen && (
        <SuccessModal isOpen={isSuccessModalOpen} toggle={toggleSuccessModal} />
      )}
      {isErrorModalOpen && (
        <ErrorModal isOpen={isErrorModalOpen} toggle={toggleErrorModal} />
      )}
    </form>
  );
}

export default Form;
