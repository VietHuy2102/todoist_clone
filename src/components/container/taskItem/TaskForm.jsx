import React, { useState } from "react";

export default function TaskForm({onSubmit,value}) {
  const { name: currentName, description: currentDescription } = value || { name: '', description: ''};
 const [name, setName] =useState(currentName)
 const [description, setDescription] =useState(currentDescription)

  const handleChangeName = (e) =>{
    setName(e.target.value)
  }
  const handleChangeDescription = (e) =>{
   setDescription(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit({
      name,
      description
    })
    setName('')
    setDescription('')
  }
  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border"
          value={name}
          onChange={handleChangeName}
          placeholder={"Your Task..."}
        />
         <input
          type="text"
          className="w-full border"
          value={description}
          onChange={handleChangeDescription}
          placeholder={"Your Description..."}
        />
        <button
          className="bg-red-200 flex justify-center items-center border p-2"
        >
          Add
        </button>
      </form>
    </div>
  );
}
