import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ModalCategory({ onSubmit, value, onClose, open }) {
  const [newValue, setNewValue] = React.useState(
    value || { id: Date.now(), name: "" }
  );

  const onChange = (event) => {
    setNewValue({
      ...newValue,
      name: event.target.value,
    });
  };
  
  const handleSubmit = () => {
    onSubmit(newValue);
  };

  const title = value ? "Update project" : "Add project";

  const okText = value ? 'Update' : 'Add';

  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="text-3xl font-bold pb-4">{title}</div>
      <hr />
      <div>
        <h1 className="py-4 font-medium">Name</h1>
        <input
          type="text"
          value={newValue.name}
          onChange={onChange}
          className="border w-[400px] h-[40px] px-1"
        />
      </div>
      <div className="flex justify-end items-end ">
        <button
          onClick={onClose}
          className={
            "block w-full mt-3 mr-3 md:w-auto text-[#444444] bg-[#F5F5F5] hover:bg-[#E5E5E5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          }
        >
          Cancle
        </button>
        <button
          onClick={handleSubmit}
          className={
            "block pointer-events-auto w-full mt-3 md:w-auto text-[#FeFaFa] bg-[#F1B7B2] hover:bg-[#DB4C3F] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          }
        >
          {okText}
        </button>
      </div>
    </Modal>
  );
}
