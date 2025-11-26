import Card from "./card";

export default function List({ tutors, onDelete, onEdit }) {
  return (
    <div className="tutor-list">
      <h2>Tutores Cadastrados</h2>

      {tutors.length === 0 && <p>Nenhum tutor cadastrado.</p>}

      {tutors.map(t => (
        <Card
          key={t.id}
          tutor={t}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
