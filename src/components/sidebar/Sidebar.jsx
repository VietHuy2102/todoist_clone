import React from "react";
import { Add } from "../../assets/Add";
import ModalCategory from "../modal/ModalCategory";
import CategoriesItem from "./CategoriesItem";

export default function Sidebar({ categories, onDelete, onCreate, onSelect }) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleSubmit = (newCategory) => {
    onCreate(newCategory);
    setOpenModal(false);
  };

  return (
    <>
      <div className="h-full w-[305px] bg-[#FAFAFA]">
        <div className="flex justify-around items-center">
          <span>Projects</span>
          <div className="pl-[113px] ">
            <div
              className="block space-y-4 md:flex md:space-y-0 md:space-x-4"
              onClick={() => setOpenModal(true)}
            >
              <Add />
            </div>
          </div>
        </div>
        <ul className="list-disc list-inside">
          {categories.map((category) => (
            <CategoriesItem
              key={category.id}
              name={category.name}
              onClick={() => onSelect(category.id)}
              onDelete={() => onDelete(category)}
            />
          ))}
        </ul>
      </div>
      {openModal && (
        <ModalCategory
          onSubmit={handleSubmit}
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}
