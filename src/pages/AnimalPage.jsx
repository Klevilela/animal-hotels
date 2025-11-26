import React, { useState } from "react";
import "./AnimalPage.css";
import Form from "../components/Animal/form";
import List from "../components/Animal/list";

function AnimalPage() {
  const [animals, setAnimals] = useState([]);
  const [editingAnimal, setEditingAnimal] = useState(null);

  const [tutores] = useState([
    { id: 1, name: "Ana", email: "ana@email.com" },
    { id: 2, name: "Carlos", email: "carlos@email.com" }
  ]);

  function handleAddAnimal(animal) {
    const newAnimal = { ...animal, id: Date.now() };
    setAnimals((prev) => [...prev, newAnimal]);
  }

  function handleDelete(id) {
    setAnimals((prev) => prev.filter((a) => a.id !== id));
  }

  function handleUpdateAnimal(animalAtualizado) {
    setAnimals((prev) =>
      prev.map((a) => (a.id === animalAtualizado.id ? animalAtualizado : a))
    );
    setEditingAnimal(null);
  }

  function handleEditClick(animal) {
    setEditingAnimal(animal);
  }

  return (
    <div className="animal-page">
      <div className="container-duas-colunas">
        <div className="coluna-esquerda">
          <Form
            onSubmit={handleAddAnimal}
            onUpdate={handleUpdateAnimal}
            editingAnimal={editingAnimal}
            tutores={tutores}
          />
        </div>

        <div className="coluna-direita">
          <List
            animais={animals}
            onDelete={handleDelete}
            onEdit={handleEditClick}
          />
        </div>
      </div>
    </div>
  );
}

export default AnimalPage;
