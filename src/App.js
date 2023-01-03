import { useState } from "react";
import "./App.css";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [categories, setCategories] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [currentCategoryId, setCurrentCategoryId] = useState();

  const handleCreate = (newCategory) => {
    setCategories(categories.concat(newCategory));
    setCurrentCategoryId(newCategory.id);
    setValueSearch("");
  };
  

  
  const handleDelete = (category) => {
    setCategories(
      categories.filter((categoryItem) => categoryItem.id !== category.id)
    );
  };

  const handleUpdate = (updatingCategory) => {
    setCategories(
      categories.map((categoryItem) => {
        if (categoryItem.id !== updatingCategory.id) {
          return categoryItem;
        }
        return updatingCategory;
      })
    );
  };

  const handleSelect = (categoryId) => {
    setCurrentCategoryId(categoryId);
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar
          categories={categories}
          onCreate={handleCreate}
          onDelete={handleDelete}
          onSelect={handleSelect}
        />
        <Container
          onUpdate={handleUpdate}
          category={categories.find(
            (category) => category.id === currentCategoryId
          )}
        />
      </div>
    </>
  );
}

export default App;
