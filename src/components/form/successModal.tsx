import React, { useEffect, useState } from "react";
import Modal from "../base/modal";
import { getSuccess } from "@/services/getSuccess";
import { FormRequest, GetRequest } from "@/models/request";
import { AlertCircle } from "lucide-react";

type SuccessModalProps = {
  isOpen: boolean;
  toggle: () => void;
};

function SuccessModal({ isOpen, toggle }: SuccessModalProps) {
  const [data, setData] = useState<GetRequest>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getSuccess();
      if (response.success) {
        setData(response.data);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="border-green-600 border-4 p-4 flex items-center gap-4">
        <AlertCircle className="fill-whit stroke-green-600" size={56} />
        <p className="text-xl font-semibold">Os dados estão corretos!</p>
      </div>
    </Modal>
  );
}

export default SuccessModal;
