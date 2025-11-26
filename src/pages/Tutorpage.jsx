import { useState } from "react";
import Form from "../components/Tutor/form";
import List from "../components/Tutor/list";
import "./TutorPage.css";

export default function TutorPage() {
  const [tutores, setTutores] = useState([]);
  const [editingTutor, setEditingTutor] = useState(null);

  function handleAddTutor(data) {
    const id = tutores.length ? Math.max(...tutores.map(t => t.id)) + 1 : 1;
    setTutores([...tutores, { id, ...data }]);
  }

  function handleDeleteTutor(id) {
    setTutores(tutores.filter(t => t.id !== id));
  }

  function handleEditTutor(tutor) {
    setEditingTutor(tutor);
  }

  function handleUpdateTutor(updated) {
    setTutores(tutores.map(t => (t.id === updated.id ? updated : t)));
    setEditingTutor(null);
  }

  return (
    <div className="tutor-page">
      <header className="tutor-header">
        <h1>Tutores</h1>
      </header>

      <div className="tutor-grid">
        <Form onSubmit={editingTutor ? handleUpdateTutor : handleAddTutor} editingTutor={editingTutor} />
        <List tutors={tutores} onDelete={handleDeleteTutor} onEdit={handleEditTutor} />
      </div>
    </div>
  );
}
