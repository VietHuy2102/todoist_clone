import React from "react";
import { Edit } from "../../assets/Edit";
import ModalCategory from "../modal/ModalCategory";
import TaskForm from "./taskItem/TaskForm";
import TaskItem from "./taskItem/TaskItem";

export default function Container({ category, onUpdate }) {
  const [openModal, setOpenModal] = React.useState(false);
  const [isAddTask, setIsAddTask] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);
  console.log(tasks);

  const handleSubmit = (newCategory) => {
    onUpdate(newCategory);
    setOpenModal(false);
  };

  const handleAddTask = ({ name, description }) => {
    setTasks(
      tasks.concat({
        id: Date.now(),
        name: name,
        description: description,
      })
    );
  };

  if (!category) {
    return <div>Creat new category</div>;
  }

  return (
    <>
      <div className="p-[40px]">
        <div className="w-[500px] ml-4 rounded-md flex justify-between items-center font-medium text-2xl h-[30px]">
          <h2>{category.name}</h2>
          <div onClick={() => setOpenModal(true)}>
            <Edit />
          </div>
        </div>
        <div>
          <TaskItem tasks={tasks} />
          <button
            className="bg-red-200 flex justify-center items-center border p-2"
            onClick={() => setIsAddTask(!isAddTask)}
          >
            Add Task
          </button>

          {isAddTask ? <TaskForm onSubmit={handleAddTask} /> : ""}
        </div>
      </div>
      {openModal && (
        <ModalCategory
          value={category}
          onSubmit={handleSubmit}
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}
