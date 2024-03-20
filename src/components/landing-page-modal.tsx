import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

const Modal = ({ children, show, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
 
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
        console.log("Clicked outside the modal");
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="w-full h-full flex items-center justify-center"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
