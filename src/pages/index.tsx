import Header from "../components/header";
import { useEffect, useState } from "react";
import { getQuestions } from "@/services/getQuestions";
import Form from "@/components/form";
import Loading from "@/components/loading";
import Error from "@/components/error";
import { FormRequest } from "@/models/request";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState<FormRequest>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getQuestions();
      if (response.success) {
        setFormData(response.data);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="bg-mainGray-200">
      <Header />
      <div className="max-w-[687px] mx-auto pb-4 -mt-48 px-4">
        {formData ? (
          <>
            <Form data={formData} />
          </>
        ) : isLoading ? (
          <Loading />
        ) : (
          <Error />
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
