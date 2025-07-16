import { toast } from "react-toastify";
import React, { useState } from "react";

function ModifyList({ handleAdd }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    calories: "",
    servings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(),
      name: formData.name,
      calories: parseInt(formData.calories),
      servings: parseInt(formData.servings),
    };

    console.log("Submitting", newRecipe);
    handleAdd(newRecipe);

    // Exibir o toast de sucesso
    toast.success("Item added successfully!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });

    // Limpar formulário
    setFormData({
      id: "",
      name: "",
      calories: "",
      servings: "",
    });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="number"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
          placeholder="Calories"
          required
        />
        <input
          type="number"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
          placeholder="Servings"
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default ModifyList;


