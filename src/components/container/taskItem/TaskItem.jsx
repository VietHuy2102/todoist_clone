import React, { useState } from "react";
import TaskForm from "./TaskForm";

export default function TaskItem({ tasks }) {
  const [currentEditingTaskId, setCurrentEditingTaskId] = useState();
  console.log(currentEditingTaskId);
  return (
    <ul>
      {tasks.map((task) => {
        if (task.id === currentEditingTaskId) {
          return <TaskForm value={task} />;
        }
        return (
          <li
            key={task.id}
            className="flex justify-between items-center mt-6 border-solid border"
          >
            <div>
              <h2>{task.name}</h2>
              <p>{task.description}</p>
            </div>
            <button
              className="p-2 m-2 border border-solid bg-cyan-200"
              onClick={() => setCurrentEditingTaskId(task.id)}
            >
              Edit Task
            </button>
          </li>
        );
      })}
    </ul>
  );
}
