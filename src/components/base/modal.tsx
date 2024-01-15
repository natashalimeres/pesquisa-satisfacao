import React, { ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
};

function Modal({ isOpen, toggle, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  function handleBackdropClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    toggle();
  }

  return (
    <div
      className="fixed inset-0 bg-red backdrop-blur-[2px] flex items-center justify-center  overflow-y-hidden"
      onClick={(e) => handleBackdropClick(e)}
    >
      <div
        className="rounded-lg shadow-md bg-white w-[32rem] mx-4 md:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
