import React, { useEffect, useState } from "react";
import Modal from "../base/modal";
import { getErrors } from "@/services/getErrors";
import { AlertCircle } from "lucide-react";
import { GetRequest } from "@/models/request";
import Loading from "../loading";
import Error from "../error";

type ErrorModalProps = {
  isOpen: boolean;
  toggle: () => void;
};

function ErrorModal({ isOpen, toggle }: ErrorModalProps) {
  const [data, setData] = useState<GetRequest>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getErrors();
      if (response.success) {
        setData(response.data);
      }
      setIsLoading(false);
    })();
  }, []);
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="border-red-600 border-4 p-4 flex items-center gap-4">
        {data ? (
          <>
            <AlertCircle className="fill-whit stroke-red-600" size={56} />
            <p className="text-xl font-semibold">{data.error}</p>
          </>
        ) : isLoading ? (
          <Loading />
        ) : (
          <Error />
        )}
      </div>
    </Modal>
  );
}

export default ErrorModal;
