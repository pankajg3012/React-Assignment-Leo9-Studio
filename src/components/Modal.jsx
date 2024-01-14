import React, { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Tabledata from "../components/table/Tabledata";
import { colors } from "@mui/material";

const Modal = ({ setShowModal }) => {
  const modalRef = useRef();

  const closeModel = (e) => {
    if (modalRef.current === e.target) {
      onclose();
    }
  };

  return (
    <div className="container flex justify-center fixed inset-0 bg-black text-white z-10 bg-opacity-30 backdrop-blur-sm sm:flex Sm:justify-center items-center">
      <div className="mt-10 flex flex-col justify-center items-center md:flex md:justify-center md:items-center md:flex-col gap-5 text-white ">
        <button
          type="button"
          className="place-self-end"
          onClick={() => setShowModal(false)}
        >
          <CloseIcon sx={{ color: "white" }} />
        </button>
        <div className="bg-white rounded-xl px-20 py-10 flex ">
          <Tabledata />
        </div>
      </div>
    </div>
  );
};

export default Modal;
